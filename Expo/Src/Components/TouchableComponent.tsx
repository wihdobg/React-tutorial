import {
  StyleSheet,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import React, { useState } from "react";

const TouchableComponent = () => {
  const [opacity, setOpacity] = useState(0);

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>TouchableComponent</Text>
      <TouchableHighlight
        style={styles.btn}
        onPress={() => setOpacity(opacity + 0.01)}
      >
        <Text style={{ fontSize: 20, color: "white" }}>Sign up</Text>
      </TouchableHighlight>
      <TouchableOpacity
        style={styles.btn}
        onPress={() => setOpacity(opacity + 0.01)}
      >
        <Text style={{ fontSize: 20, color: "white" }}>Opaciyty</Text>
      </TouchableOpacity>

      <TouchableWithoutFeedback style={{ backgroundColor: "red" }}>
        <Text>Touch Me No Effect</Text>
      </TouchableWithoutFeedback>
    </View>
  );
};

export default TouchableComponent;

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
  heading: {
    fontSize: 24,
    fontWeight: "bold",
    textDecorationLine: "underline",
    marginBottom: 10,
  },
  btn: {
    backgroundColor: "gray",
    padding: 10,
    borderRadius: 10,
    marginBottom: 10,
  },
});
