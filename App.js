/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
//import Home from './Screens/Home';
import Book from './components/ChooseChapter/Book';
import Reading from './components/Reading/Reading';
import BookList from './components/BookList/index';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
const stacks = createStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <stacks.Navigator headerMode="none">
        <stacks.Screen name="Tab" component={BookList} />
        <stacks.Screen name="Book" component={Book} />
        <stacks.Screen name="Reading" component={Reading} />
      </stacks.Navigator>
    </NavigationContainer>
  );
};

export default App;
