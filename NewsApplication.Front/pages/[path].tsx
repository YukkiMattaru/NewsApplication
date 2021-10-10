import { NextPage } from 'next';
import React from 'react';
import { useRouter } from 'next/router';
import { useQuery } from '@apollo/client';
import _ from 'lodash';
import moment from 'moment';
import styled from 'styled-components';
import GET_ARTICLES_ANNOUNCE_BY_PATH from '../graphql/queries/getArticlesAnnounceByPath';
import {
  GetArticlesAnnounceByPath,
  GetArticlesAnnounceByPathVariables,
} from '../graphql/queries/__generated__/GetArticlesAnnounceByPath';

const NewsPage: NextPage = () => {
  const router = useRouter();
  const path = _.join(router.query.path, '') ?? '';
  const { data, error: articlesFetchingError, loading: isArticlesFetching } = useQuery<
    GetArticlesAnnounceByPath,
    GetArticlesAnnounceByPathVariables>(GET_ARTICLES_ANNOUNCE_BY_PATH, { variables: { path } });
  if (isArticlesFetching) return <>Loading...</>;
  if (articlesFetchingError) return <>{articlesFetchingError.message}</>;
  const articles = data?.rubricators?.[0]?.articles ?? [];

  return (
    <div>
      {articles && (
        <ArticlesContainer>
          {articles.map((article) => (
            <ArticleItem key={article?.id}>
              <ArticleTitle>
                {article?.title}
              </ArticleTitle>
              <ArticleAnnounce>
                {article?.announce}
              </ArticleAnnounce>
              <ArticlePublicationTime>
                {`Опубликовано: ${article?.publicationTime ? moment(article.publicationTime).format('DD.MM.YYYY-hh:mm') : ''}`}
              </ArticlePublicationTime>
              <ArticleBodyPreview>
                {_.truncate(article?.body ?? '', {
                  length: 100,
                  separator: /,? +/,
                })}
              </ArticleBodyPreview>
              <ArticleDetailsButton>
                Подробнее...
              </ArticleDetailsButton>
            </ArticleItem>
          ))}
        </ArticlesContainer>
      )}
    </div>
  );
};

const ArticlesContainer = styled.div`
  color: white;
  background: rgb(22, 26, 29);
  width: 80%;
  margin: 0 auto;
`;

const ArticleItem = styled.div`
`;

const ArticleTitle = styled.h3`
  padding: 0;
  margin: 0;
`;

const ArticleAnnounce = styled.div`
`;

const ArticleBodyPreview = styled.div`
`;

const ArticlePublicationTime = styled.div`
`;

const ArticleDetailsButton = styled.button`
`;

export default NewsPage;
