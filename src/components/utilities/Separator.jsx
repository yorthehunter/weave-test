import React from 'react';
import { bool } from 'prop-types';


/**
 *  Separate content, either vertically or horizontally. Finally! What the hell
 * did we ever do before this thing existed?!?
 */

const Separator = (props) => (
  props.horizontal ?
    <hr className="u-horizontal-separator" />
    :
    <span className="u-separator-pipe" />
);

const defaultProps = {
  horizontal: false,
};

const propTypes = {
  horizontal: bool,
};

Separator.defaultProps = defaultProps;
Separator.propTypes = propTypes;

export default Separator;
