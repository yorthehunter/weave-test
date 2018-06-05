import React from 'react';
import Link from 'gatsby-link';
import Label from '../components/Label/';

// import '../weave/components/box/index.scss';

const FourthPage = () => (
  <div>
    <Link to="/">Go back to the homepage</Link>
    <Link to="/page-5/">Go to page 5</Link>

    <Label size="sm">Hello</Label>
    <Label size="md">Hello</Label>
    <Label size="lg">Hello</Label>

    <Label content="Hello?" />

    <div className="my--sm"><Label type="accent">Hello</Label></div>
    <div className="my--sm"><Label type="neutral">Hello</Label></div>
    <div className="my--sm"><Label type="success">Hello</Label></div>
    <div className="my--sm"><Label type="error">Hello</Label></div>
    <div className="my--sm"><Label type="warning">Hello</Label></div>
    <div className="my--sm"><Label type="info">Hello</Label></div>
    <div className="my--sm"><Label responsive>Hello</Label></div>

  </div>
);

export default FourthPage;
