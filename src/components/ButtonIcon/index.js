import React from 'react';
import { Icon } from 'expo';
import { Platform } from 'react-native';

export default class ButtonIcon extends React.Component {
  render() {
    const buttonMargin = this.props.right
      ? { marginLeft: 10 }
      : { marginRight: 10 };

    let style = {
      ...styles.icon,
      ...buttonMargin
    };

    // Fix problem with Array ([undefined, null]) given as this.props.style
    if (
      this.props.style &&
      Object.prototype.toString.call(this.props.style) === '[object Object]'
    ) {
      style = {
        ...style,
        ...this.props.style
      };
    }

    return (
      <Icon.Ionicons
        name={
          this.props.dual
            ? Platform.OS === 'ios'
              ? `ios-${this.props.name}`
              : `md-${this.props.name}`
            : this.props.name
        }
        size={this.props.size ? this.props.size : 30}
        style={style}
        color={this.props.color}
      />
    );
  }
}

const styles = {
  icon: {
    marginBottom: -3
  }
};
