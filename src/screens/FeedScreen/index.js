import React from 'react';
import { RkText } from 'react-native-ui-kitten';
import { View, TouchableOpacity, SafeAreaView } from 'react-native';
import styles from './styles';
import PostOfferList from './postOfferList';
import PostSearchList from './postSearchList';
import Layout from '../../constants/HeaderLayout';

export default class FeedScreen extends React.Component {
  static navigationOptions = {
    title: 'Anzeigen',
    headerStyle: { ...Layout.headerLayout },
    headerTitleStyle: { ...Layout.titleLeft },
    headerTitleContainerStyle: { ...Layout.titleContainerLeft }
  };

  constructor(props) {
    super(props);
    this.state = {
      offer: true,
      postColor: null
    };
  }

  handleOfferClick() {
    this.setState({
      offer: true
    });
  }

  handleSearchClick() {
    this.setState({
      offer: false
    });
  }

  render() {
    let toggleView = (
      <View style={styles.toggleContainer}>
        <TouchableOpacity
          style={styles.offer}
          disabled={this.state.offer ? true : false}
          onPress={() => this.handleOfferClick()}
        >
          <RkText rkType={this.state.offer ? 'toggleSelected' : 'toggle'}>
            Geboten
          </RkText>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.search}
          disabled={this.state.offer ? false : true}
          onPress={() => this.handleSearchClick()}
        >
          <RkText rkType={this.state.offer ? 'toggle' : 'toggleSelected'}>
            Gesucht
          </RkText>
        </TouchableOpacity>
      </View>
    );

    return (
      <SafeAreaView style={styles.container}>
        {toggleView}
        {this.state.offer ? <PostOfferList /> : <PostSearchList />}
      </SafeAreaView>
    );
  }
}
