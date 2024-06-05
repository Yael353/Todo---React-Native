import React, { useContext, useState } from "react";
import { View, TextInput, StyleSheet, Button } from "react-native";
import { TodosContext } from "./TodosContext";
import { useRouter } from "expo-router";

export default function AddScreen() {
  const { setTodos } = useContext(TodosContext);
  const [text, setText] = useState("");
  const [description, setDescription] = useState("");

  const router = useRouter();

  function addTodo() {
    if (text) {
      setTodos((prevTodos) => [
        ...prevTodos,
        { id: Date.now(), text, description, done: false },
      ]);
      router.back();
    }
  }

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Task title"
        value={text}
        onChangeText={setText}
      />
      <TextInput
        style={styles.input}
        placeholder="Task description"
        value={description}
        onChangeText={setDescription}
      />
      <View style={styles.buttonContainer}>
        <Button title="Add task" onPress={addTodo} />
      </View>
      <View style={styles.buttonContainer}>
        <Button title="Dismiss" color="#ff2222" onPress={() => router.back()} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f6f6f1",
    alignItems: "center",
    justifyContent: "center",
    padding: 16,
    gap: 16,
  },
  input: {
    height: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 16,
    paddingHorizontal: 8,
    width: "100%",
    backgroundColor: "#fff",
  },
  buttonContainer: {
    width: "100%",
    marginBottom: 10,
  },
});
