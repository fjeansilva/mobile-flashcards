import { AsyncStorage } from 'react-native';

const decks = {
  React: {
    title: 'React',
    questions: [
      {
        question: 'What is React?',
        answer: 'A library for managing user interfaces'
      },
      {
        question: 'Where do you make Ajax requests in React?',
        answer: 'The componentDidMount lifecycle event'
      }
    ]
  },
  JavaScript: {
    title: 'JavaScript',
    questions: [
      {
        question: 'What is a closure?',
        answer: 'The combination of a function and the lexical environment within which that function was declared.'
      }
    ]
  }
};

const getDecks = () => Object.keys(decks).map(d => ({ key: d, ...decks[d]}));
const getDeck = id => decks[id];
const saveDeckTitle = title => decks[title] = title;
const addCardToDeck = (title, card) => {
  const deck = decks[title];
  if (deck.questions) {
    deck.questions.push(card);
  } else {
    deck.questions = [card];
  }
  decks[title] = deck;
}

module.exports = {
  getDecks,
  getDeck,
  saveDeckTitle,
  addCardToDeck,
};