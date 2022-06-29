import './App.css';
import Todo from "../src/Component/Todo";
import { Routes, Route } from "react-router-dom";
import SingleTodo from "../src/Component/SingleTodo";
import Edit from '../src/Component/Edit';
import Login from "../src/Pages/Login";
import RequireAuth from '../src/Hoc/RequiredAuth';

function App() {
  return (
    <div className="App">
      {/* <h1><Counter /></h1> */}
      <Routes>
        <Route path="/todo/:id" element={<RequireAuth><SingleTodo /></RequireAuth>}></Route >
        <Route path="/" element={<RequireAuth><Todo /></RequireAuth>}></Route >
        <Route path="/todo/:id/edit" element={<RequireAuth><Edit /></RequireAuth>}></Route >
        <Route path="/login" element={<Login />}></Route >
      </Routes>
    </div>
  );
}

export default App;