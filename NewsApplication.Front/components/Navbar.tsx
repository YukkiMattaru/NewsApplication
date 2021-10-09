import React from 'react';
import styled from 'styled-components';
import { useQuery } from '@apollo/client';
import GET_ALL_RUBRICATORS from '../graphql/queries/getAllRubricators';
import { GetAllRubricators } from '../graphql/queries/__generated__/GetAllRubricators';

const Navbar: React.FC = () => {
  const { loading: isRubricatorsLoading, error: rubricatorsError, data: rubricators } = useQuery<GetAllRubricators>(GET_ALL_RUBRICATORS);

  if (isRubricatorsLoading) return <>Loading...</>;
  if (rubricatorsError) return <>{rubricatorsError.message}</>;
  console.log(rubricators);
  return (
    <NavbarContainer />
  );
};

const NavbarContainer = styled.nav`
`;

export default Navbar;
