import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";

const ScrollViewComponent = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>ScrollViewComponent</Text>
      <ScrollView
        style={styles.view}
        contentContainerStyle={styles.scrollContent}
        bounces={true}
        nestedScrollEnabled={true}
      >
        {[...Array(20)].map((item, index) => {
          return (
            <View key={index} style={styles.box}>
              <Text style={styles.boxText}>{index + 1}</Text>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
};

export default ScrollViewComponent;

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
  heading: {
    fontSize: 24,
    fontWeight: "bold",
    textDecorationLine: "underline",
  },
  view: {
    height: 250,
    backgroundColor: "#f0f0f0",
  },
  scrollContent: {
    padding: 20,
  },
  box: {
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    margin: 20,
    backgroundColor: "white",
  },
  boxText: {
    fontSize: 20,
  },
});
