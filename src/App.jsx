import { useState, useEffect } from 'react';
import Form from "./components/Form.jsx";
import Result from './components/Result.jsx';
import RegisterUser from './components/RegisterUser.jsx';
import LoginUser from "./components/LoginUser.jsx";

function App() {

  const [todos, setTodos] = useState([]);

  // just in case, for testing
  useEffect(() => {console.log("Hello amin")}, [todos]);

  const handleValues = ({inputValue}) => {

    // create an object
    const CreateTodos = {
      id: Math.floor(Math.random() * 101).toString(16),
      inputValue,
      checked: false
    }

    // utk kau setkan apa kau nak return
    setTodos((previous) => {
      return [CreateTodos, ...previous]
    })
  }

  const handleToggle = (event) => {

    const idChecked = event.target.id;
    const isBool = event.target.checked;

    setTodos((previous) => {
      const updateTodo = previous.map((todo) => {

        // first kena buat sesuatu kalau error
        if(todo.id != idChecked){
          return todo
        }

        // kalau berjaya jalan ni
        const newTodo = {
          ...todo,
          checked: isBool
        }

        return newTodo
      })

      return updateTodo
    })
  }

  return (
    <>
      <RegisterUser />
      <LoginUser />
      <pre>{JSON.stringify(todos, null, 2)}</pre>


      <Form 
        details={handleValues}
      />   

      {
        todos.map((todo) => {
          return (
            <Result 
              key={todo.id}
              id={todo.id}
              text={todo.inputValue}
              cek={todo.checked}
              toggle={handleToggle}
            />
          )
        })
      }   
    </>
  )
}

export default App
