import { useContext } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { useLocalSearchParams } from "expo-router";
import { TodosContext } from "./TodosContext";
import { useRouter } from "expo-router";

export default function DetailScreen() {
  const router = useRouter();
  const { id } = useLocalSearchParams();
  const { todos, setTodos } = useContext(TodosContext);
  const todo = todos.find((t) => t.id === Number(id));

  if (!todo) {
    return (
      <View style={styles.container}>
        <Text style={styles.largeText}>Todo deleted!</Text>
        <Button title="Go Back" onPress={() => router.back()} />
      </View>
    );
  }

  const markDone = () => {
    setTodos((prevTodos) =>
      prevTodos.map((t) => (t.id === todo.id ? { ...t, done: true } : t))
    );
    router.push("/HomeScreen");
  };

  const deleteTodo = () => {
    setTodos((prevTodos) => prevTodos.filter((t) => t.id !== todo.id));
    router.push("/HomeScreen");
  };

  return (
    <View style={styles.container}>
      <Text style={[styles.largeText, todo.done && styles.doneText]}>
        {todo.text}
      </Text>
      <Text style={[styles.mediumText, todo.done && styles.doneText]}>
        {todo.description}
      </Text>
      <View style={styles.buttonContainer}>
        <Button title="Mark as Done" onPress={markDone} />
      </View>
      <View style={styles.buttonContainer}>
        <Button color="#dd5555" title="Delete" onPress={deleteTodo} />
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
  largeText: {
    fontSize: 36,
    color: "#222",
  },
  mediumText: {
    fontSize: 18,
    color: "#222",
    marginBottom: 16,
  },
  doneText: {
    textDecorationLine: "line-through",
    color: "gray",
  },
  buttonContainer: {
    width: "100%",
    marginBottom: 10,
  },
});
