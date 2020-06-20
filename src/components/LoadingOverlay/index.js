import React from 'react';
import { View, Animated, Easing } from 'react-native';
import TextIcon from '../TextIcon';

export default class LoadingOverlay extends React.Component {
  constructor(props) {
    super(props);
    this.rotation = new Animated.Value(0);
  }

  componentDidMount() {
    this.spin();
  }

  spin = () => {
    this.rotation.setValue(0);
    Animated.timing(this.rotation, {
      toValue: 1,
      duration: 2000,
      easing: Easing.linear,
      useNativeDriver: true
    }).start(() => this.spin());
  };

  render() {
    const rotate = this.rotation.interpolate({
      inputRange: [0, 1],
      outputRange: ['0deg', '360deg']
    });
    return (
      <View style={{ ...styles.overlay, ...this.props.style }}>
        <Animated.View style={[{ transform: [{ rotate }] }]}>
          <TextIcon name="refresh" dual={true} size={40} color="white" />
        </Animated.View>
      </View>
    );
  }
}

const styles = {
  overlay: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    width: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.3)'
  }
};
