import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Image,
  Dimensions,
} from 'react-native';

import React, {useEffect} from 'react';

import {background, logoSplash} from '../../assets/images';

const Splash = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('Login');
    }, 3000);
  });

  return (
    <View testID="splashScreen" style={styles.image}>
      <Image source={logoSplash} style={styles.imageLogo} />
      <Text style={styles.nama}>Riswan Gani Padilah</Text>
    </View>
  );
};

const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  image: {
    backgroundColor: '#ffffff',
    flex: 1,
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  nama: {
    top: windowHeight * 0.25,
    color: '#DB4437',
    fontWeight: '800',
    fontSize: 20,
  },
});

export default Splash;
