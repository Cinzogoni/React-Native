import { View, Text, StyleSheet } from "react-native";
import GlobalStyles from "../global/styles/styles";

function AboutScreen() {
  return (
    <View style={styles.wrapper}>
      <Text style={[GlobalStyles.globalFont, styles.title]}>
        Thực Hành Mobile App
      </Text>
      <Text style={styles.text}>Được lập trình bởi Cinzogoni</Text>
    </View>
  );
}

export default AboutScreen;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    alignItems: "center",
  },

  title: {
    fontSize: 35,
    paddingVertical: 10,
    paddingHorizontal: 15,
  },

  text: {
    fontSize: 20,
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
});
