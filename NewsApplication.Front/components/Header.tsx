import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { faNewspaper } from '@fortawesome/free-regular-svg-icons/faNewspaper';
import styled from 'styled-components';
import Navbar from './Navbar';

const Header: React.FC = () => {
  return (
    <StyledHeader>
      <HeaderContainer>
        <TitleBlock>
          <FontAwesomeIcon icon={faNewspaper} size="2x" color="rgb(250, 250, 250)" />
          <PrimaryTitle>Новости</PrimaryTitle>
          <Navbar />
        </TitleBlock>
      </HeaderContainer>
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  background: rgb(22, 26, 29);
`;

const HeaderContainer = styled.div`
  width: 80%;
  margin: 0 auto;
`;

const TitleBlock = styled.div`
  padding: 10px;
  display: flex;
  column-gap: 1em;
  color: rgb(250, 250, 250);
  align-items: center;
`;

const PrimaryTitle = styled.h1`
  margin: 0;
  padding: 0;
`;

export default Header;
