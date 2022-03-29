import React from 'react';
import ReactDOM from 'react-dom';
import './sass/app.scss';
import App from './components/App';
import reportWebVitals from './reportWebVitals';
import {combineReducers, createStore} from "redux";
import {Provider} from "react-redux";
import notificationReducer from "./state/notifications";

const store = createStore(combineReducers({
    notifications: notificationReducer
}), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

//TODO Create profile reducer - Done?
//TODO Get rid of userMeta completely


ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
