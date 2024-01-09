import { View, Text, StyleSheet, Pressable } from "react-native";
const TaskItem = ({ itemData, removeTaskFromList }: TaskItemType) => {
  // console.log(props)
  return (
    <View style={styles.taskList}>
      <Pressable
        onPress={() => removeTaskFromList(itemData.index)}
        android_ripple={{ color: "rgb(55 48 163)" }}
        style={({pressed})=>pressed && styles.isoCss}
      >
        <Text key={itemData.index} style={styles.task}>
          {itemData.item}
        </Text>
      </Pressable>
    </View>
  );
};
export default TaskItem;

const styles = StyleSheet.create({
  taskList:{
    backgroundColor: "rgb(129 140 248)",
    marginBottom: 8,
    marginHorizontal:10,
    borderRadius: 4,
  },
  task: {
    padding: 10,
    color: "#ffff",
    fontSize:18
  },
  isoCss:{
    opacity:0.6
  }
});
