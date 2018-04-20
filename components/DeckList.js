import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
} from 'react-native';
import DeckListItem from './DeckListItem';

const handleItem = ({ item }) => <DeckListItem key={item.key} {...item} />;

const DeckList = ({ data }) => (
  <FlatList
    data={data}
    renderItem={handleItem}
    style={styles.list}
  />
);

const styles = StyleSheet.create({
  list: {
    flex: 1,
    borderWidth: 2,
    borderColor: 'red',
    paddingLeft: 10,
    paddingRight: 10,
  }
});

export default DeckList;
