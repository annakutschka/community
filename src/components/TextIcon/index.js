import React from 'react';
import { Icon } from 'expo';
import { Platform } from 'react-native';

export default class TextIcon extends React.Component {
  render() {
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
        style={{ ...this.props.style }}
        color={this.props.color}
      />
    );
  }
}
