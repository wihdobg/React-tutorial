import { useState } from "react";
import { StyleSheet, Text, View, Image, Button } from "react-native";

const BasicComponent = () => {
  const [count, setCount] = useState<number>(0);
  return (
    <View>
      {/* View Components */}
      <View style={styles.boxContainer}>
        <View style={styles.redBox}></View>
        <View style={styles.blueBox}></View>
        <View style={styles.greenBox}></View>
      </View>
      {/* Text Components */}
      <Text style={styles.heading}>Hello World</Text>
      <Text style={styles.nestedText}>
        this Text Can Be <Text style={styles.nested}>Nested</Text>
      </Text>

      {/* Text Components */}
      {/* Image component */}
      <Text style={styles.heading}>Image Component</Text>
      <Image
        style={styles.image}
        source={{
          uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdtKGN5PsyLJ5H8NSmQgpEhbfbngbGIRk6pg&s",
        }}
      />
      <Image style={styles.image} source={require("./../../assets/img.webp")} />
      <Image style={styles.image} source={require("./../../assets/img.webp")} />
      <Image style={styles.image} source={require("./../../assets/img.webp")} />
      <Image style={styles.image} source={require("./../../assets/img.webp")} />
      <Image style={styles.image} source={require("./../../assets/img.webp")} />
      {/* Image component */}

      {/* Button  */}
      <Text>Count is {count}</Text>
      <Button title="Click me" onPress={() => setCount(count + 1)} />
      {/* Button  */}
    </View>
  );
};

export default BasicComponent;

const styles = StyleSheet.create({
  boxContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  redBox: {
    width: 50,
    height: 50,
    backgroundColor: "red",
  },
  blueBox: {
    width: 50,
    height: 50,
    backgroundColor: "blue",
  },
  greenBox: {
    width: 50,
    height: 50,
    backgroundColor: "green",
  },
  heading: {
    fontSize: 24,
    fontWeight: "bold",
    textDecorationLine: "underline",
  },
  nestedText: {
    fontSize: 20,
    fontWeight: "500",
  },
  nested: {
    color: "red",
  },
  image: {
    width: 150,
    height: 150,
    marginBottom: 10,
  },
});
