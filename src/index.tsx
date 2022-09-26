import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './app/store';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './index.css';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import {ThemeProvider} from "@mui/material";
import Random from "./pages/Random/Random";
import Main from "./pages/Main/Main";
import {theme} from "./themes/theme";
import About from "./pages/About/About";

const container = document.getElementById('root')!;
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Provider store={store}>
        <ThemeProvider theme={theme}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<App />}>
                        <Route index element={<Main />} />
                        <Route path="/about" element={<About />}/>
                        <Route path="/random" element={<Random />}/>
                    </Route>
                </Routes>
            </BrowserRouter>
        </ThemeProvider>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
