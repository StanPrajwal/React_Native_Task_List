import { useState } from "react";
import {
  Button,
  FlatList,
  StyleSheet,
  View
} from "react-native";
import TaskInput from "./components/TaskInput";
import TaskItem from "./components/TaskItem";
import { StatusBar } from "expo-status-bar";

export default function App() {
  const [modalIsVisible,setModalIsVisible] = useState<boolean>(false)
  const [addTasks, setAddTasks] = useState<string[]>([]);

  const addTask = (enteredTask:string) => {
      setAddTasks((prev) => [...prev, enteredTask]);
  };
  const removeTaskFromList = (index: number) => {
    const newList = addTasks.filter((_, idx) => index !== idx);
    setAddTasks(newList);
  };
  const addTaskHandler = ()=>{
    setModalIsVisible(!modalIsVisible)
  }
  return (
    <>
    <StatusBar style="light"/>
    <View style={styles.appContaine}>
      <View style={styles.addtaskBtn}>
      <Button title="Add New Task" color={"rgb(168 85 247)"} onPress={addTaskHandler}/>
      </View>
     <TaskInput  addTask={addTask} isVisible={modalIsVisible} controlModal={addTaskHandler}/>
      <View style={styles.taskContainer}>
        <FlatList
          data={addTasks}
          renderItem={(itemData) => <TaskItem itemData={itemData} removeTaskFromList={removeTaskFromList}/>}
        />
      </View>
    </View>
    </>
  );
}

const styles = StyleSheet.create({
  addtaskBtn:{
    alignItems:'flex-end',
    marginBottom:20,
    paddingHorizontal:10,
   borderRadius:20
  },
  appContaine: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal:20

  },
  taskContainer: {
    flex: 5,
  },

 
});
