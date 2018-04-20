import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
} from 'react-native';
import { Entypo } from '@expo/vector-icons';

const DeckListItem = ({ title, questions }) => (
  <View style={styles.deck}>
    <Entypo name='folder-images' />
    <View>
      <Text style={styles.deckTitle}>{title}</Text>
      <Text style={styles.deckLenght}>{questions.length} cards</Text>
    </View>
    <Entypo name='chevron-small-right' style={{ alignSelf: 'flex-end' }} />
  </View>
);

const styles = StyleSheet.create({
  deck: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    borderRadius: 15,
    borderWidth: 2,
    borderStyle: 'solid',
    borderColor: '#eee',
    height: 90,
    padding: 15,
    paddingRight: 10,
    marginTop: 10,
  },
  deckTitle: {
    color: '#222632',
    fontSize: 23,
  },
  deckLenght: {
    color: '#ccc',
    fontSize: 18,
  },
});

export default DeckListItem;
