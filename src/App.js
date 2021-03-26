import './App.css';
import Layout from './container/layout';

function App() {
    const correctAnswer = Array.from(
        { length: 4 },
        () => Math.floor(Math.random() * 4) + 1
    );

    return (
        <div className="App">
            <h1>Master Mind</h1>
            <Layout correctAnswer={correctAnswer} />
        </div>
    );
}

export default App;
