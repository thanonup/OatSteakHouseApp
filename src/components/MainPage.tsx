import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  Dimensions,
  FlatList,
} from "react-native";
import PaginationPreviewView from "./PaginationPreviewView";
import { previewData } from "../data/PreviewData";

const { width, height } = Dimensions.get("window");

export default function MainPage(props: StylesProps) {
  return (
    <View style={[styles.container, { flex: props.flexVlaue }]}>
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.contentContainerStyle}
      >
        <FlatList
          style={styles.flatListPreview}
          // bounces={false}
          // pagingEnabled={true}
          data={previewData}
          // horizontal={true}
          renderItem={({ item }) => (
            <PaginationPreviewView previewData={item} />
          )}
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
    paddingVertical: 10,
  },
  contentContainerStyle: {
    alignItems: "center",
  },
  flatListPreview: {},
});
