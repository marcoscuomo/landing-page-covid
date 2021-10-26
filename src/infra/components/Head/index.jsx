import React from 'react';
import HeadNext from 'next/head';
import PropTypes from 'prop-types';

const Head = ({title}) => {
  return (
    <HeadNext>
      <title>{title}</title>
    </HeadNext>
  );
}

Head.prototype = {
  title: PropTypes.string.isRequired,
}

export default Head;