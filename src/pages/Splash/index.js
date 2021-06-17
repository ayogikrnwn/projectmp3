import React, {useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';

const Splash = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('PageOne');
    }, 3000);
  });

  return (
    <>
      <View style={styles.container}>
        <Text style={styles.title}>Play Music App</Text>
        <Text style={styles.caption}>Splash Screen</Text>
      </View>
    </>
  );
};

export default Splash;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
