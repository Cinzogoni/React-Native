import { Fragment, useState } from "react";
import {
  Modal,
  View,
  Text,
  StyleSheet,
  TextInput,
  Button,
  Alert,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";
import GlobalStyles from "../global/styles/styles";

import AntDesign from "@expo/vector-icons/AntDesign";

interface IProps {
  modalVisible: boolean;
  setModalVisible: (type: boolean) => void;
  addNew: any;
}

function CreateModal(props: IProps) {
  const { modalVisible, setModalVisible, addNew } = props;
  const [title, setTitle] = useState("");
  const [rate, setRate] = useState("");

  const handleSubmit = () => {
    if (!title || !rate) {
      Alert.alert("Không được để trống");
      return;
    }

    addNew({
      id: Math.floor(Math.random() * (2 - 2000000 + 1) + 2000000),
      title,
      rate,
    });

    setModalVisible(false);
    setTitle("");
    setRate("");
  };

  return (
    <Fragment>
      <Modal animationType="slide" transparent={true} visible={modalVisible}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.container}>
            <View style={styles.header}>
              <Text style={[GlobalStyles.globalFont, styles.modalTitle]}>
                Tạo đánh giá
              </Text>
              <AntDesign
                name="close"
                size={30}
                color="white"
                onPress={() => {
                  setModalVisible(false), setTitle(""), setRate("");
                }}
              />
            </View>

            <View style={styles.body}>
              <View style={styles.inputFrame}>
                <Text style={[GlobalStyles.globalFont, styles.text]}>
                  Ngôn ngữ
                </Text>
                <TextInput
                  style={styles.input}
                  value={title}
                  onChangeText={(v) => setTitle(v)}
                />
              </View>

              <View style={styles.inputFrame}>
                <Text style={[GlobalStyles.globalFont, styles.text]}>
                  Đánh giá
                </Text>
                <TextInput
                  style={styles.input}
                  value={rate}
                  onChangeText={(v) => {
                    // Chỉ cho phép nhập số
                    const numericValue = v.replace(/[^0-9]/g, "");
                    setRate(numericValue);
                  }}
                  keyboardType="numeric"
                />
              </View>
            </View>

            <Button title="Thêm" onPress={() => handleSubmit()} />
          </View>
        </TouchableWithoutFeedback>
      </Modal>
    </Fragment>
  );
}

export default CreateModal;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "grey",
    paddingHorizontal: 15,
  },

  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 15,
    marginBottom: 7.5,
    borderBottomWidth: 1,
    borderColor: "white",
  },

  modalTitle: {
    color: "white",
    fontSize: 30,
  },

  body: {
    marginVertical: 15,
  },

  inputFrame: {
    marginHorizontal: 15,
  },

  text: {
    fontSize: 25,
    color: "white",
  },

  input: {
    fontSize: 20,
    color: "white",
    marginVertical: 15,
    borderWidth: 1,
    borderColor: "white",
  },
});
