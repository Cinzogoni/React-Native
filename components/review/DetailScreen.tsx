import { View, Text, Button, StyleSheet, Image } from "react-native";
import GlobalStyles from "../global/styles/styles";
import starIcon from "../../assets/image/star.png";

import {
  useNavigation,
  NavigationProp,
  RouteProp,
} from "@react-navigation/native";

type DetailScreenRouteProp = RouteProp<RootStackParamList, "Detail">;

interface IProps {
  route: DetailScreenRouteProp;
}

function DetailScreen({ route }: IProps) {
  const navigation: NavigationProp<RootStackParamList> = useNavigation();
  const { id, title, rate } = route.params || { id: 0, title: "", rate: 0 };

  return (
    <View style={styles.wrapper}>
      <Text style={[GlobalStyles.globalFont, styles.title]}>{title}</Text>
      <Text style={styles.text}>Id: {id}</Text>
      <Text style={styles.text}>Đánh giá: {rate} sao</Text>
      <View style={{ flexDirection: "row" }}>
        {Array.from({ length: 5 }).map((_, index) => {
          const isShow = index < rate;
          return (
            <Image
              key={index}
              style={{
                height: 50,
                width: 50,
                marginHorizontal: 7.5,
                marginVertical: 7.5,
                marginBottom: 30,
              }}
              source={isShow ? starIcon : null}
            />
          );
        })}
      </View>

      <Button
        title="Trở về"
        color="grey"
        onPress={() => navigation.navigate("Home")}
      />
    </View>
  );
}

export default DetailScreen;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },

  frame: {
    flex: 1,
  },

  box: {
    backgroundColor: "black",
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
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
});
