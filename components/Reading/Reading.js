/* eslint-disable prettier/prettier */
import React from 'react';
import Pdf from 'react-native-pdf';
import styles from './styles';
const Reading = ({route}) => {
  const {url} = route.params;
  return <Pdf source={url} style={styles.pdf} />;
};
export default Reading;
