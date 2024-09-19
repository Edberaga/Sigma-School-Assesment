import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { TodoContext } from './context/TodoContext';

import Header from './components/Header';
import Home from './pages/Home';
import Note from './pages/Note';
import Login from './pages/Login';
import ErrorPage from './pages/ErrorPage';
import AddTodo from './pages/AddTodo';
import EditTodo from './pages/EditTodo';

import useLocalStorage from 'use-local-storage';
import { AuthContext } from './context/AuthContext';
import { useEffect, useState } from 'react';
import RequireAuth from './components/RequireAuth';
import RequireAuthPage from './pages/RequireAuthPage';

function App() {
  const [todos, setTodos] = useLocalStorage("todos", []);
  const [isLoggedIn, setIsLoggedIn] = useState(() => {
    return localStorage.getItem("isLoggedIn") || null;
  });

  useEffect(() => {
    if (isLoggedIn) {
      localStorage.setItem("isLoggedIn", isLoggedIn);
    } else {
      localStorage.removeItem("isLoggedIn");
      
    }
  }, [isLoggedIn]);

  if(!isLoggedIn) {
    console.log("currently not logged in");
  }

  return (
  <TodoContext.Provider value={{ todos, setTodos }}>
    <AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn}}> 
    <BrowserRouter>
    <main>
      {isLoggedIn && <Header/>}
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/note'>
          <Route index element={<RequireAuth><Note/></RequireAuth>} />
          <Route path='add-note' element={<RequireAuth><AddTodo/></RequireAuth>} />
          <Route path='todo/:id' element={<RequireAuth><EditTodo/></RequireAuth>} />
        </Route>
        <Route path='*' element={<ErrorPage/>} />
        <Route path='/404' element={<RequireAuthPage />} />
      </Routes>
    </main>
    </BrowserRouter>
    </AuthContext.Provider>
  </TodoContext.Provider>
  
  )
}

export default App