import logo from './logo.svg';
import './App.css';
import AddToDo from './components/AddToDo';
import Header from './components/Header';
import { Route, Routes } from 'react-router-dom';
import Login from './components/Authentication/Login';
import Register from './components/Authentication/Register';
import RequireAuth from './components/RequireAuth';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={
          <RequireAuth>
            <AddToDo></AddToDo>
          </RequireAuth>
        }></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/register' element={<Register/>}></Route>
      </Routes>

    </div>
  );
}

export default App;
