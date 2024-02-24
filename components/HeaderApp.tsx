import { StyleSheet, Text, Image, View, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

export default function HeaderApp() {
  return (
    <View style={styles.header}>
      <View style={styles.menuHedaer}>
        <View style={styles.menuHedaerLeft}>
          <Text style={styles.greetingText}>สวัสดี, username</Text>
        </View>
        <View style={styles.menuHedaerRight}>
          <TouchableOpacity onPress={() => console.log("click chat")}>
            <Icon
              style={styles.chatbox}
              name="chatbox-ellipses"
              size={50}
              color="white"
            ></Icon>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => console.log("click profile")}>
            <Image
              style={styles.userProfile}
              source={{ uri: "https://randomuser.me/api/portraits/lego/8.jpg" }}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flex: 0.3,
    backgroundColor: "#a53a1c",
    padding: 20,
  },
  menuHedaer: {
    flex: 0.3,
    // backgroundColor: "#ffffff33",
    marginTop: 30,
    flexDirection: "row",
  },
  menuHedaerLeft: {
    flex: 2,
    // backgroundColor: "#2ea51c64",
    justifyContent: "center",
  },
  menuHedaerRight: {
    flex: 1,
    // backgroundColor: "#cf742490",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  greetingText: {
    color: "#fff",
    fontSize: 24,
  },
  userProfile: {
    width: 50,
    height: 50,
    borderRadius: 100 / 2,
  },
  chatbox: {},
});
