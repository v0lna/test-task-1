import React from 'react';
import { newsState } from 'redux/reducers/news';

interface Props {
  state: newsState;
}
export const News: React.FC<Props> = (props) => {
  const {
    state: { loading, news, error },
  } = props;
  return (
    <div>
      {error ? <h2>Error </h2> : loading ? <h2>Loading...</h2> : null}
      {news.length > 0
        ? news.map((el) => {
            return (
              <div key={el.id}>
                <h1>{el.name}</h1>
                <h2>{el.author}</h2>
                <span>{el.createdAt}</span>
                <p>{el.text}</p>
              </div>
            );
          })
        : null}
    </div>
  );
};
