import React from 'react';

import { Provider } from 'react-redux';

import Router from './components/Router/Router';
import Header from './components/Header/Header';
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

  );
}

export default App;
