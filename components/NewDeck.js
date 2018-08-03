import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableHighlight,
  KeyboardAvoidingView,
} from 'react-native';
import api from '../utils/api';

class NewDeck extends Component {
  state = {
    title: '',
  }

  handleChangeText = title => this.setState({ title });

  handleSubmit = () => {
    api.saveDeckTitle(this.state.title);
    this.setState({ title: '' });
  }

  render(){
    return (
      <KeyboardAvoidingView behavior='padding'>
        <Text>What is the title of your new deck?</Text>
        <TextInput
          onChangeText={this.handleChangeText}
          style={styles.input}
          value={this.state.title}
        />
        <TouchableHighlight onPress={this.handleSubmit}>
          <Text>Submit</Text>
        </TouchableHighlight>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  input: {
    padding: 10,
    paddingLeft: 150,
    paddingRight: 150,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#eee',
  },
})

export default NewDeck;
