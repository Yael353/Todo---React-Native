import React from "react";
import { Stack, router } from "expo-router";
import { Button } from "react-native";
import { useRouter } from "expo-router";
import { TodosProvider } from "./TodosContext";

export default function RootLayout() {
  const router = useRouter();
  return (
    <TodosProvider>
      <Stack>
        <Stack.Screen
          name="index"
          options={{ title: "Welcome to your Todo-app" }}
        />
        <Stack.Screen
          name="HomeScreen"
          options={{
            headerRight: () => (
              <Button title="Add" onPress={() => router.push("/AddScreen")} />
            ),
          }}
        />
        <Stack.Screen name="DetailScreen" />
        <Stack.Screen
          name="AddScreen"
          options={{ presentation: "modal", title: "Add todos" }}
        />
      </Stack>
    </TodosProvider>
  );
}
