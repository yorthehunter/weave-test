import React from 'react';
import Link from 'gatsby-link';
import P from '../components/P';

const IndexPage = () => (
  <div>
    <h1 className="weave-h1">Hi people</h1>
    <P>Welcome to your new Gatsby site.</P>
    <P>Now go build something great.</P>
    <Link to="/page-2/">Go to page 2</Link>
  </div>
);

export default IndexPage;
