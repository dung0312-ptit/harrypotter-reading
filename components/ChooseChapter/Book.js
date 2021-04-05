/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text, Image, FlatList, Button} from 'react-native';

import styles from './style';

const Book = ({route, navigation}) => {
  const {nameb, imageb, chuong, discription} = route.params;
  return (
    <View style={styles.bookContainer}>
      <View style={styles.bookInfor}>
        <Image source={imageb} style={styles.bookImage} />
      </View>
      <View style={styles.discription}>
        <Text>{discription}</Text>
      </View>
      <View style={styles.chapter}>
        <Text style={styles.choosechap}>Chọn chương bạn muốn đọc:</Text>
        <FlatList
          style={styles.flatlist}
          data={chuong}
          pagingEnabled="true"
          keyExtractor={item => item.name}
          snapToAlignment={'start'}
          decelerationRate={'normal'}
          horizontal={true}
          renderItem={({item}) => (
            <View style={styles.buttonContainer}>
              <Button
                title={item.name}
                onPress={() =>
                  navigation.navigate('Reading', {url: item.image})
                }
              />
            </View>
          )}
        />
      </View>
    </View>
  );
};
export default Book;
