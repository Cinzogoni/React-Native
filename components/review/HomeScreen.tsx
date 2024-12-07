import { View, Text, Button } from "react-native";
import GlobalStyles from "../global/styles/styles";

function HomeScreen(prop: any) {
  const { navigation } = prop;

  return (
    <View>
      <Text style={GlobalStyles.globalFont}>Home Screen</Text>
      <Button
        title="View Detail"
        onPress={() => navigation.navigate("Detail")}
      />
    </View>
  );
}

export default HomeScreen;
