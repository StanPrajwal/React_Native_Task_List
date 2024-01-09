import { useState } from "react";
import { View, TextInput, Button, StyleSheet, Modal, Image } from "react-native";

const TaskInput = ({ addTask,isVisible ,controlModal}: TaskInputType) => {
  const [enteredTask, setEnterTask] = useState<string>("");
  const taskInputHandler = (enterdInput: string) => {
    // console.log(enterdInput)
    setEnterTask(enterdInput);
  };
  const addTaskHandler = () => {
    if (enteredTask) {
      addTask(enteredTask);
      setEnterTask("");
    }
  };
  return (
    <Modal visible={isVisible} animationType="slide">
      <View style={styles.inputContainer}>
        <Image source={require('../assets/logo.png')} style={styles.image}/>
        <TextInput
          placeholder="Add your task here.."
          style={styles.textInput}
          onChangeText={taskInputHandler}
          value={enteredTask}
        />
        <View style={styles.buttonContainer}>
          <Button title="Add Task" onPress={addTaskHandler} />
          <Button title="Close" color={"red"} onPress={controlModal}/>
        </View>
      </View>
    </Modal>
  );
};

export default TaskInput;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor:'rgb(192 132 252)'
  },
  textInput: {
    borderWidth: 1,
    borderColor: "gray",
    width: "80%",
    padding: 10,
    backgroundColor:"rgb(245 208 254)",
    borderRadius:6,
    fontSize:18
  },
  buttonContainer: {
    marginTop: 5,
    flexDirection: "row",
    gap:6
  },
  image:{
    width:100,
    height:100,
    marginBottom:10,
    borderRadius:50,
    backgroundColor:'inherit',
    color:"red"
  }
});
