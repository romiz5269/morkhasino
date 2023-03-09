import React from 'react';
import ReactDOM from 'react-dom/client';
import 'Assets/App.css'
import reportWebVitals from './reportWebVitals';
import MainRoute from './Routes';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import { Provider } from 'react-redux';
import store from 'Services/management/store/store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <>
      <Provider store={store}>
       <MainRoute />
      </Provider>
      <ToastContainer />
    </>
);

reportWebVitals();
