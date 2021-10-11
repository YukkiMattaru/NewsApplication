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

  const onArticleClick = (id: string) => {
    if (id) router.push(`${router.asPath}/${id.toString()}`);
  };

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
              <ArticleBodyPreview>
                {_.truncate(article?.body ?? '', {
                  length: 300,
                  separator: /,? +/,
                })}
              </ArticleBodyPreview>
              <ArticleFooter>
                <ArticleDetailsButton onClick={() => onArticleClick(article?.id.toString())}>
                  Читать дальше
                </ArticleDetailsButton>
                <ArticlePublicationTime>
                  {`Опубликовано: ${article?.publicationTime ? moment(article.publicationTime).format('DD.MM.YYYY hh:mm') : ''}`}
                </ArticlePublicationTime>
              </ArticleFooter>
            </ArticleItem>
          ))}
        </ArticlesContainer>
      )}
    </div>
  );
};

const ArticlesContainer = styled.div`
  color: white;
  width: 80%;
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 20px;
  margin: 20px auto;
`;

const ArticleItem = styled.div`
  border: 2px solid white;
  border-radius: 15px;
  padding: 16px;
  display: flex;
  flex-direction: column;
  row-gap: 5px;
`;

const ArticleTitle = styled.h3`
  padding: 0;
  margin: 0;
`;

const ArticleAnnounce = styled.div`
  font-weight: bold;
`;

const ArticleBodyPreview = styled.div`
`;

const ArticleFooter = styled.div`
  display: flex;
  margin-top: 10px;
  justify-content: space-between;
`;

const ArticlePublicationTime = styled.div`
`;

const ArticleDetailsButton = styled.button`
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  border: 0;
  border-radius: 5px;
  background: white;
  padding: 7px;
  cursor: pointer;
  font-weight: bold;
  transition: all ease 0.3s;

  &:hover {
    background: #1d49aa;
    color: white;
  }
  
  &:focus {
    background: #1d49aa;
    box-shadow: 0 0 0 1px #cbd6ee;
    color: white;
  }
`;

export default NewsPage;
