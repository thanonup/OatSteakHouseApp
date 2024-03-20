import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import PinnedMessage from "./PinnedMessage";
import HeaderMenuApp from "./HeaderMenuApp";

export default function HeaderApp(props: StylesProps) {
  return (
    <View style={[styles.header, { flex: props.flexVlaue }]}>
      <SafeAreaView style={styles.safeAreaView}>
        <View style={styles.columnMenu}>
          <HeaderMenuApp />
          <PinnedMessage />
        </View>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
  },
  columnMenu: {
    flexDirection: "column",
    flex: 1,
    gap: 10,
  },
  header: {
    backgroundColor: "#a53a1c",
    paddingLeft: 10,
    paddingRight: 10,
  },
});
