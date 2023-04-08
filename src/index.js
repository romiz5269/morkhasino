import React from 'react';
import ReactDOM from 'react-dom/client';
import 'Assets/App.css'
import reportWebVitals from './reportWebVitals';
import MainRoute from './Routes';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import { Provider } from 'react-redux';
import store from 'Services/management/store/store';
import { ThemeProvider } from '@mui/material';
import {theme} from 'Configs/mui-configs/MuiConfigs';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <>
      <Provider store={store}>
       <ThemeProvider theme={theme}>
        <MainRoute />
       </ThemeProvider>
      </Provider>
      <ToastContainer />
    </>
);

reportWebVitals();
