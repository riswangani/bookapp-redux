import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import React from 'react';

const CustomButtonBack = ({navigation}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Icon name="arrow-back-sharp" size={30} color="#000" />
      </TouchableOpacity>
    </View>
  );
};

export default CustomButtonBack;

const styles = StyleSheet.create({
  container: {
    marginVertical: 5,
  },
});
