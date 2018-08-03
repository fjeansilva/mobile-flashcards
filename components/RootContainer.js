import React, {Component} from 'react'
import {StyleSheet, Text, View, FlatList, StatusBar, Platform, TouchableOpacity} from 'react-native';
import {StackNavigator, TabNavigator} from "react-navigation";
import {blue, white} from "../utils/colors";
import Quiz from "./Quiz";
import DeckDetail from "./DeckDetail";
import DeckList from "./DeckList";
import CardForm from "./CardForm";
import DeckForm from "./DeckForm";
import {FontAwesome, Ionicons} from '@expo/vector-icons';
import { Constants } from "expo";


const Tabs = TabNavigator({
    Decks: {
        screen: DeckList,
        navigationOptions: {
            tabBarLabel: "Home",
            tabBarIcon: ({ tintColor }) => (
            <Ionicons name="ios-home-outline" size={30} color={tintColor} />
            )
        }
    },
    DeckForm: {
        screen: DeckForm,
        navigationOptions: {
            tabBarLabel: 'Add Deck',
            tabBarIcon: ({tintColor}) => <Ionicons name='ios-add-circle' size={30} color={tintColor}/>
        }
    }
}, {
    navigationOptions: {
        header: null
    },
    tabBarOptions: {
        activeTintColor: Platform.OS === 'ios' ? blue : white,
        style: {
            height: 56,
            backgroundColor: Platform.OS === 'ios' ? white : blue,
            shadowColor: 'rgba(0, 0, 0, 0.24)',
            shadowOffset: {
                width: 0,
                height: 3
            },
            shadowRadius: 6,
            shadowOpacity: 1
        }
    }
});

const Stack = StackNavigator({
    Home: {
      screen: Tabs
    },
    DeckDetail: { screen: DeckDetail },
    CardForm: { screen: CardForm },
    Quiz: { screen: Quiz }
});



class RootContainer extends Component {

    componentDidMount() {
        this.props.getDecks()
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={{ height: Constants.statusBarHeight }}>
                    <StatusBar
                        translucent
                        backgroundColor="#6c0ce2"
                        color="#fff"
                        barStyle="light-content"
                    />
                </View>
                <Stack />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    }
});

export default RootContainer