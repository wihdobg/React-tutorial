import { StyleSheet, Text, View } from "react-native";
import React from "react";

const FlexLayout = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>LAyOu Using Flex</Text>
      <Text>Main Axis Row </Text>
      <View style={styles.row}>
        <View style={[styles.box, { backgroundColor: "red" }]}></View>
        <View style={[styles.box, { backgroundColor: "green" }]}></View>
        <View style={[styles.box, { backgroundColor: "blue" }]}></View>
      </View>
      <Text>Cross Axis Row </Text>
      <View style={styles.column}>
        <View style={[styles.box, { backgroundColor: "red" }]}></View>
        <View style={[styles.box, { backgroundColor: "green" }]}></View>
        <View style={[styles.box, { backgroundColor: "blue" }]}></View>
      </View>
    </View>
  );
};

export default FlexLayout;

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
  heading: {
    fontSize: 24,
    fontWeight: "bold",
    textDecorationLine: "underline",
  },
  row: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 50,
  },
  box: {
    width: 50,
    height: 50,
  },
  column: {
    flexDirection: "column",
    height: 200,
    marginBottom: 20,
    justifyContent: "space-between",
  },
});
