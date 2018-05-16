import React from 'react';
import { node, oneOf, bool } from 'prop-types';
import classNames from 'classnames';
import '../weave/components/button/index.scss';

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
    'weave-button',
    size ? `weave-button--${size}` : '',
    type ? `weave-button--${type}` : '',
    responsive ? 'weave-button--responsive' : '',
    fullWidth ? 'weave-button--full-width' : '',
    disabled ? 'is-disabled' : '',
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
