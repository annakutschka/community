import React from 'react';
import { Icon } from 'expo';
import { Platform, TouchableHighlight } from 'react-native';
import Colors from '../../constants/Colors';

export default class HeaderIcon extends React.Component {
  render() {
    const align = this.props.left
      ? { alignItems: 'flex-start' }
      : { alignItems: 'flex-end' };
    return (
      <TouchableHighlight
        onPress={this.props.onPress}
        underlayColor={Colors.backgroundColor}
        style={{ ...styles.touchAble, ...align }}
      >
        <Icon.Ionicons
          name={
            this.props.dual
              ? Platform.OS === 'ios'
                ? `ios-${this.props.name}`
                : `md-${this.props.name}`
              : this.props.name
          }
          size={this.props.size ? this.props.size : 30}
          style={{ ...styles.icon, ...this.props.style }}
          color={this.props.color}
        />
      </TouchableHighlight>
    );
  }
}

const styles = {
  icon: {
    marginBottom: -3
  },
  touchAble: {
    height: 50, // make the touchable area around the icon
    width: 50, // larger for usability
    justifyContent: 'center'
  }
};
