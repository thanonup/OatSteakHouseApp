import {
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
  Image,
} from "react-native";
import React from "react";
import { PreviewData } from "../data/PreviewData";

type Props = {
  previewData: PreviewData;
};

const PaginationPreviewView = ({ previewData }: Props) => {
  const { width } = useWindowDimensions();
  const containerSize = width / 1.05;

  return (
    <View style={styles.container}>
      <Image
        source={previewData.image}
        style={[styles.image, { width: containerSize, height: containerSize }]}
      />
    </View>
  );
};

export default PaginationPreviewView;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    borderRadius: 10,
  },
});
