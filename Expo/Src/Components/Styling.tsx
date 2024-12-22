import { StyleSheet, Text, View } from "react-native";
import React from "react";

const Styling = () => {
  return (
    <View style={styles.container}>
      <Text>Styling</Text>
      <View style={styles.boxContainer}>
        <View style={[styles.box, styles.red]}>
          <Text>1</Text>
        </View>
        <View style={[styles.box, styles.green]}>
          <Text>1</Text>
        </View>
        <View style={[styles.box, styles.blue]}>
          <Text>1</Text>
        </View>
      </View>
    </View>
  );
};

export default Styling;

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
    backgroundColor: "blue",
    padding: 10,
    borderRadius: 15,
  },
  boxContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 20,
    width: "100%",
  },
  box: {
    flex: 1,
    borderRadius: 10,
  },
  red: {
    backgroundColor: "red",
  },
  green: {
    backgroundColor: "green",
  },
  blue: {
    backgroundColor: "yellow",
  },
});
