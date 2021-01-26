import React from 'react';
import { Brand, PageHeader } from '@patternfly/react-core';
import odhLogo from '../images/odh-logo.svg';
import HeaderTools from './HeaderTools';

type HeaderProps = {
  isNavOpen: boolean;
  onNavToggle: () => void;
};

// export const Header = ({ isNavOpen, onNavToggle }) => {
const Header: React.FC<HeaderProps> = ({ isNavOpen, onNavToggle }) => {
  return (
    <PageHeader
      logo={<Brand src={odhLogo} alt="ODH Logo" />}
      headerTools={<HeaderTools />}
      showNavToggle
      isNavOpen={isNavOpen}
      onNavToggle={onNavToggle}
    />
  );
};

export default Header;
