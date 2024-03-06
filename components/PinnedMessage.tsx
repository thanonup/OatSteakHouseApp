import { StyleSheet, Text, View } from "react-native";
import TextTicker from "react-native-text-ticker";

export default function PinnedMessage() {
  return (
    <View style={styles.container}>
      <TextTicker
        style={styles.massageText}
        scrollSpeed={50}
        repeatSpacer={10}
        loop
        bounce
        numberOfLines={1}
      >
        !!!ร้านเปิดนะครับสามารถสั่งได้จาก App Delivery ( Grab , Lineman ,
        Robinhood , ShopeeFood )
      </TextTicker>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 0.4,
    // flexDirection: "column",
    backgroundColor: "#852f18",
    // alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
    paddingLeft: 5,
    paddingRight: 5,
  },
  massageText: {
    fontSize: 24,
    color: "#fff",
  },
});
