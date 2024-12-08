import { Fragment } from "react";
import { Modal, View, Text, Pressable, StyleSheet } from "react-native";
import GlobalStyles from "../global/styles/styles";

import AntDesign from "@expo/vector-icons/AntDesign";

interface IProps {
  modalVisible: boolean;
  setModalVisible: (type: boolean) => void;
}

function CreateModal(props: IProps) {
  const { modalVisible, setModalVisible } = props;

  return (
    <Fragment>
      <Modal animationType="slide" transparent={true} visible={modalVisible}>
        <View style={styles.container}>
          <View style={styles.frame}>
            <Text style={[GlobalStyles.globalFont, styles.modalTitle]}>
              Tạo đánh giá
            </Text>
            <AntDesign
              name="close"
              size={30}
              color="white"
              onPress={() => setModalVisible(false)}
            />
          </View>

          {/* <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={styles.textStyle}>Hide Modal</Text>
            </Pressable> */}
        </View>
      </Modal>
    </Fragment>
  );
}

export default CreateModal;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "grey",
  },

  frame: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 15,
  },

  modalTitle: {
    color: "white",
    fontSize: 30,
  },
});
