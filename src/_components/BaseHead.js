import React from 'react';
import Head from 'next/head';
import PropTypes from 'prop-types';

const BaseHead = ({
  description, keywords, title, imageUrl,
}) => (
  <Head>
    <title>{title}</title>
    <meta name="title" content={title} />
    <meta property="og:title" content={title} />
    <meta charset="utf-8" />

    <meta name="keywords" content={[...keywords, title].join(', ')} />
    <meta name="language" content="en-us" />
    <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
    <meta name="description" content={description} />
    <meta property="og:description" content={description} />

    <meta name="image" content={imageUrl} />
    <meta property="og:image" content={imageUrl} />

    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
    <link href="/static/css/reset.css" rel="stylesheet" />
    <link href="" rel="stylesheet" />
  </Head>
);

BaseHead.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  keywords: PropTypes.arrayOf(PropTypes.string),
};

BaseHead.defaultProps = {
  keywords: [],
};

export default BaseHead;
