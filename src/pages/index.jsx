import React from 'react';
import Link from 'gatsby-link';
import P from '../components/P';
import Button from '../components/Button';

const IndexPage = () => (
  <div>
    <h1 className="weave-h1">Hi people</h1>
    <P>Welcome to your new Gatsby site.</P>
    <P>Now go build something great.</P>
    <Link to="/page-2/">Go to page 2</Link>

    <div>
      <Button size="xs">Button</Button>
      <Button size="sm">Button</Button>
      <Button size="md">Button</Button>
      <Button size="lg">Button</Button>
      <Button>Button</Button>
    </div>

    <div>
      <Button fullWidth size="xs">Button</Button>
      <Button fullWidth size="sm">Button</Button>
      <Button fullWidth size="md">Button</Button>
      <Button fullWidth size="lg">Button</Button>
      <Button>Button</Button>
    </div>

    <div>
      <Button type="primary">Button</Button>
      <Button type="secondary">Button</Button>
      <Button type="cta">Button</Button>
      <Button type="flat">Button</Button>
      <Button>Button</Button>
    </div>

    <div>
      <Button responsive>Button</Button>
    </div>

    <div>
      <Button type="primary" disabled>Button</Button>
      <Button type="secondary" disabled>Button</Button>
      <Button type="cta" disabled>Button</Button>
      <Button type="flat" disabled>Button</Button>
      <Button disabled>Button</Button>
    </div>
  </div>
);

export default IndexPage;
