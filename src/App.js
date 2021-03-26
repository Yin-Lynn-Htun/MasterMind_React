import './App.css';
import Layout from './container/layout';

function App() {
    const correctAnswer = Array.from(
        { length: 4 },
        () => Math.floor(Math.random() * 6) + 1
    );
    return (
        <div className="App">
            <Layout correctAnswer={correctAnswer} />
        </div>
    );
}

export default App;
