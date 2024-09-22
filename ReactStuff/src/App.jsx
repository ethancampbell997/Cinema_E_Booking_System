import "./styles.css"
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./pages/home";
import { CreateAccount } from "./pages/createaccount";
import { LogIn } from "./pages/login";
import { RegistrationConfirmation } from "./pages/regcon";
import { EditProf } from "./pages/editprof";
import { Book } from "./pages/book";
import { OrderSummary } from "./pages/ordersummary";
import { Checkout } from "./pages/checkout";
import { OrderConfirmation } from "./pages/ordercon";
export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/createaccount" element={<CreateAccount/>}/>
        <Route path="/login" element={<LogIn/>}/>
        <Route path="/regcon" element={<RegistrationConfirmation/>}/>
        <Route path="/editprof" element={<EditProf/>}/>
        <Route path="/book" element={<Book/>}/>
        <Route path="/ordersummary" element={<OrderSummary/>}/>
        <Route path="/checkout" element={<Checkout/>}/>
        <Route path="/ordercon" element={<OrderConfirmation/>}/>
      </Routes>
    </Router>
  )
}





/*import { useState } from "react"
import "./styles.css"
export default function App() {
  const [newItem, setNewItem] = useState("")
  const [todos, setTodos] = useState([])
  function handleSubmit(e) {
    e.preventDefault()

    setTodos(currentTodos => {
      return [
        ...currentTodos,
        { id: crypto.randomUUID(), title:newItem, completed: false },
      ]
    })
    setNewItem("")
  }
  function toggleTodo(id, completed) {
    setTodos(currentTodos => {
      return currentTodos.map(todo => {
        if (todo.id === id){
          return { ...todo, completed}
        }
        return todo
      })
    })
  }
  function deleteTodo(id){
    setTodos(currentTodos => {
    return currentTodos.filter(todo => todo.id !== id)
    })
  }
  return <>
  <form onSubmit={handleSubmit} className="new-item-form">
    <div className="form-row">
      <label htmlFor="item">New Item</label>
      <input value={newItem} onChange={e => setNewItem(e.target.value)} type="text" id="item"></input>
    </div>
    <button className="btn">Add</button>
  </form>
  <h1 className="header">Todo List</h1>
  <ul className="list">
    {todos.length === 0 && "No Todos"}
    {todos.map(todo => {
      return <li key={todo.id}>
      <label>
        <input type="checkbox" checked={todo.completed}  onChange={e => toggleTodo(todo.id, e.target.checked)}/>
        {todo.title}
      </label>
      <button onClick={() => deleteTodo(todo.id)} className="btn btn-danger">Delete</button>
    </li>
    })}
    
  </ul>
  </>
}*/