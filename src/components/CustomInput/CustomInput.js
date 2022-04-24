import {StyleSheet, TextInput, View} from 'react-native';
import React from 'react';

const CustomInput = ({placeholder, ...rest}) => {
  return (
    <View style={styles.containerStyle}>
      <TextInput placeholder={placeholder} style={styles.input} {...rest} />
    </View>
  );
};

export default CustomInput;

const styles = StyleSheet.create({
  containerStyle: {
    backgroundColor: '#ffffff',
    width: '100%',

    borderColor: '#e8e8e8',
    borderRadius: 5,
    borderWidth: 1,

    paddingHorizontal: 10,
    marginVertical: 5,
  },
  input: {},
});
