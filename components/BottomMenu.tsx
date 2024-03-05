import { StyleSheet, Text, View } from "react-native";

export default function BottomMenu(props: StylesProps) {
  return (
    <View style={[styles.container, { flex: props.flexVlaue }]}>
      <Text>Bottom Menu</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#696969",
  },
});
