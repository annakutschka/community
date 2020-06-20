import React from 'react';
import Colors from '../../constants/Colors';
import FontStyles from '../../constants/FontStyles';
import styles from './styles';
import validator from 'validator';
import { View, Text, TouchableOpacity } from 'react-native';
import { RkButton } from 'react-native-ui-kitten';
import InputField from '../../components/TextInput';
import CategoryTag from '../../components/CategoryTag';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import MultilineTextInput from '../../components/MultilineTextInput';
import RadioGroup from 'react-native-radio-buttons-group';
import { connect } from 'react-redux';
import {
  makeSelectCommunity,
  makeSelectUserId,
  makeSelectUserName
} from '../../store/authentication/selectors';
import { createPostOffer, createPostSearch } from '../../store/posts/actions';

class PostForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      text: '',
      description: '',
      selectOffer: false,
      styleColor: Colors.primaryColor,
      textColor: Colors.text,
      showForm: true,
      category: '',

      //Tags
      tags: [
        'hilfe',
        'lebensmittel',
        'mitfahrgelegenheit',
        'werkzeug',
        'unterhaltung',
        'haustiere',
        'party',
        'wichtig',
        'möbel',
        'abstellraum',
        'innenhof',
        'gartengeräte',
        'garage'
      ],
      selectedTags: [],
      tagIsActive: false,
      selectedTagKeys: [],

      //Errorhandling
      errorText: '',

      //radioButton values
      data: [
        {
          label: 'Gesucht',
          value: 0,
          color: Colors.primaryColor,
          selected: false
        },
        {
          label: 'Geboten',
          value: 1,
          color: Colors.secondaryColor,
          selected: false
        }
      ]
    };
  }

  handleTagClick = (tag, key) => {
    if (this.state.selectedTags.find(entry => entry == tag)) {
      //delete key from keyArray for styling changes
      const keyArray = this.state.selectedTagKeys;
      const keyIndex = keyArray.indexOf(key);
      keyArray.splice(keyIndex, 1);

      //delete tag from tagArray
      const tagArray = this.state.selectedTags;
      const tagIndex = tagArray.indexOf(tag);

      tagArray.splice(tagIndex, 1);

      this.setState({
        selectedTagKeys: keyArray,
        selectedTags: tagArray,
        textColor: Colors.text
      });
    } else {
      this.setState({
        selectedTagKeys: [...this.state.selectedTagKeys, key],
        selectedTags: [...this.state.selectedTags, tag],
        textColor: Colors.white
      });
    }
  };

  handleSaveClick() {
    if (this.isValid()) {
      if (this.state.selectOffer) this.state.category = 'offer';
      else this.state.category = 'search';
      const data = {
        communityId: this.props.communityId,
        message: {
          time: new Date().toLocaleString('en'),
          userName: this.props.userName,
          userId: this.props.userId,
          title: validator.escape(this.state.text),
          text: validator.escape(this.state.description),
          tags: this.state.selectedTags,
          category: this.state.category
        }
      };

      if (this.state.selectOffer) {
        this.props.createNewPostOffer(data);
      } else {
        this.props.createNewPostSearch(data);
      }

      this.props.navigation.navigate('Feed');
    }
  }

  isValid = () => {
    if (
      validator.isEmpty(this.state.text) ||
      validator.isEmpty(this.state.description)
    ) {
      this.setState({ errorText: 'Bitte fülle alle Felder aus' });
      return false;
    } else if (this.state.selectedTags.length === 0) {
      this.setState({ errorText: 'Bitte wähle mindestens einen Tag aus' });
      return false;
    } else {
      this.setState({ errorText: '' });
      return true;
    }
  };

  onPress = data => {
    if (data[0].selected) {
      this.setState({
        selectOffer: false,
        styleColor: Colors.primaryColor
      });
    }

    if (data[1].selected) {
      this.setState({
        selectOffer: true,
        styleColor: Colors.secondaryColor
      });
    }
  };

  render() {
    let error;
    if (!validator.isEmpty(this.state.errorText)) {
      error = <Text style={styles.errorText}>{this.state.errorText}</Text>;
    }

    let form;
    if (this.state.showForm) {
      form = (
        <View style={styles.containerForm}>
          <View style={styles.postForm}>
            <InputField
              headerText="Titel"
              placeHolder="Titel..."
              onChangeText={input => this.setState({ text: input })}
            />
            <MultilineTextInput
              headerText="Beschreibung"
              placeHolder="Beschreibung..."
              onChangeText={input => this.setState({ description: input })}
            />

            <Text style={styles.headline20}>Tags</Text>
            <View style={styles.tagContainer}>
              {this.state.tags.map((tag, key) => (
                <TouchableOpacity
                  key={key}
                  style={
                    this.state.selectedTags.find(value => value === tag)
                      ? {
                          ...styles.tagIsActive,
                          backgroundColor: this.state.styleColor,
                          color: Colors.white
                        }
                      : {
                          ...styles.tagIsUnactive,
                          color: Colors.text
                        }
                  }
                  onPress={() => this.handleTagClick(tag, key)}
                >
                  <CategoryTag
                    tagText={tag}
                    style={(color = this.state.textColor)}
                  />
                </TouchableOpacity>
              ))}
            </View>
          </View>
          {error}

          <View style={styles.containerButton}>
            <RkButton
              rkType="normalGrey"
              style={{ backgroundColor: this.state.styleColor }}
              onPress={() => this.handleSaveClick()}
            >
              <Text style={FontStyles.text20WhiteBold}>Anzeige speichern</Text>
            </RkButton>
          </View>
        </View>
      );
    }

    return (
      <KeyboardAwareScrollView style={styles.form}>
        <View style={styles.containerCategory}>
          <Text style={styles.headline20}>Kategorie</Text>
          <RadioGroup
            radioButtons={this.state.data}
            onPress={data => this.onPress(data)}
            flexDirection="row"
            style={styles.radioButtonContainer}
          />
        </View>
        {form}
      </KeyboardAwareScrollView>
    );
  }
}

const mapStateToProps = state => {
  return {
    communityId: makeSelectCommunity(state),
    userId: makeSelectUserId(state),
    userName: makeSelectUserName(state)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    createNewPostOffer: data => dispatch(createPostOffer(data)),
    createNewPostSearch: data => dispatch(createPostSearch(data))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostForm);
