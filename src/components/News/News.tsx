import React from 'react';
import { newsState } from 'redux/reducers/news';
import { Container, Card, Typography } from '@material-ui/core';

interface Props {
  state: newsState;
}
export const News: React.FC<Props> = (props) => {
  const {
    state: { loading, news, error },
  } = props;
  return (
    <>
      {error ? (
        <Typography align="center" variant="body1">
          Error{' '}
        </Typography>
      ) : loading ? (
        <Typography align="center" variant="body1">
          Loading...
        </Typography>
      ) : null}
      {news.length > 0
        ? news.map((el) => {
            return (
              <Container maxWidth="md" key={el.id} style={{ marginTop: '25px' }}>
                <Card>
                  <Typography align="center" variant="h3" component="title">
                    {el.name}{' '}
                  </Typography>
                  <Typography align="center" variant="h4" component="h4">
                    {el.author}
                  </Typography>
                  <Typography align="center" variant="subtitle1" component="h5">
                    {el.createdAt}
                  </Typography>
                  <Typography align="center" variant="body1" style={{ marginTop: '10px' }}>
                    {el.text}
                  </Typography>
                </Card>
              </Container>
            );
          })
        : null}
    </>
  );
};
