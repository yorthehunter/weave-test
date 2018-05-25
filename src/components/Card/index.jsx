import React from 'react';
import { string, node, bool } from 'prop-types';
import CustomTag from '../utilities/CustomTag';
import { sizeModifier } from '../utilities/util';

const componentPrefix = 'weave-card';

/**
 * Card
 */

const Card = (props) => {
  const {
    isHoverable,
    inset,
    children,
  } = props;

  const componentClasses = [
    componentPrefix,
    sizeModifier(inset, 'u-inset'),
    isHoverable ? 'weave-card--hoverable' : null,
  ];

  return (
    <CustomTag componentClasses={componentClasses} {...props}>
      {children}
    </CustomTag>
  );
};

const defaultProps = {
  tag: 'div',
  isHoverable: false,
  inset: 'md',
  children: false,
};

const propTypes = {
  tag: string,
  isHoverable: bool,
  inset: string,
  children: node,
};

Card.defaultProps = defaultProps;
Card.propTypes = propTypes;
export default Card;
