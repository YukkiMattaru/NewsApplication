/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetAllRubricators
// ====================================================

export interface GetAllRubricators_rubricators {
  __typename: "Rubricator";
  id: any;
  path: string;
  title: string;
}

export interface GetAllRubricators {
  rubricators: (GetAllRubricators_rubricators | null)[] | null;
}
