import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import HeaderApp from "./components/HeaderApp";

export default function App() {
  return (
    <View style={styles.container}>
      <HeaderApp />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
