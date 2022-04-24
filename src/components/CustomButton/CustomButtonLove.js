import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import React from 'react';

const CustomButtonLove = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => console.warn('Button Love')}>
        <Icon name="md-heart-outline" size={30} color="#000" />
      </TouchableOpacity>
    </View>
  );
};

export default CustomButtonLove;

const styles = StyleSheet.create({
  container: {
    marginVertical: 5,
    marginHorizontal: 2,
  },
});
