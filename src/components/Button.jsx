import React from 'react';
import { node, oneOf, bool } from 'prop-types';
import classNames from 'classnames';
// import 'weave-ui-button';
import '../weave/components/button/index.scss';

const componentPrefix = 'weave-button';

const Button = (props) => {
  const {
    type,
    size,
    responsive,
    disabled,
    fullWidth,
    children,
  } = props;

  const componentClasses = classNames([
    componentPrefix,
    size && `${componentPrefix}--${size}`,
    type && `${componentPrefix}--${type}`,
    responsive && `${componentPrefix}--responsive`,
    fullWidth && `${componentPrefix}--full-width`,
    disabled && 'is-disabled',
  ]);

  return (
    <button className={componentClasses}>
      {children}
    </button>
  );
};

Button.defaultProps = {
  type: undefined,
  size: undefined,
  disabled: false,
  responsive: false,
  fullWidth: false,
};

Button.propTypes = {
  type: oneOf([undefined, 'primary', 'secondary', 'cta', 'flat']),
  size: oneOf([undefined, 'xs', 'sm', 'md', 'lg']),
  disabled: bool,
  responsive: bool,
  fullWidth: bool,
  children: node.isRequired,
};

export default Button;
