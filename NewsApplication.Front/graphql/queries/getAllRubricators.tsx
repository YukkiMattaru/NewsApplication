import { gql } from '@apollo/client';

const GET_ALL_RUBRICATORS = gql`
    query GetAllRubricators {
      rubricators {
        id
        path
        title
      }
    }
`;

export default GET_ALL_RUBRICATORS;
