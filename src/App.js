import React from 'react';
<<<<<<< HEAD
import logo from './logo.svg';
import './App.css';
import Form from './components/Form/Form'
import SignIn from './components/Form/SignIn/SignIn'
import Header from './components/Header/Header';
import SignUp from './components/Form/SignUp/SignUp';
import Router from './components/Router/Router';
import TodoList from './components/TodoList/TodoList';
function App() {
  return (
    <div>
      <Header/>
      <Router
              routes={[
                    {
                      path:'/login',
                      component:<SignIn/>,
                      default:true
                    },
                    {
                      path:'/signup',
                      component:<SignUp/>
                    },
                    {
                      path:'/todo-list',
                      component:<TodoList/>
                    }
              ]}/>
    </div>
    
=======
import { Provider } from 'react-redux';

import Router from './Components/Router';
import Header from './Components/Header';
import Login from './Screens/Login';
import Signup from './Screens/Signup';

import createStore from './Redux'

const store = createStore();

function App() {
  return (
    <Provider store={store}>
      <div className="App">
          <Header />
          
          <Router
            routes={[
              {
                path: '/login',
                component: <Login />,
                default: true,
              },
              {
                path: '/signup',
                component: <Signup />,
              },
            ]}
          />
        </div>
    </Provider>
>>>>>>> adde20e55ded66460bfda3d209e6fc246d172f37
  );
}

export default App;
