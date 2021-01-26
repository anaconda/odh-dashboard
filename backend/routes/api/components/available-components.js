module.exports = [
  {
    key: 'jupyterhub',
    label: 'JupyterHub',
    description:
      'A multi-user version of the notebook designed for companies, classrooms and research labs',
    kfdefApplications: ['jupyterhub', 'notebook-images'],
    route: 'jupyterhub',
    img: 'images/jupyterhub.svg',
    docsLink: 'https://jupyter.org/hub',
    support: 'redhat',
  },
  {
    key: 'argo',
    label: 'Argo',
    description: 'Kubernetes native workflows, events, CI and CD',
    kfdefApplications: ['odhargo-cluster', 'odhargo'],
    route: 'argo-server',
    img: 'images/argo.svg',
    docsLink: 'https://argoproj.github.io/',
    support: 'other',
  },
  {
    key: 'superset',
    label: 'Superset',
    description: 'A modern, enterprise-ready business intelligence web application',
    kfdefApplications: ['superset'],
    route: 'superset',
    img: 'images/superset.svg',
    docsLink: 'https://superset.incubator.apache.org/',
    support: 'other',
  },
  {
    key: 'prometheus',
    label: 'Prometheus',
    description: 'Systems monitoring and alerting toolkit',
    kfdefApplications: ['prometheus-cluster', 'prometheus-operator'],
    route: 'prometheus-portal',
    img: 'images/prometheus.svg',
    docsLink: 'https://prometheus.io/docs/',
    support: 'redhat',
  },
  {
    key: 'grafana',
    label: 'Grafana',
    description: 'Visualization and analytics software',
    kfdefApplications: ['grafana-cluster', 'grafana-instance'],
    route: 'grafana-route',
    img: 'images/grafana.svg',
    docsLink: 'https://grafana.com/docs/grafana/latest/',
    support: 'redhat',
  },
  {
    key: 'spark',
    label: 'Spark',
    description: 'Unified analytics engine for large-scale data processing',
    kfdefApplications: ['radanalyticsio-spark-cluster'],
    route: null,
    img: 'images/spark.svg',
    docsLink: 'https://spark.apache.org/docs/latest/',
    support: 'other',
  },
  {
    key: 'seldon',
    label: 'Seldon',
    description: 'Platform for rapidly deploying machine learning models on Kubernetes.',
    kfdefApplications: ['odhseldon'],
    route: null,
    img: 'images/seldon.svg',
    docsLink: 'https://docs.seldon.io/',
    support: 'other',
  },
  {
    key: 'kafka',
    label: 'Kafka',
    description: 'Distributed event streaming platform',
    kfdefApplications: ['strimzi-operator', 'kafka-cluster'],
    route: null,
    img: 'images/kafka.svg',
    docsLink: 'https://kafka.apache.org/documentation/',
    support: 'other',
  },
  {
    key: 'airflow',
    label: 'Airflow',
    description: 'Platform to programmatically author, schedule, and monitor workflows',
    kfdefApplications: ['airflow-cluster', 'airflow-operator'],
    route: null,
    img: 'images/airflow.svg',
    docsLink: 'https://airflow.apache.org/',
    support: 'other',
  },
  {
    key: 'hue',
    label: 'Hue',
    description: 'Data exploration platform for Hive and S3 storage',
    kfdefApplications: ['hue'],
    route: 'hue',
    img: 'images/hue.svg',
    docsLink: 'https://docs.gethue.com/',
    support: 'other',
  },
  {
    key: 'thriftserver',
    label: 'Spark SQL Thrift Server',
    description: 'Expose Spark data frames modeled as Hive tables through a JDBC connection',
    kfdefApplications: ['thriftserver'],
    route: 'thriftserver',
    img: 'images/spark.svg',
    docsLink: 'https://spark.apache.org/docs/latest/sql-distributed-sql-engine.html',
    support: 'other',
  },
];
