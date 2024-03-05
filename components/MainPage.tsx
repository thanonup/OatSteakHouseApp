import { StyleSheet, Text, View } from "react-native";

export default function MainPage(props: StylesProps) {
  return (
    <View style={[styles.container, { flex: props.flexVlaue }]}>
      <Text>Test Content</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#999999",
  },
});
