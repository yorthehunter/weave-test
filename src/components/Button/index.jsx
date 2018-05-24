import React from 'react';
import { oneOf, string, bool, func, node } from 'prop-types';
import { sizeModifier, buttonTypeModifier } from '../utilities/util';
import CustomTag from '../utilities/CustomTag';
import '../../weave/components/button/index.scss';

const componentPrefix = 'weave-button';

/**
 * Button renders a weave-button with size, type, and other optional modifiers.
 * Use buttons to cause actions, not to link between pages.
 */

const Button = (props) => {
  const {
    size,
    type,
    submit,
    tag,
    children,
    onClick,
    disabled,
    responsive,
    fullWidth,
  } = props;

  const componentClasses = [
    componentPrefix,
    size && `${componentPrefix}--${size}`,
    type && `${componentPrefix}--${type}`,
    responsive && `${componentPrefix}--responsive`,
    fullWidth && `${componentPrefix}--full-width`,
    disabled && 'is-disabled',
  ];

  return (
    <CustomTag
      {...props}
      tag={submit ? 'input' : tag}
      type={submit ? 'submit' : type}
      value={submit ? children : undefined}
      onClick={onClick}
      componentClasses={componentClasses}
    >
      { submit ? null : children }
    </CustomTag>
  );
};

const propTypes = {
  tag: string,
  target: string,
  type: oneOf([
    'primary',
    'secondary',
    'cta',
    'flat',
    null,
  ]),
  size: oneOf([
    'xs',
    'sm',
    'md',
    'lg',
    null,
  ]),
  /** If true, disables button */
  disabled: bool,
  /** If true, forces a width of 100% */
  fullWidth: bool,
  /** If true, creates a responsive button */
  responsive: bool,
  /** Generates a submit input element */
  submit: bool,
  /** What happens on click */
  onClick: func,
  children: node.isRequired,
};

const defaultProps = {
  tag: 'button',
  target: null,
  type: null,
  size: null,
  disabled: false,
  responsive: false,
  fullWidth: false,
  submit: false,
  onClick: undefined,
};

Button.propTypes = propTypes;
Button.defaultProps = defaultProps;
export default Button;
