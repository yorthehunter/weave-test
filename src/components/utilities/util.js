const classModifier = (options, selection, prefix, defaultValue) => {
  if (options.includes(selection)) {
    return `${prefix}--${selection}`;
  } else {
    return defaultValue ? `${prefix}--${defaultValue}` : '';
  }
};

const buttonTypeModifier = (type, prefix, defaultValue) => {
  const buttonTypeOpts = [
    'primary',
    'secondary',
    'flat',
    'cta',
  ];

  return classModifier(buttonTypeOpts, type, prefix, defaultValue);
};

const sizeModifier = (size, prefix, defaultValue) => {
  const sizeOpts = [
    'full-width',
    'xs',
    'sm',
    'md',
    'lg',
    'xl',
  ];

  return classModifier(sizeOpts, size, prefix, defaultValue);
};

const positionModifier = (position, prefix, defaultValue) => {
  const positionOpts = [
    'left',
    'right',
    'top',
    'bottom',
    'above',
    'below',
    'inline',
    'upper-right',
  ];

  return classModifier(positionOpts, position, prefix, defaultValue);
};

const alertStyleModifier = (alertStyle, prefix, defaultValue) => {
  const alertOpts = [
    'error',
    'warning',
    'info',
    'success',
  ];

  return classModifier(alertOpts, alertStyle, prefix, defaultValue);
};

const camelCaseToDash = (myStr) => myStr.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();

export {
  buttonTypeModifier,
  classModifier,
  sizeModifier,
  positionModifier,
  alertStyleModifier,
  camelCaseToDash,
};
