import {
  StyleSheet,
  View,
  Image,
  Text,
  ScrollView,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import CustomButtonLove from '../../components/CustomButton/CustomButtonLove';
import CustomButtonShare from '../../components/CustomButton/CustomButtonShare';
import CustomButtonBack from '../../components/CustomButton/CustomButtonBack';
import axios from 'axios';
import {star} from '../../assets/images';

import 'intl';
import 'intl/locale-data/jsonp/en';

const BookDetail = ({route, navigation}) => {
  const id = route.params.data.id;
  const barier = route.params.barier;

  const [detailData, setDetailData] = useState([]);

  const getData = async () => {
    try {
      const res = await axios.get(
        'http://code.aldipee.com/api/v1/books/' + id,
        {
          headers: {
            Authorization: `Bearer ` + barier,
          },
        },
      );
      setDetailData(res.data);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    getData();
  });

  console.log(detailData);

  return (
    <>
      <View style={{backgroundColor: '#ffffff', paddingBottom: 15}}>
        <View style={styles.container}>
          <View>
            <CustomButtonBack navigation={navigation} />
          </View>
          <View style={{flexDirection: 'row'}}>
            <CustomButtonLove />
            <CustomButtonShare />
          </View>
        </View>

        <View style={styles.containerDesc}>
          <View style={styles.imgCover}>
            <Image style={styles.img} source={{uri: detailData.cover_image}} />
          </View>
          <View style={styles.desc}>
            <Text style={styles.title}>{detailData.title}</Text>
            <Text style={styles.text}>{detailData.author}</Text>
            <Text style={styles.text}>{detailData.publisher}</Text>
          </View>
        </View>
      </View>

      <View style={styles.containerPrice}>
        <View style={styles.insidePrice}>
          <Text style={styles.title}>Rating</Text>
          <View style={styles.rating}>
            <Text style={styles.text}>{detailData.average_rating}</Text>
            <Image source={star} />
          </View>
        </View>
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <Text style={styles.title}>Total Sale</Text>
          <Text style={styles.text}>{detailData.total_sale}</Text>
        </View>
        <View>
          <TouchableOpacity style={styles.buttonPrice}>
            <Text style={styles.price}>
              Buy
              {new Intl.NumberFormat('id-ID', {
                style: 'currency',
                currency: 'IDR',
              }).format(detailData.price)}
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.synopsis}>
        <Text style={styles.title}>Overview</Text>
        <Text style={styles.text}>{detailData.synopsis}</Text>
      </View>
    </>
  );
};

export default BookDetail;

const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 30,
    marginVertical: 10,
    justifyContent: 'space-between',
  },
  containerDesc: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 30,
    borderRadius: 10,
    justifyContent: 'space-evenly',
  },
  imgCover: {
    // flex: 1,
    marginRight: 30,
    width: windowWidth * 0.3,
    height: windowHeight * 0.23,
    borderRadius: 10,
    resizeMode: 'contain',
  },
  desc: {
    padding: 20,
    flexWrap: 'wrap',
  },
  img: {
    width: '100%',
    height: '100%',
    resizeMode: 'stretch',
    borderRadius: 10,
  },
  text: {
    fontWeight: '400',
    fontSize: 12,
    color: 'black',
  },
  title: {
    color: 'black',
    fontWeight: '600',
    fontSize: 13,
    marginBottom: 2,
  },
  containerPrice: {
    marginVertical: 20,
    backgroundColor: 'white',
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  buttonPrice: {
    paddingHorizontal: 40,
    paddingVertical: 10,
    borderRadius: 10,
    backgroundColor: '#B7343D',
  },
  price: {
    color: 'white',
    fontWeight: '600',
    fontSize: 13,
    marginBottom: 2,
  },
  rating: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  synopsis: {
    marginHorizontal: 30,
    justifyContent: 'center',
  },
});
