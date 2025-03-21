import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

interface Task {
  text: string;
  completed: boolean;
}

const TodoApp = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [task, setTask] = useState("");

  const addTask = () => {
    if (task.trim() !== "") {
      setTasks([...tasks, { text: task, completed: false }]);
      setTask("");
    }
  };

  const removeTask = (index: number) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  const toggleTask = (index: number) => {
    const updatedTasks = tasks.map((item, i) =>
      i === index ? { ...item, completed: !item.completed } : item
    );
    setTasks(updatedTasks);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>📋 To-Do List</Text>

      {/* Input & Add Button */}
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Enter a new task..."
          placeholderTextColor="#888"
          value={task}
          onChangeText={setTask}
        />
        <TouchableOpacity style={styles.addButton} onPress={addTask}>
          <Ionicons name="add-circle" size={32} color="white" />
        </TouchableOpacity>
      </View>

      {/* Task List */}
      <FlatList
        data={tasks}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => (
          <View style={styles.taskItem}>
            <TouchableOpacity onPress={() => toggleTask(index)}>
              <Ionicons
                name={item.completed ? "checkmark-circle" : "ellipse-outline"}
                size={24}
                color={item.completed ? "green" : "gray"}
              />
            </TouchableOpacity>
            <Text style={[styles.taskText, item.completed && styles.completed]}>
              {item.text}
            </Text>
            <TouchableOpacity onPress={() => removeTask(index)}>
              <Ionicons name="trash-bin" size={24} color="red" />
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
};

export default TodoApp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#f5f5f5",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#333",
    textAlign: "center",
    marginBottom: 20,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    marginBottom: 20,
  },
  input: {
    flex: 1,
    fontSize: 16,
    padding: 10,
    color: "#333",
  },
  addButton: {
    backgroundColor: "#007bff",
    borderRadius: 50,
    padding: 8,
  },
  taskItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  taskText: {
    fontSize: 16,
    color: "#333",
    flex: 1,
    marginLeft: 10,
  },
  completed: {
    textDecorationLine: "line-through",
    color: "gray",
  },
});
