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
    <Layout>
      <ApolloProvider client={apolloClient}>
        <Head>
          <title>Новости</title>
          <meta property="og:title" content="Новости" key="title" />
        </Head>
        <StyledHeader />
        {props.children}
      </ApolloProvider>
    </Layout>
  );
};

const Layout = styled.div`
  margin: 0 auto;
  padding: 0;
`;

const StyledHeader = styled(Header)`

`;

export default DefaultLayout;
