import 'cross-fetch/polyfill';
import React from 'react';
import ApolloClient from 'apollo-boost';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloProvider } from '@apollo/react-hooks';
import nextWithApollo from 'next-with-apollo';

const GRAPHQL_API_URI = 'http://192.168.0.3:4200/dev';
const API_KEY = `${process.env.APP_KEY}`;

export const client = (initialState) => new ApolloClient({
  uri: GRAPHQL_API_URI,
  cache: new InMemoryCache({ dataIdFromObject: () => Math.random() }).restore(initialState || {}),
  request: (operation) => {
    operation.setContext({
      headers: {
        'x-api-key': API_KEY || '',
      },
    });
  },
});

export const withApollo = nextWithApollo(
  client,
  {
    getDataFromTree: 'ssr',
    render: ({ Page, props }) => {
      const { apollo } = props;
      return (
        <ApolloProvider client={apollo}>
          <Page {...props} />
        </ApolloProvider>
      );
    },
  },
);
