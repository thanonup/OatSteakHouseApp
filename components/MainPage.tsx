import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  Dimensions,
} from "react-native";

const { width, height } = Dimensions.get("window");

export default function MainPage(props: StylesProps) {
  return (
    <View style={[styles.container, { flex: props.flexVlaue }]}>
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.contentContainerStyle}
      >
        <Image
          style={styles.imageTest}
          source={require("../assets/mockAsset/allmenu.jpg")}
          resizeMode="contain"
        />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#999999",
  },
  scrollView: {
    backgroundColor: "pink",
    marginHorizontal: 10,
    paddingVertical: 10,
  },
  contentContainerStyle: {
    alignItems: "center",
  },
  imageTest: {},
});
