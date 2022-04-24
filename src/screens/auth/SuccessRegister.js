import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {complete} from '../../assets/images';
import CustomButton from '../../components/CustomButton/CustomButton';

const SuccessRegister = ({navigation}) => {
  return (
    <View style={styles.root}>
      <View style={styles.container}>
        <View style={{marginBottom: 30}}>
          <Text style={styles.complete}>Registration Completed!</Text>
        </View>
        <Image resizeMode="contain" style={styles.logo} source={complete} />
        <View style={{marginVertical: 30}}>
          <Text style={styles.text}>
            We sent email verification to your email
          </Text>
        </View>
        <CustomButton
          text="Back to Login"
          onPress={() => navigation.navigate('Login')}
        />
      </View>
    </View>
  );
};

export default SuccessRegister;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#ffffff',
    padding: 20,
  },
  container: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: '70%',
    maxWidth: 300,
    maxHeight: 200,
    height: windowHeight * 0.2389162562,
  },
  complete: {
    fontWeight: '700',
    fontSize: 22,
    color: '#B7343D',
    textAlign: 'center',
    lineHeight: 30,
  },
  text: {
    fontWeight: '500',
    fontSize: 18,
    color: '#B7343D',
    lineHeight: 30,
    textAlign: 'center',
  },
});
