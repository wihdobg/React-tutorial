import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";

interface ToAddInput {
  onAddToDo: (text: string) => void;
}

const ToDoInput: React.FC<ToAddInput> = ({ onAddToDo }) => {
  const [text, setText] = useState("");

  const handleAddToDo = () => {
    if (text.trim()) {
      onAddToDo(text.trim());
      setText("");
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        value={text}
        onChangeText={setText}
        placeholder="Enter Your Todo List..."
      />
      <TouchableOpacity style={styles.addToDoBtn} onPress={handleAddToDo}>
        <Text style={styles.addToDotext}>Add</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ToDoInput;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginBottom: 20,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#cccccc",
    paddingHorizontal: 12,
    paddingVertical: 10,
    marginRight: 10,
  },
  addToDoBtn: {
    backgroundColor: "#007aff",
    paddingHorizontal: 15,
    paddingVertical: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  addToDotext: {
    color: "white",
    fontWeight: "bold",
  },
});
