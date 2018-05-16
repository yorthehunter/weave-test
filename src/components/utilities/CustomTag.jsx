import React from 'react';
import classNames from 'classnames';
import { oneOfType, array, string, object, node, func } from 'prop-types';

const CustomTag = (props) => {
  const Tag = props.tag;

  const {
    componentClasses,
    customClasses,
  } = props;

  const classes = classNames(
    componentClasses,
    customClasses,
  );

  return (
    <Tag
      style={Object.assign({}, props.componentStyles, props.customStyles)}
      className={classes}
      href={props.href}
      value={props.value}
      type={props.type}
      ref={props.componentRef}
      onClick={props.onClick}
    >
      { props.children }
    </Tag>
  );
};

const propTypes = {
  tag: string.isRequired,
  customStyles: object,
  componentStyles: object,
  customClasses: oneOfType([
    string,
    array,
  ]),
  componentClasses: oneOfType([
    string,
    array,
  ]),
  children: node,
  href: string,
  value: string,
  type: string,
  componentRef: func,
  onClick: func,
};

const defaultProps = {
  customStyles: {},
  componentStyles: {},
  customClasses: null,
  componentClasses: null,
  children: null,
  href: null,
  value: null,
  type: null,
  componentRef: null,
  onClick: null,
};

CustomTag.defaultProps = defaultProps;
CustomTag.propTypes = propTypes;
export default CustomTag;
