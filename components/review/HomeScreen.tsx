import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  FlatList,
} from "react-native";

import { useNavigation } from "@react-navigation/native";
import { NavigationProp } from "@react-navigation/native";
import { useState } from "react";

import GlobalStyles from "../global/styles/styles";

interface IReview {
  id: number;
  title: string;
  rate: number;
}

function HomeScreen() {
  const navigation: NavigationProp<RootStackParamList> = useNavigation();
  const [reviews, setReviews] = useState<IReview[]>([
    { id: 1, title: "React.js", rate: 5 },
    { id: 2, title: "React Native", rate: 5 },
    { id: 3, title: "Javascript", rate: 4 },
    { id: 4, title: "Typescript", rate: 5 },
    { id: 5, title: "Java", rate: 4 },
    { id: 6, title: "Python", rate: 5 },
    { id: 7, title: "C#", rate: 5 },
    { id: 8, title: "C+", rate: 4 },
    { id: 9, title: "C++", rate: 4 },
    { id: 10, title: "PHP", rate: 4 },
  ]);

  return (
    <View style={styles.wrapper}>
      <Text style={[GlobalStyles.globalFont, styles.title]}>Danh sách:</Text>
      <View style={styles.frame}>
        <FlatList
          data={reviews}
          keyExtractor={(item) => item.id + ""}
          renderItem={({ item }) => {
            return (
              <TouchableOpacity
                onPress={() => navigation.navigate("Detail", { ...item })}
              >
                <View style={styles.box}>
                  <Text style={[GlobalStyles.globalFont, styles.text]}>
                    {item.title}
                  </Text>
                </View>
              </TouchableOpacity>
            );
          }}
        />
      </View>
    </View>
  );
}

export default HomeScreen;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },

  frame: {
    flex: 1,
  },

  box: {
    backgroundColor: "grey",
    marginVertical: 5,
    marginHorizontal: 7.5,
    borderRadius: 5,
  },

  title: {
    fontSize: 40,
    padding: 15,
    fontWeight: "700",
  },

  text: {
    fontSize: 20,
    color: "white",
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
});
