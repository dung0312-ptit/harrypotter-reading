/* eslint-disable prettier/prettier */
import React from 'react';
import {ImageBackground, View} from 'react-native';
import styles from './style';

const BookItems = props => {
  const {image} = props.book;
  return (
    <View style={styles.BookContainer}>
      <ImageBackground source={image} style={styles.image} />
    </View>
  );
};
export default BookItems;
