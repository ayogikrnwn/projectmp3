import React from 'react';
import {
  Image,
  StyleSheet,
  Text,
  Touchable,
  TouchableOpacity,
  View,
} from 'react-native';

const CardImg = ({img, key, title}) => {
  return (
    <TouchableOpacity style={styles.container} key={key} title={title}>
      <Image source={img} style={styles.imgs} />
    </TouchableOpacity>
  );
};

export default CardImg;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'yellow',
    width: 50,
    height: 50,
    marginLeft: 10,
    marginTop: 10,
   
  },

  imgs: {
    height: 100,
    width: 100,
   
  },
});
