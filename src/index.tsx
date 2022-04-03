import React from 'react';
import './index.css';
import App from './App';
import './App.css'
import {Provider} from "react-redux";
import {setupStore} from "./store/store";
import {BrowserRouter} from "react-router-dom";
import {createRoot} from 'react-dom/client';

const container = document.getElementById('root')
// @ts-ignore
const root = createRoot(container);

const store = setupStore()

root.render(
    <BrowserRouter>
        <Provider store={store}>
            <App/>
        </Provider>
    </BrowserRouter>
);

