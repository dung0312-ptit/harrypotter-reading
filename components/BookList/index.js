/* eslint-disable prettier/prettier */
import React from 'react';
import {
  View,
  FlatList,
  Dimensions,
  TouchableOpacity,
  Text,
  StatusBar,
} from 'react-native';

import BookItems from '../BookItems/index';
import Books from './Books';
import styles from './style';

const BookList = ({navigation}) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={Books}
        style={styles.flatlist}
        contentContainerStyle={styles.flatlist}
        pagingEnabled="true"
        renderItem={({item}) => (
          <View style={styles.itemContainer}>
            <TouchableOpacity
              style={styles.touch}
              onPress={() =>
                navigation.navigate('Book', {
                  nameb: item.name,
                  imageb: item.image,
                  chuong: item.chuong,
                  discription: item.discription,
                })
              }>
              <BookItems book={item} />
            </TouchableOpacity>
            <Text style={styles.bookName}>{item.name}</Text>
          </View>
        )}
        keyExtractor={item => item.name}
        snapToAlignment={'start'}
        decelerationRate={'normal'}
        snapToInterval={Dimensions.get('window').height / 2}
      />
      <StatusBar currenntHeight="20" />
    </View>
  );
};
export default BookList;
