import { StyleSheet, Text, View, TextInput } from "react-native";
import React, { useState } from "react";

const InputText = () => {
  const [text, setText] = useState("");

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Text Input Component</Text>
      <TextInput
        style={styles.input}
        placeholder="Type SomeThing Here ..."
        onChangeText={(text) => setText(text)}
        value={text}
      />
    </View>
  );
};

export default InputText;

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
  input: {
    height: 50,
    borderColor: "gray",
    borderWidth: 1,
    marginTop: 10,
  },
  heading: {
    fontSize: 24,
    fontWeight: "bold",
    textDecorationLine: "underline",
  },
});
