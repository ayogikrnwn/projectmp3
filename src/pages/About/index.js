import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import { HomeBtn } from '../../assets/image';

const About = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.about}>About Page</Text>
      <Text style={styles.aboutdsc}>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.
      </Text>
      <View style={styles.btnext}>
        <TouchableOpacity onPress={() => navigation.navigate('PageOne')}>
          <Image source={HomeBtn} style={styles.next} />
        </TouchableOpacity>
        </View>
    </View>
  );
};

export default About;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    marginTop: 10,
    padding: 20
  },
  about: {
    fontSize: 22,
    textAlign: 'center',
    fontWeight: 'bold'
   
  },
  aboutdsc: {
    fontSize: 18,
    textAlign: 'center',
   marginTop: 10
  },
  btnext: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  next: {
    height: 80,
    width: 80,
    paddingLeft: 50,
    marginTop: 50
  },
});
