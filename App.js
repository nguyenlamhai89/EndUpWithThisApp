import React from "react";
import { SafeAreaView, StyleSheet, View, Text } from "react-native";

export default function App() {
  console.log("App is Running");

  return (
    <SafeAreaView>
      <View style={styles.background1} />
      <View style={styles.background2} />
      <View style={styles.background3} />
      <Text>Hello</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "dodgerblue",
  },
  background1: {
    backgroundColor: "dodgerblue",
    flex: 1,
  },
  background2: {
    backgroundColor: "orange",
    flex: 1,
  },
  background3: {
    backgroundColor: "red",
    flex: 1,
  },
});
