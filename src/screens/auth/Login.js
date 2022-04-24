import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import {notatLogo} from '../../assets/images';
import CustomInput from '../../components/CustomInput/CustomInput';
import CustomButton from '../../components/CustomButton/CustomButton';
import CustomButtonBack from '../../components/CustomButton/CustomButtonBack';
import {useDispatch, useSelector} from 'react-redux';
import {userLogin} from '../../redux';

const Login = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const onSignInPressed = async () => {
    dispatch(userLogin(email, password, {navigation}));
  };

  return (
    <View style={styles.root}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <CustomButtonBack navigation={navigation} />
        <View style={{alignItems: 'center'}}>
          <Image source={notatLogo} style={styles.logo} resizeMode="contain" />

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
            testID="myButtonLogin"
            text="Login"
            onPress={onSignInPressed}
          />

          <Text>Dont Have an Account?</Text>

          <CustomButton
            text="Register"
            onPress={() => navigation.navigate('Register')}
            type="TERTIARY"
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default Login;

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
