import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  Image,
  Alert,
  Button,
} from "react-native";

export default function App() {
  console.log("App is Running");
  // const handlePress = () => console.log("Icon Tapped");
  const feedbackButton = () =>
    Alert.prompt("Type your name", "Hello", (text) => console.log(text));

  return (
    <SafeAreaView style={styles.container}>
      <Text>Hello World</Text>
      <Button color="dodgerblue" onPress={feedbackButton} title="Click me" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
});
