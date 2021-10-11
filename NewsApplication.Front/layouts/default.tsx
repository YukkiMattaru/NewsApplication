import React from 'react';
import Head from 'next/head';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import styled from 'styled-components';
import Header from '../components/Header';

const DefaultLayout: React.FC = (props) => {
  const apolloClient = new ApolloClient({
    uri: `${process.env.NEXT_PUBLIC_API_BASE_URL}/graphql`,
    cache: new InMemoryCache(),
  });

  return (
    <>
      <ApolloProvider client={apolloClient}>
        <Head>
          <title>Новости</title>
          <meta property="og:title" content="Новости" key="title" />
        </Head>
        <Layout>
          <StyledHeader />
          <MainContent>
            {props.children}
          </MainContent>
        </Layout>
      </ApolloProvider>
    </>
  );
};

const Layout = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const StyledHeader = styled(Header)`
  position: fixed;
  left: 0;
  top: 0;
  height: 63px;
`;

const MainContent = styled.div`
  min-height: calc(100vh - 63px);
`;

export default DefaultLayout;
