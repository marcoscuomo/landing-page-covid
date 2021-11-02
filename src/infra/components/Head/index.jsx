import React from 'react';
import HeadNext from 'next/head';
import PropTypes from 'prop-types';

const Head = ({title}) => {
  return (
    <HeadNext>
      <title>{title}</title>
      <link rel="shortcut icon" href="/favicon.png" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400&display=swap" rel="stylesheet" />
    </HeadNext>
  );
}

Head.prototype = {
  title: PropTypes.string.isRequired,
}

export default Head;