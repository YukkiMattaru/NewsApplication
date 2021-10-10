/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetArticlesAnnounceByPath
// ====================================================

export interface GetArticlesAnnounceByPath_rubricators_articles {
  __typename: "Article";
  id: any;
  title: string;
  announce: string | null;
  body: string;
  publicationTime: any;
}

export interface GetArticlesAnnounceByPath_rubricators {
  __typename: "Rubricator";
  /**
   * Это новости, которые принадлежат рубрике
   */
  articles: (GetArticlesAnnounceByPath_rubricators_articles | null)[] | null;
}

export interface GetArticlesAnnounceByPath {
  rubricators: (GetArticlesAnnounceByPath_rubricators | null)[] | null;
}

export interface GetArticlesAnnounceByPathVariables {
  path?: string | null;
}
