import { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Button,
  FlatList,
  TouchableOpacity,
} from "react-native";

interface ITodo {
  id: number;
  name: string;
}

export default function App() {
  const [todo, setTodo] = useState("");
  const [todoList, setTodoList] = useState<ITodo[]>([]);

  const handleAddTodo = () => {
    if (!todo) return;

    setTodoList([...todoList, { id: todoList.length + 1, name: todo }]);
    setTodo("");
  };

  const handleDeleteTodo = (id: number) => {
    const newTodoList = todoList.filter((item) => item.id !== id);
    setTodoList(newTodoList);
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <Text style={styles.header}>Todo App</Text>
      {/* Form */}
      <View style={styles.body}>
        <TextInput
          value={todo}
          style={styles.todoInput}
          onChangeText={(value) => setTodo(value)}
        />
        <Button color="blue" title="Add todo" onPress={handleAddTodo} />
      </View>
      {/* Todo list */}
      <View style={styles.body}>
        <Text style={styles.texts}>List to do: {todo}</Text>
        <FlatList
          keyExtractor={(item) => item.id + ""}
          data={todoList}
          renderItem={({ item }) => {
            return (
              <TouchableOpacity onPress={() => handleDeleteTodo(item.id)}>
                <Text style={styles.todoItem}>{item.name}</Text>
              </TouchableOpacity>
            );
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    flex: 1,
    backgroundColor: "#fff",
    // alignItems: "center",
    // justifyContent: "center",
  },

  header: {
    backgroundColor: "blue",
    color: "white",
    fontSize: 40,
    fontWeight: "600",
    textAlign: "center",
    paddingVertical: 15,
    marginBottom: 15,
  },

  body: {
    margin: 10,
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

  todoItem: {
    fontSize: 20,
    marginBottom: 15,
    padding: 5,
    backgroundColor: "blue",
    borderRadius: 5,
    color: "white",
  },
});
