import './App.scss';
import MatrixRain from './components/matrix/Matrix';
import { Main } from './components/main/Main';
import { Middle } from './components/middle/Middle';
import { useState } from 'react';
import { Terminal } from './components/terminal/Terminal';

function App() {

    const [selectedArticle, setSelectedArticle] = useState('Profile');

    function changeArticle(article){
        setSelectedArticle(article);
    }

    return (
    <>
        <MatrixRain></MatrixRain>

        <div id="wrapper">
            <Main changeArticle={changeArticle}></Main>
            <Middle selectedArticle={selectedArticle}></Middle>
            <Terminal selectedArticle={selectedArticle}></Terminal>
        </div>
    </>
    );
}

export default App;