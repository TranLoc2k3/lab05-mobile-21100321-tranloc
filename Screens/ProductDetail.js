import { useState, useEffect } from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';

import phones from '../data/data';

export default function ProductDetail({navigation}) {
  const [phone, setPhone] = useState(phones[0]);
  const [idProduct, setIdProduct] = useState(1);

  useEffect(() => {
    const selectedPhone = phones.find((p) => p._id === idProduct);
    setPhone(selectedPhone);
  }, [idProduct]);

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image style={styles.imageProduct} source={phone.image} />
      </View>
      <View style={styles.infomationContainer}>
        <Text style={styles.productName}>{phone.name}</Text>
        <View>
          <Text style={styles.comment}>
            (Xem {phone.numberOfComments} đánh giá)
          </Text>
        </View>
        <View style={styles.priceContainer}>
          <Text style={styles.salePrice}>{phone.price} đ </Text>
          <Text style={styles.originalPrice}>{phone.price} đ </Text>
        </View>
        <Text style={styles.note}>Ở đâu rẻ hơn hoàn tiền</Text>
        <TouchableOpacity style={styles.button1}>
          <Text style={styles.button1Text}>
            {phones.length} màu - chọn màu {'>'}
          </Text>
        </TouchableOpacity>
      </View>
      <View >
        <TouchableOpacity style={styles.button2} onPress={() => navigation.navigate('PickColorProduct')}>
          <Text style={styles.button2Text}>
            Chọn mua
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: 8,
    marginHorizontal: 16,
    justifyContent: 'space-around',
  },
  imageContainer: {
    alignItems: 'center',
  },
  imageProduct: {
    height: 300,
    width: 300,
    resizeMode: 'contain',
  },
  infomationContainer: {
    padding: 12,
    marginBottom: 12,
  },
  productName: {
    fontSize: 15,
    marginVertical: 8,
  },
  comment: {
    fontSize: 13,
    fontWeight: 'thin',
    marginVertical: 8,
  },
  priceContainer: {
    flexDirection: 'row',
    alignItems: 'end',
    marginVertical: 8,
  },
  salePrice: {
    color: '#000000',
    fontWeight: 'bold',
    fontSize: 18,
    marginRight: 24,
  },
  originalPrice: {
    color: '#000000',
    fontWeight: 'bold',
    fontSize: 15,
    opacity: 0.8,
    textDecorationLine: 'line-through',
  },
  note: {
    color: '#FA0000',
    textTransform: 'uppercase',
    fontWeight: 'bold',
    fontSize: 12,
    marginVertical: 8,
  },
  button1: {
    height: 50,
    padding: 12,
    margin: 12,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 12,
    backgroundColor: '#ffffff',
  },
  button1Text: {
    textTransform: 'uppercase',
    fontSize: 15,
  },
  button2: {
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 12,
    backgroundColor: '#EE0A0A',
  },
  button2Text: {
    color: '#ffffff',
    textTransform: 'uppercase',
    fontSize: 20,
    fontWeight: 'bold',
  },
});
