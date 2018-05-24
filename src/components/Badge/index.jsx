import React from 'react';
import { string, oneOf } from 'prop-types';
import 'weave-ui-badge';
import { positionModifier } from '../utilities/util';
import CustomTag from '../utilities/CustomTag';

const componentPrefix = 'weave-badge';

/**
 * A badge is a small, round indicator that often sits inline or slightly overlapping
 * content of which it relates. Badges are subtle ways to "notify" the user,
 * often to signify that action is required because of a change in status.
 */

const Badge = (props) => {
  const {
    position,
    content,
    children,
  } = props;

  return (
    <CustomTag componentPrefix={componentPrefix} {...props}>
      {content || children}
    </CustomTag>
  );
};

const defaultProps = {
  tag: 'span',
  position: null,
  content: '',
  children: false,
};

const propTypes = {
  tag: string,
  position: oneOf([
    'inline',
    'upper-right',
    null,
  ]),
  /** Badge content (if props.children aren't specified) */
  content: (props) => {
    if (props.content && props.children) {
      console.warn('Cannot have both "content" AND "children" props.');
    }
  },
  /** Badge content (if props.content isn't specified) */
  children: (props) => {
    if (props.content && props.children) {
      console.warn('Cannot have both "content" AND "children" props.');
    }
  },
};

Badge.defaultProps = defaultProps;
Badge.propTypes = propTypes;
export default Badge;
