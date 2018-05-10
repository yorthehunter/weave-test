import React from 'react';
import { node } from 'prop-types';

const P = ({ children }) => (
  <p className="weave-p">{children}</p>
);

P.defaultProps = {
  children: undefined,
};

P.propTypes = {
  children: node,
};

export default P;
