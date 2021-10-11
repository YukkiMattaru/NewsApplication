import { gql } from '@apollo/client';

const GET_ARTICLE_BY_ID = gql`
  query GetArticleById($articleId: Uuid!) {
    articles(where: { id: { eq: $articleId } }) {
      id
      title
      announce
      body
      publicationTime
    }
  }
`;

export default GET_ARTICLE_BY_ID;
