import options from './constants';

const classModifier = (opts, selection, prefix, defaultValue) => {
  if (opts.includes(selection)) {
    return `${prefix}--${selection}`;
  } else {
    return defaultValue ? `${prefix}--${defaultValue}` : '';
  }
};

const buttonTypeModifier = (type, prefix, defaultValue) => (
  classModifier(options.buttonType, type, prefix, defaultValue)
);

const sizeModifier = (size, prefix, defaultValue) => (
  classModifier(options.size, size, prefix, defaultValue)
);

const positionModifier = (position, prefix, defaultValue) => (
  classModifier(options.position, position, prefix, defaultValue)
);

const alertStyleModifier = (alertStyle, prefix, defaultValue) => (
  classModifier(options.alert, alertStyle, prefix, defaultValue)
);

const camelCaseToDash = (myStr) => myStr.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();

export {
  buttonTypeModifier,
  classModifier,
  sizeModifier,
  positionModifier,
  alertStyleModifier,
  camelCaseToDash,
};
