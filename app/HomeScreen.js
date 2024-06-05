import React, { useContext } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { TodosContext } from "./TodosContext";
import { useRouter } from "expo-router";

export default function HomeScreen() {
  const { todos } = useContext(TodosContext);
  const router = useRouter();

  const renderItem = ({ item }) => (
    <TouchableOpacity
      onPress={() =>
        router.push({
          pathname: "/DetailScreen",
          params: { id: item.id },
        })
      }
      style={styles.item}
    >
      <Text style={[styles.mediumText, item.done && styles.doneText]}>
        {item.text}
      </Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.largeText}>Things to do!</Text>
      <Text style={styles.smallText}>Press "ADD" to add new tasks.</Text>
      <FlatList
        data={todos}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
      />
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
  item: {
    padding: 16,
    marginVertical: 8,
    backgroundColor: "#ffffff",
    borderColor: "#ddd",
    borderWidth: 1,
    borderRadius: 5,
    minWidth: "70%",
    alignItems: "center",
  },
  largeText: {
    fontSize: 36,
    color: "#222",
  },
  mediumText: {
    fontSize: 18,
    color: "#222",
  },
  smallText: {
    fontSize: 18,
    color: "#555",
    marginBottom: 16,
  },
  doneText: {
    textDecorationLine: "line-through",
    color: "gray",
  },
});
