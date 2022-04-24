import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';

import {useDispatch, useSelector} from 'react-redux';

import {notatLogo} from '../../assets/images';
import CustomInput from '../../components/CustomInput/CustomInput';
import CustomButton from '../../components/CustomButton/CustomButton';
import CustomButtonBack from '../../components/CustomButton/CustomButtonBack';
import {userRegister} from '../../redux';
import axios from 'axios';

const Register = ({navigation}) => {
  // const {form} = useSelector(state => state.registerReducer);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  // const onInputChange = (value, inputType) => {
  //   dispatch(userRegister(inputType, value));
  // };

  const onSignUpPressed = async () => {
    dispatch(userRegister(name, email, password, {navigation}));
  };

  return (
    <View style={styles.root}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <CustomButtonBack type="regis" navigation={navigation} />
        <View style={{alignItems: 'center'}}>
          <Image source={notatLogo} style={styles.logo} resizeMode="contain" />

          <CustomInput
            testID="InputName"
            placeholder="Full Name"
            onChangeText={setName}
          />
          <CustomInput
            testID="InputEmail"
            placeholder="Email"
            onChangeText={setEmail}
          />
          <CustomInput
            testID="InputPassword"
            placeholder="Password"
            onChangeText={setPassword}
            secureTextEntry={true}
          />
          <CustomButton
            testID="myButtonRegist"
            text="Register"
            onPress={onSignUpPressed}
          />

          <Text>Already Have an Account?</Text>

          <CustomButton
            text="Login"
            onPress={() => navigation.navigate('Login')}
            type="TERTIARY"
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default Register;

const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#ffffff',
    padding: 20,
  },
  logo: {
    width: '70%',
    maxWidth: 300,
    maxHeight: 200,
    height: windowHeight * 0.2389162562,
  },
});
