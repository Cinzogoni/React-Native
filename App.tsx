import { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Button,
  FlatList,
  Alert,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";

import Feather from "@expo/vector-icons/Feather";

interface ITodo {
  id: number;
  name: string;
}

export default function App() {
  const [todo, setTodo] = useState("");
  const [todoList, setTodoList] = useState<ITodo[]>([]);

  const handleAddTodo = () => {
    if (!todo) {
      Alert.alert("Lỗi input", "Todo không được để trống", [
        { text: "Xác nhận", onPress: () => console.log("is pressed!") },
      ]);
      return;
    }

    setTodoList([...todoList, { id: todoList.length + 1, name: todo }]);
    setTodo("");
  };

  const handleDeleteTodo = (id: number) => {
    Alert.alert("Xác nhận xoá", "Bạn chắc chắn muốn xoá todo này?", [
      { text: "Huỷ", style: "cancel" },

      {
        text: "Xác nhận",
        style: "destructive",
        onPress: () => {
          const newTodoList = todoList.filter((item) => item.id !== id);
          setTodoList(newTodoList);
        },
      },
    ]);
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        {/* Header */}
        <Text style={styles.header}>Todo App</Text>

        {/* Form */}
        <View style={styles.form}>
          <TextInput
            value={todo}
            style={styles.todoInput}
            onChangeText={(value) => setTodo(value)}
          />
          <Button color="blue" title="Add todo" onPress={handleAddTodo} />
        </View>

        {/* Todo list */}
        <View style={styles.todo}>
          <Text style={styles.texts}>List to do: {todo}</Text>
          <FlatList
            keyExtractor={(item) => item.id + ""}
            data={todoList}
            renderItem={({ item }) => {
              return (
                <TouchableOpacity onPress={() => handleDeleteTodo(item.id)}>
                  <View style={styles.todoGroup}>
                    <Text style={styles.todoItem}>{item.name}</Text>
                    <Feather name="trash" size={24} color="white" />
                  </View>
                </TouchableOpacity>
              );
            }}
          />
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    flex: 1,
    backgroundColor: "#fff",
    margin: 10,
  },

  header: {
    backgroundColor: "blue",
    color: "white",
    fontSize: 40,
    fontWeight: "600",
    textAlign: "center",
    paddingVertical: 10,
  },

  form: {
    marginBottom: 10,
  },

  todo: {
    marginBottom: 10,
    flex: 1,
  },

  texts: {
    fontSize: 20,
    marginBottom: 10,
  },

  todoInput: {
    borderBottomWidth: 1,
    borderBottomColor: "blue",
    fontSize: 20,
    marginBottom: 15,
  },

  todoGroup: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "blue",
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },

  todoItem: {
    fontSize: 20,
    color: "white",
  },
});
