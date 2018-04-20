import React from 'react';
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';
import { TabNavigator } from 'react-navigation';
import { Entypo } from '@expo/vector-icons';
import { yellow, black } from 'ansi-colors';
import api from './utils/api';
import DeckList from './components/DeckList';

const decks = api.getDecks();

const PageDecks = () => (
  <DeckList data={decks} />
);

const NewDeck = () => (
  <View>
    <Text>NewDeck!</Text>
  </View>
);

const Tabs = TabNavigator({
  Decks: {
    screen: PageDecks,
  },
  NewDeck: {
    screen: NewDeck,
  },
});

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        {/* <DeckList data={decks} /> */}
        <Tabs />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 15,
    borderWidth: 2,
    borderColor: 'yellow',
  },
});
