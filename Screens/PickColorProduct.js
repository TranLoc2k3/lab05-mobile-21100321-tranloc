import { useEffect, useState } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  Button,
  SafeAreaView,
} from "react-native";
import React from "react";

import phones from "../data/data";
import ColorPicker from "../components/ColorPicker";

let time = 0;
function PickColorProduct({ route, navigation }) {
  const [idProduct, setIdProduct] = useState(route.params?.id || 1);
  const [phone, setPhone] = useState(null);

  useEffect(() => {
    const selectedPhone = phones.find((p) => p._id === idProduct);
    setPhone(selectedPhone);
  }, [idProduct]);

  function selectedColorHandler(id) {
    setIdProduct(id);
  }

  return (
    <View style={styles.container}>
      {phone && (
        <>
          <View style={styles.imageContainer}>
            <Image style={styles.imageProduct} source={phone.image} />
          </View>
          <View style={styles.infomationContainer}>
            <Text style={styles.productName}>{phone.name}</Text>
            <View style={styles.priceContainer}>
              <Text style={styles.salePrice}>{phone.price} đ </Text>
              <Text style={styles.originalPrice}>{phone.price} đ </Text>
            </View>
            <Text style={styles.note}>Ở đâu rẻ hơn hoàn tiền</Text>

            <View
              style={{
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              {phones.map((p) => (
                <ColorPicker
                  key={p._id}
                  color={p.color}
                  selectColor={() => selectedColorHandler(p._id)}
                />
              ))}
            </View>
          </View>
          <View>
            <TouchableOpacity
              style={styles.button2}
              onPress={() =>
                navigation.navigate("ProductDetail", { id: idProduct })
              }
            >
              <Text style={styles.button2Text}>Chọn mua</Text>
            </TouchableOpacity>
          </View>
        </>
      )}
    </View>
  );
}

export default PickColorProduct;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: 8,
    marginHorizontal: 16,
    justifyContent: "space-around",
  },
  imageContainer: {
    alignItems: "center",
  },
  imageProduct: {
    height: 300,
    width: 300,
    resizeMode: "contain",
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
    fontWeight: "thin",
    marginVertical: 8,
  },
  priceContainer: {
    flexDirection: "row",
    alignItems: "end",
    marginVertical: 8,
  },
  salePrice: {
    color: "#000000",
    fontWeight: "bold",
    fontSize: 18,
    marginRight: 24,
  },
  originalPrice: {
    color: "#000000",
    fontWeight: "bold",
    fontSize: 15,
    opacity: 0.8,
    textDecorationLine: "line-through",
  },
  note: {
    color: "#FA0000",
    textTransform: "uppercase",
    fontWeight: "bold",
    fontSize: 12,
    marginVertical: 8,
  },
  button1: {
    height: 50,
    padding: 12,
    margin: 12,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderRadius: 12,
    backgroundColor: "#ffffff",
  },
  button1Text: {
    textTransform: "uppercase",
    fontSize: 15,
  },
  button2: {
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderRadius: 12,
    backgroundColor: "#1952E2",
  },
  button2Text: {
    color: "#ffffff",
    textTransform: "uppercase",
    fontSize: 20,
    fontWeight: "bold",
  },
  activeColor: {
    borderColor: "#000000",
    borderWidth: 2,
  },
  inactiveColor: {
    borderColor: "#7b7b7b",
    borderWidth: 2,
  },
});
