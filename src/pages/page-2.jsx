import React from 'react';
import Link from 'gatsby-link';

const SecondPage = () => (
  <div>
    <h1>Hi from the second page</h1>
    <p>Welcome to page 2</p>
    <Link to="/">Go back to the homepage</Link>

    <div className="weave-banner">
      <p className="weave-banner__message">Hello!</p>
      <a className="weave-banner__close" />
    </div>

    <div className="weave-banner weave-banner--error">
      <p className="weave-banner__message">Hello!</p>
      <a className="weave-banner__close" />
    </div>

    <div className="weave-banner weave-banner--info">
      <p className="weave-banner__message">Hello!</p>
      <a className="weave-banner__close" />
    </div>

    <div className="weave-banner weave-banner--success">
      <p className="weave-banner__message">Hello!</p>
      <a className="weave-banner__close" />
    </div>

    <div className="weave-banner weave-banner--warning">
      <p className="weave-banner__message">Hello!</p>
      <a className="weave-banner__close" />
    </div>


    <div className="weave-banner weave-banner--sm">
      <p className="weave-banner__message">Hello!</p>
      <a className="weave-banner__close" />
    </div>

    <div className="weave-banner weave-banner--md">
      <p className="weave-banner__message">Hello!</p>
      <a className="weave-banner__close" />
    </div>

    <div className="weave-banner weave-banner--lg">
      <p className="weave-banner__message">Hello!</p>
      <a className="weave-banner__close" />
    </div>

    <div className="weave-banner weave-banner--responsive">
      <p className="weave-banner__message">Hello!</p>
      <a className="weave-banner__close" />
    </div>
  </div>
);

export default SecondPage;
