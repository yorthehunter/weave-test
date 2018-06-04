import React from 'react';
import Link from 'gatsby-link';
import Banner from '../components/Banner/';
import Badge from '../components/Badge/';
import Card from '../components/Card/';

import '../weave/components/box/index.scss';
import '../weave/components/utilities/index.scss';

const SecondPage = () => (
  <div>
    <Card inset="lg">Hello</Card>

    <div className="weave-box">

      <div className="weave-box">
        Hello
      </div>
      <span className="separator separator--vertical"></span>
      <div className="weave-box">
        Hello
      </div>
      <div className="weave-box">
        Hello
      </div>
      <div className="weave-box">
        Hello
      </div>
    </div>
    <div className="separator separator--horizontal"></div>

    <h1>Hi from the second page</h1>
    <p>Welcome to page 2</p>
    <Link to="/">Go back to the homepage</Link>
    <Link to="/page-3/">Go to page 3</Link>


    <Banner content="Banner content goes here." visible />
    <Banner content="Banner content goes here." type="info" visible />
    <Banner content="Banner content goes here." type="error" visible />
    <Banner content="Banner content goes here." type="warning" visible />
    <Banner content="Banner content goes here." type="success" visible />
    <Banner content="Flat banner" type="error" flat visible />
    <Banner content="Banner content goes here." size="sm" visible />
    <Banner content="Banner content goes here." size="md" visible />
    <Banner content="Banner content goes here." size="lg" visible />
    <Banner content="Banner content goes here." responsive visible />
    <Banner content="Banner content goes here." dismissable={false} visible />
    <Banner html="Hi there! This banner contains <strong>html</strong>!" dismissable={false} visible />
    <Banner dismissable={false} visible>
      Banner containing any children, including other components.
      <Badge content="?" />
    </Banner>



    <p className="weave-p">This line of text has a badge.<Badge content="!" /></p>
    <p className="weave-p">This line of text has an inline badge with no content.<Badge position="inline" /></p>
    <div style={{ position: 'relative', height: '5rem', outline: '1px solid black' }}>
      <p className="weave-p">The container div has a badge.</p>
    </div>
  </div>
);

export default SecondPage;
