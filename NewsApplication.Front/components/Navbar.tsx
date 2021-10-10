import React from 'react';
import styled from 'styled-components';
import { useQuery } from '@apollo/client';
import Link from 'next/link';
import { useRouter } from 'next/router';
import GET_ALL_RUBRICATORS from '../graphql/queries/getAllRubricators';
import { GetAllRubricators } from '../graphql/queries/__generated__/GetAllRubricators';

const Navbar: React.FC = () => {
  const { loading: isRubricatorsLoading, error: rubricatorsError, data } = useQuery<GetAllRubricators>(GET_ALL_RUBRICATORS);

  const router = useRouter();

  if (isRubricatorsLoading) return <></>;
  if (rubricatorsError) return <>{rubricatorsError.message}</>;
  return (
    <NavbarContainer>
      {data?.rubricators?.map((rubricator) => (
        <NavItem key={rubricator?.id} className={router.query.path === rubricator?.path ? 'active' : ''}>
          <Link href={`/${rubricator?.path}` ?? ''}>{rubricator?.title ?? ''}</Link>
        </NavItem>
      ))}
    </NavbarContainer>
  );
};

const NavbarContainer = styled.nav`
  margin-left: 2em;
  padding-top: 0.4em;
  display: flex;
  column-gap: 2em;
`;

const NavItem = styled.div`
  font-size: 20px;
  color: rgb(250, 250, 250);
  & > a {
    text-decoration: none;
    color: rgb(250, 250, 250);
  }
  
  &:hover, &.active {
    a {
      color: rgba(255, 255, 255, 0.6);
    }
  }
`;

export default Navbar;
