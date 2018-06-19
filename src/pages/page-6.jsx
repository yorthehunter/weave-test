import React from 'react';
import Link from 'gatsby-link';
import Separator from '../components/Separator/';

import '../weave/components/separator/index.scss';

const SixthPage = () => (
  <div>
    <Link to="/">Go back to the homepage</Link>
    <Link to="/page-7">Go to page 7</Link>

    <div className="my--lg" style={{ display: 'flex' }}>
      <p>Hello</p>
      <Separator />
      <p>Hello</p>
      <Separator />
      <p>Hello</p>
    </div>

    <div className="my--lg" style={{ display: 'inline-flex', flexDirection: 'column' }}>
      <p>Hello</p>
      <Separator horizontal />
      <p>Hello</p>
      <Separator horizontal />
      <p>Hello</p>
    </div>

  </div>
);

export default SixthPage;
