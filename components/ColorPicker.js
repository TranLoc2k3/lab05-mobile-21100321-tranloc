import { View, Text, StyleSheet, Button, Pressable } from "react-native";

function ColorPicker({color, selectColor}) {
  return (
    <Pressable onPress={selectColor}>
      <View style={[styles.colorPicker, {backgroundColor: color}]}></View>
    </Pressable>
  );
}

export default ColorPicker;

const styles = StyleSheet.create({
  colorPicker: {
    height: 50,
    width: 50,
    borderRadius: 25,
    marginHorizontal: 12
  },
});
