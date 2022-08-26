import React from 'react';
import ReactDOM from 'react-dom';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { Header } from './components/header/Header';
import { Main } from './components/main/Main';
import MatrixRain from './components/matrix/Matrix';
import './index.scss';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
    <React.StrictMode>
        <HelmetProvider>

            <Helmet>
                <title>Malcolm Dahling CV</title>
            </Helmet>

            <div id="wrapper">
                <Header></Header>
                <Main></Main>
            </div>

            <MatrixRain></MatrixRain>

        </HelmetProvider>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
