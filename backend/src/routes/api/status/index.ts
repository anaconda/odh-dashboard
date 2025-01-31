import createError from 'http-errors';
import { FastifyInstance, FastifyRequest } from 'fastify';
import { KubeFastifyInstance, KubeStatus } from '../../../types';
import { DEV_MODE } from '../../../utils/constants';
import { addCORSHeader } from '../../../utils/responseUtils';

type groupObjResponse = {
  users: string[];
};

const status = async (
  fastify: KubeFastifyInstance,
  request: FastifyRequest,
): Promise<{ kube: KubeStatus }> => {
  const kubeContext = fastify.kube.currentContext;
  const { currentContext, namespace, currentUser, clusterID, clusterBranding } = fastify.kube;
  const currentUserName =
    (request.headers['x-forwarded-user'] as string) || currentUser.username || currentUser.name;
  let userName = currentUserName?.split('/')[0];
  if (!userName || userName === 'inClusterUser') {
    userName = 'kube:admin';
  }
  const customObjectsApi = fastify.kube.customObjectsApi;
  const coreV1Api = fastify.kube.coreV1Api;
  let isAdmin = false;

  try {
    const configGroupName = (await coreV1Api.readNamespacedConfigMap('groups-config', namespace))
      .body.data['groups-config'];
    const adminGroup = (await coreV1Api.readNamespacedConfigMap(configGroupName, namespace)).body
      .data['admin_groups'];
    const adminGroupResponse = await customObjectsApi.getClusterCustomObject(
      'user.openshift.io',
      'v1',
      'groups',
      adminGroup,
    );
    const adminUsers = (adminGroupResponse.body as groupObjResponse).users;
    isAdmin = adminUsers.includes(userName);
  } catch (e) {
    console.log('Failed to get groups: ' + e.toString());
  }
  fastify.kube.coreV1Api.getAPIResources();
  if (!kubeContext && !kubeContext.trim()) {
    const error = createError(500, 'failed to get kube status');
    error.explicitInternalServerError = true;
    error.error = 'failed to get kube status';
    error.message =
      'Unable to determine current login stats. Please make sure you are logged into OpenShift.';
    fastify.log.error(error, 'failed to get status');
    throw error;
  } else {
    return Promise.resolve({
      kube: {
        currentContext,
        currentUser,
        namespace,
        userName,
        clusterID,
        clusterBranding,
        isAdmin,
      },
    });
  }
};

export default async (fastify: FastifyInstance): Promise<void> => {
  fastify.get('/', async (request, reply) => {
    return status(fastify, request)
      .then((res) => {
        if (DEV_MODE) {
          addCORSHeader(request, reply);
        }
        return res;
      })
      .catch((res) => {
        console.log(`ERROR: devMode: ${DEV_MODE}`);
        if (DEV_MODE) {
          addCORSHeader(request, reply);
        }
        reply.send(res);
      });
  });
};
