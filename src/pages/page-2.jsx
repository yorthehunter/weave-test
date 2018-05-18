import React from 'react';
import Link from 'gatsby-link';
import Banner from 'weave-react-banner';
import Badge from '../components/Badge/';

const SecondPage = () => (
  <div>

    <h1>Hi from the second page</h1>
    <p>Welcome to page 2</p>
    <Link to="/">Go back to the homepage</Link>

    <Banner content="Banner content goes here." visible />
    <Banner content="Banner content goes here." type="info" visible />
    <Banner content="Banner content goes here." type="error" visible />
    <Banner content="Banner content goes here." type="warning" visible />
    <Banner content="Banner content goes here." type="success" visible />
    <Banner content="Banner content goes here." size="sm" visible />
    <Banner content="Banner content goes here." size="md" visible />
    <Banner content="Banner content goes here." size="lg" visible />
    <Banner content="Banner content goes here." responsive visible />
    <Banner content="Banner content goes here." dismissable={false} />

    <Badge content="!" />
    <Badge content="!" position="inline" />
    <div style={{ position: 'relative', height: '5rem', outline: '1px solid black' }}>
      <Badge content="!" position="upper-right" />
    </div>
  </div>
);

export default SecondPage;
