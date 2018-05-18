import React from 'react';
import { oneOf, string, bool, node } from 'prop-types';
import { sizeModifier, alertStyleModifier } from '../utilities/util';
import Icon from '../utilities/Icon';
import CustomTag from '../utilities/CustomTag';
import 'weave-ui-banner';

const componentPrefix = 'weave-banner';

/**
 * A banner is a notification that is usually dismissable and often appears at
 * the top of the page, just below the nav (e.g. a flash message in Rails).
 */

class Banner extends React.Component {
  constructor(props) {
    super();

    this.state = {
      weaveBannerVisible: props.visible && true,
    };

    this.removeBanner = this.removeBanner.bind(this);
  }

  removeBanner(e) {
    e.preventDefault();
    this.setState({ weaveBannerVisible: false });
  }

  render() {
    const {
      content,
      children,
      type,
      size,
      responsive,
      dismissable,
      flat,
    } = this.props;

    const iconColor = () => {
      switch (type) {
        case 'error':
        case 'success':
          return '#FFFFFF';
        case 'info':
        case 'warning':
          return '#000000';
        default:
          return '#000000';
      }
    };

    const componentClasses = [
      componentPrefix,
      sizeModifier(size, componentPrefix),
      alertStyleModifier(type, componentPrefix),
      responsive && `${componentPrefix}--responsive`,
      flat && `${componentPrefix}--flat`,
    ];

    if (this.state.weaveBannerVisible) {
      return (
        <CustomTag
          {...this.props}
          componentClasses={componentClasses}
        >
          <p className={`${componentPrefix}__message`} dangerouslySetInnerHTML={{ __html: content || children }} />
          {
            dismissable &&
            <button
              className={`${componentPrefix}__close`}
              onClick={this.removeBanner}
            >
              <Icon name="close" color={iconColor()} />
            </button>
          }
        </CustomTag>
      );
    }
    return null;
  }
}

const defaultProps = {
  tag: 'div',
  type: null,
  size: null,
  content: null,
  visible: false,
  responsive: false,
  dismissable: true,
  flat: false,
  children: null,
};

const propTypes = {
  tag: string,
  type: oneOf([
    'error',
    'success',
    'warning',
    'info',
    null,
  ]),
  size: oneOf([
    'sm',
    'md',
    'lg',
    null,
  ]),
  /** Banner content (if props.children aren't specified) */
  content: string,
  visible: bool,
  responsive: bool,
  dismissable: bool,
  flat: bool,
  /** Banner content (if props.content isn't specified) */
  children: node,
};

Banner.defaultProps = defaultProps;
Banner.propTypes = propTypes;
export default Banner;
