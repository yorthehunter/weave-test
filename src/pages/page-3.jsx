import React from 'react';
import Link from 'gatsby-link';
import Button from '../components/Button/';
import Card from '../components/Card/';
import Collection from '../components/Collection/';
import CollectionItem from '../components/Collection/CollectionItem';
// import Badge from '../components/Badge/';

// import '../weave/components/box/index.scss';

const ThirdPage = () => (
  <div>
    <Card isHoverable>
      <p className="weave-p">Content</p>
    </Card>
    <Collection>
      <CollectionItem>Item</CollectionItem>
      <CollectionItem>Item</CollectionItem>
    </Collection>
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gridGap: '1rem', alignItems: 'self-start' }}>
      <Collection isHoverable size="sm">
        <CollectionItem>Item</CollectionItem>
        <CollectionItem>Item</CollectionItem>
      </Collection>
      <Collection isHoverable size="md">
        <CollectionItem>Item</CollectionItem>
        <CollectionItem>Item</CollectionItem>
      </Collection>
      <Collection isHoverable size="lg">
        <CollectionItem>Item</CollectionItem>
        <CollectionItem>Item</CollectionItem>
      </Collection>
    </div>

    <Card inset="none">
      <Collection isHoverable size="sm">
        <CollectionItem><Button type="flat">Item</Button></CollectionItem>
        <CollectionItem>Item</CollectionItem>
      </Collection>
    </Card>

    <Collection isHoverable>
      <CollectionItem indicator="neutral">Item</CollectionItem>
      <CollectionItem indicator="accent">Item</CollectionItem>
      <CollectionItem indicator="success">Item</CollectionItem>
      <CollectionItem indicator="info">Item</CollectionItem>
      <CollectionItem indicator="warning">Item</CollectionItem>
      <CollectionItem indicator="alert">Item</CollectionItem>
    </Collection>

  </div>
);

export default ThirdPage;
