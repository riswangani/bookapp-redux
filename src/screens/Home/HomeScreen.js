import {
  Text,
  View,
  SafeAreaView,
  Button,
  Dimensions,
  ScrollView,
  TouchableOpacity,
  Image,
  StyleSheet,
} from 'react-native';
import React, {useEffect} from 'react';
import axios from 'axios';
import Pdf from 'react-native-pdf';

// import 'intl';
// import 'intl/locale-data/jsonp/en';

const HomeScreen = ({route, navigation}) => {
  const data = route.params.data;
  const barier = route.params.barier;

  return (
    <View testID="homeScreen" style={{backgroundColor: 'white', flexGrow: 1}}>
      <ScrollView showsHorizontalScrollIndicator={false}>
        <View style={styles.containerGreeting}>
          <Text style={styles.textGreeting}>Hello {route.params.namaUser}</Text>
        </View>
        <View style={{marginTop: 10}}>
          <Text style={styles.textTitile}>Recommended</Text>
        </View>
        <View>
          <ScrollView showsHorizontalScrollIndicator={false}>
            <View style={{flexDirection: 'row'}}>
              {data.results &&
                data.results.map(item => (
                  <TouchableOpacity
                    key={item.id}
                    style={styles.coverImg}
                    onPress={() =>
                      navigation.navigate('BookDetail', {
                        data: item,
                        barier: barier,
                      })
                    }>
                    <View style={{padding: 5, flex: 1, alignItems: 'center'}}>
                      <Image
                        style={styles.img}
                        source={{uri: item.cover_image}}
                      />
                    </View>
                    <View style={{alignItems: 'center'}}>
                      <Text style={styles.text}>{item.title}</Text>
                    </View>
                  </TouchableOpacity>
                ))}
            </View>
          </ScrollView>
        </View>
        <View
          style={{
            marginVertical: 10,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <View>
            <Text
              style={{
                color: 'black',
                alignItems: 'center',
                justifyContent: 'center',
                fontWeight: '600',
              }}>
              Media handling
            </Text>
            <Pdf
              style={{width: 300, height: 600, marginVertical: 10}}
              source={{
                uri: 'http://samples.leanpub.com/thereactnativebook-sample.pdf',
              }}
            />
          </View>
        </View>
        <View>
          <Text style={styles.textTitile}>Populare book</Text>
          <View
            style={{
              flexDirection: 'row',
              flexWrap: 'wrap',
              justifyContent: 'center',
            }}>
            {data.results &&
              data.results.map(item => (
                <TouchableOpacity
                  key={item.id}
                  style={styles.coverImg}
                  onPress={() =>
                    navigation.navigate('BookDetail', {
                      data: item,
                      barier: barier,
                    })
                  }>
                  <View style={styles.images}>
                    <Image
                      style={styles.img}
                      source={{uri: item.cover_image}}
                    />
                  </View>
                  <View style={{alignItems: 'center'}}>
                    <Text style={styles.text}>{item.title}</Text>
                    <Text style={styles.text}>{item.author}</Text>
                    <Text style={styles.text}>{item.publisher}</Text>
                    <Text style={styles.text}>{item.average_rating}</Text>
                    <Text style={styles.text}>
                      {new Intl.NumberFormat('id-ID', {
                        style: 'currency',
                        currency: 'IDR',
                      }).format(item.price)}
                    </Text>
                  </View>
                </TouchableOpacity>
              ))}
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default HomeScreen;

const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  textGreeting: {
    marginHorizontal: 10,
    color: '#B7343D',
    fontWeight: '600',
    fontSize: 18,
  },
  containerGreeting: {
    marginTop: 20,
  },
  textTitile: {
    marginHorizontal: 10,
    color: '#333333',
    fontWeight: '600',
    fontSize: 18,
  },
  text: {
    color: '#333333',
    fontWeight: '600',
    fontSize: 14,
  },
  images: {
    padding: 5,
    alignItems: 'center',
    justifyContent: 'center',
    height: windowHeight * 0.2,
    width: windowWidth * 0.3,
  },
  coverImg: {
    marginVertical: 10,
    marginHorizontal: 5,

    width: windowWidth * 0.4,
    height: windowHeight * 0.35,
    borderRadius: 10,
  },
  coverImgPop: {
    marginVertical: 10,
    marginHorizontal: 5,

    padding: 5,
    flex: 1,
    alignItems: 'center',

    width: windowWidth * 0.4,
    height: windowHeight * 0.3,
    borderRadius: 10,
  },
  img: {
    width: '100%',
    height: '100%',
    resizeMode: 'stretch',
    borderRadius: 10,
    alignContent: 'center',
  },
  viewItem: {},
  containerPopular1: {
    margin: 20,
  },
  containerPopular: {
    flexDirection: 'row',
  },
});
