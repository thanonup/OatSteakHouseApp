import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import HeaderApp from "./src/components/HeaderApp";
import MainPage from "./src/components/MainPage";
import BottomMenu from "./src/components/BottomMenu";

export default function App() {
  return (
    <View style={styles.container}>
      <HeaderApp flexVlaue={0.2} />
      <StatusBar style="auto" />
      <MainPage flexVlaue={0.7} />
      <BottomMenu flexVlaue={0.1} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
