import { gql } from '@apollo/client';

const GET_ARTICLES_ANNOUNCE_BY_PATH = gql`
    query GetArticlesAnnounceByPath($path: String) {
      rubricators(where: { path: { eq: $path } }) {
        articles {
          id
          title
          announce
          body
          publicationTime
        }
      }
    } 
`;

export default GET_ARTICLES_ANNOUNCE_BY_PATH;
