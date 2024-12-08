import { View, Text, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import GlobalStyles from "../global/styles/styles";

const AppHeader = () => {
  const navigation: any = useNavigation();

  return (
    <View style={styles.wrapper}>
      <MaterialIcons
        name="menu"
        size={40}
        color="white"
        onPress={() => navigation.openDrawer()}
      />
      <Text style={[GlobalStyles.globalFont, styles.title]}>
        Ngôn Ngữ Lập Trình
      </Text>
    </View>
  );
};

export default AppHeader;

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "grey",
    paddingHorizontal: 5,
    paddingVertical: 15,
  },

  title: {
    color: "white",
    marginLeft: 5,
    fontSize: 25,
    fontWeight: "700",
  },
});
