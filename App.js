import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  Image,
  Button,
  Alert,
} from "react-native";

export default function App() {
  console.log("App is Running");
  const handlePress = () => console.log("Pressed");
  const feedbackButton = () => Alert.alert("Fuck you");

  return (
    <SafeAreaView style={styles.container}>
      <Text numberOfLines={1} onPress={handlePress}>
        Hello React Native - A really really long text. Now I wanna make this
        even longer and see what happens!
      </Text>
      <Image source={require("./assets/favicon.png")} />
      <Button title="Press me" onPress={feedbackButton} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "orange",
  },
});
