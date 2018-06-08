import React from 'react';
import Link from 'gatsby-link';
import Label from '../components/Label/';
import Ribbon from '../components/Ribbon/';
import Popover from '../components/Popover/';
import PopoverActivator from '../components/Popover/PopoverActivator';
import PopoverDisplay from '../components/Popover/PopoverDisplay';

import '../weave/components/popover/index.scss';

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

    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr 1fr', gridGap: '1rem' }}>
      <Popover className="my--xl" style={{ outline: '1px solid red' }}>
        <PopoverActivator clickIndication>Click here for a Popover!</PopoverActivator>
        <PopoverDisplay left>Popover content! Popover content! Popover content! Popover content!</PopoverDisplay>
      </Popover>

      <Popover className="my--xl" style={{ outline: '1px solid red' }}>
        <PopoverActivator clickIndication>Click here for a Popover!</PopoverActivator>
        <PopoverDisplay down>Popover content! Popover content! Popover content! Popover content!</PopoverDisplay>
      </Popover>

      <Popover className="my--xl" style={{ outline: '1px solid red' }}>
        <PopoverActivator clickIndication>Click here for a Popover!</PopoverActivator>
        <PopoverDisplay>Popover content! Popover content! Popover content! Popover content!</PopoverDisplay>
      </Popover>

      <Popover className="my--xl" style={{ outline: '1px solid red' }}>
        <PopoverActivator clickIndication>Click here for a Popover!</PopoverActivator>
        <PopoverDisplay right>Popover content! Popover content! Popover content! Popover content!</PopoverDisplay>
      </Popover>
    </div>

    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr 1fr', gridGap: '1rem' }}>
      <div style={{ height: '200px', position: 'relative', outline: '1px solid red' }}>
        Hi
        <Ribbon position="top-left">Hello</Ribbon>
        <Ribbon position="top-right">Hello</Ribbon>
        <Ribbon position="bottom-left">Hello</Ribbon>
        <Ribbon position="bottom-right">Hello</Ribbon>
      </div>
      <div style={{ height: '200px', position: 'relative', outline: '1px solid red' }}>
        Hi
        <Ribbon position="top-left" size="sm">Hello</Ribbon>
      </div>
      <div style={{ height: '200px', position: 'relative', outline: '1px solid red' }}>
        Hi
        <Ribbon position="top-left" size="md">Hello</Ribbon>
      </div>
      <div style={{ height: '200px', position: 'relative', outline: '1px solid red' }}>
        Hi
        <Ribbon position="top-left" size="lg">Hello</Ribbon>
      </div>
    </div>
  </div>
);

export default FourthPage;
