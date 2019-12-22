import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
<<<<<<< HEAD
import {Provider} from 'react-redux'
import store from './components/store'
import * as serviceWorker from './serviceWorker';

ReactDOM.render(    <Provider store={store}>
                    <App />
                    </Provider>
                , document.getElementById('root'));
=======
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
>>>>>>> adde20e55ded66460bfda3d209e6fc246d172f37

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
