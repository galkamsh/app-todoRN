import { StyleSheet, Text, View } from 'react-native';
import {Navbar} from "./src/components/Navbar";
import {AddTodo} from "./src/components/AddTodo";
import { Todo } from './src/components/Todo';
import {useState} from 'react';

export default function App() {

  const [todos, setTodos] = useState([]);


  const addTodo = (title)=> {
     
      setTodos(prevTodos => {
       
        return [ 
          ...prevTodos,   //спред оператор,деструктуризація масиву (розбиття його, розкидати обєкт на змінні)
        {
          id: Date.now().toString(),
          title: title
        }
        ];
      });
     }
   console.log('todos ', todos);

  return (
    <View style={styles.container}>
     <Navbar />
       <View style={styles.addForm}>
        <AddTodo onSubmit={addTodo} />
        </View>
    
      <View style={styles.todoList}>
      { 
     
       todos.map((todo) => {
        const {id, ...restTodo} =todo;
        return <Todo key={id} todo={restTodo} />
      })
       }
      </View> 
     
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
    addForm: {
    paddingHorizontal: 15
  },
  todoList: 
  {
      paddingHorizontal: 10
  }
});
