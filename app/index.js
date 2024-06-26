import { StyleSheet, Text, View } from "react-native";
import { Link } from "expo-router";

export default function Index() {
  return (
    <View style={styles.container}>
      <Text style={styles.largeText}>Todo app</Text>
      <Text style={styles.mediumText}>Keep track of your todo's</Text>
      <Link href="/HomeScreen">
        <View style={styles.button}>
          <Text style={styles.buttonText}>Start here</Text>
        </View>
      </Link>
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
    fontSize: 24,
    color: "#222",
  },
  button: {
    backgroundColor: "#0057a3",
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
  },
});
