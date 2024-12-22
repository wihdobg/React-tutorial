import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  ScrollView,
} from "react-native";
// import BasicComponent from "./Src/Components/BasicComponent";
// import InputText from "./Src/Components/InputText";
// import ScrollViewComponent from "./Src/Components/ScrollView";
// import Styling from "./Src/Components/Styling";
// import FlexLayout from "./Src/Components/FlexLayout";
// import TouchableComponent from "./Src/Components/TouchableComponent";
import ToDoInput from "./Src/ComponentToDo/ToDoInput";

// const Home = () => {
//   return (
//     <>
//       <StatusBar />
//       <View style={styles.conainer}>
//         <ScrollView nestedScrollEnabled={true}>
//           <BasicComponent />
//           <InputText />
//           <ScrollViewComponent />
//           <Styling />
//           <FlexLayout />
//           <TouchableComponent />
//         </ScrollView>
//       </View>
//     </>
//   );
// };

interface ToDo {
  id: string;
  text: string;
  completed: boolean;
}

const Home = () => {
  const [ToDoList, setToDoList] = useState<ToDo[]>([]);

  const addToDo = (text: string) => {
    console.log(text);
    setToDoList([
      ...ToDoList,
      {
        id: Date.now().toString(),
        text,
        completed: false,
      },
    ]);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>To Do App</Text>
      <ToDoInput onAddToDo={addToDo} />
      <ToDoList />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 40,
  },
  headerText: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
  },
});
