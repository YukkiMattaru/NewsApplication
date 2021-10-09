import React from 'react';
import styled from 'styled-components';
import { Guid } from 'guid-typescript';

interface Rubricator {
  id: Guid;
  title: string;
  path: string;
}

const Navbar: React.FC<Rubricator[]> = ({ rubricator }) => {
  return (
    <NavbarContainer>
      {Rubricator}
    </NavbarContainer>
  );
};

const NavbarContainer = styled.nav`
`;

export default Navbar;
