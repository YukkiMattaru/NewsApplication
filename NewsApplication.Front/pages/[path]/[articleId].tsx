import { NextPage } from 'next';
import { useRouter } from 'next/router';
import _ from 'lodash';
import { useQuery } from '@apollo/client';
import React from 'react';
import moment from 'moment';
import styled from 'styled-components';
import GET_ARTICLE_BY_ID from '../../graphql/queries/getArticleByID';
import { GetArticleById, GetArticleByIdVariables } from '../../graphql/queries/__generated__/GetArticleById';

const ArticlePage: NextPage = () => {
  const router = useRouter();
  const articleId = _.join(router.query.articleId, '') ?? '';
  const { data, error: articleFetchingError, loading: isArticleFetching } = useQuery<
    GetArticleById,
    GetArticleByIdVariables>(GET_ARTICLE_BY_ID, { variables: { articleId } });
  if (isArticleFetching) return <>Loading...</>;
  if (articleFetchingError) return <>{articleFetchingError.message}</>;
  const article = data?.articles?.[0];

  return (
    <>
      {article && (
      <ArticleItem key={article?.id.toString()}>
        <ArticleTitle>
          {article?.title}
        </ArticleTitle>
        <ArticleAnnounce>
          {article?.announce}
        </ArticleAnnounce>
        <ArticleBody>
          {article?.body ?? ''}
        </ArticleBody>
        <ArticlePublicationTime>
          {`Опубликовано: ${article?.publicationTime ? moment(article.publicationTime).format('DD.MM.YYYY hh:mm') : ''}`}
        </ArticlePublicationTime>
      </ArticleItem>
      )}
    </>
  );
};

const ArticleItem = styled.div`
  color: white;
  width: 80%;
  padding: 16px;
  display: flex;
  margin: 20px auto;
  flex-direction: column;
  row-gap: 5px;
`;

const ArticleTitle = styled.h1`
  padding: 0;
  margin: 0;
`;

const ArticleAnnounce = styled.h3`
  font-weight: bold;
`;

const ArticleBody = styled.div`
  font-size: 20px;
`;

const ArticlePublicationTime = styled.div`
  margin-top: 20px;
`;

export default ArticlePage;
