import { View, Text, Button } from "react-native";
import GlobalStyles from "../global/styles/styles";

import { useNavigation } from "@react-navigation/native";
import { NavigationProp } from "@react-navigation/native";

function DetailScreen() {
  const navigation: NavigationProp<RootStackParamList> = useNavigation();

  return (
    <View>
      <Text style={GlobalStyles.globalFont}>Detail Screen</Text>
      <Button title="Back Home" onPress={() => navigation.navigate("Home")} />
    </View>
  );
}

export default DetailScreen;
