/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetArticleById
// ====================================================

export interface GetArticleById_articles {
  __typename: "Article";
  id: any;
  title: string;
  announce: string | null;
  body: string;
  publicationTime: any;
}

export interface GetArticleById {
  articles: (GetArticleById_articles | null)[] | null;
}

export interface GetArticleByIdVariables {
  articleId: any;
}
