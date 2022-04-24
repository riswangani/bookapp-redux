import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import React from 'react';
import Share from 'react-native-share';

const CustomButtonShare = () => {
  const shareDetail = async () => {
    const shareOptions = {
      message: 'Share message test!',
    };

    try {
      const shareResponse = await Share.open(shareOptions);
    } catch (error) {
      console.log('Error =>', error);
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={shareDetail}>
        <Icon name="arrow-redo-circle-sharp" size={30} color="#000" />
      </TouchableOpacity>
    </View>
  );
};

export default CustomButtonShare;

const styles = StyleSheet.create({
  container: {
    marginVertical: 5,
    marginHorizontal: 2,
  },
});
