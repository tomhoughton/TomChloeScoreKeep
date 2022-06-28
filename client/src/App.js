import logo from './logo.svg';
import { useEffect, useState } from 'react';
import './App.css';

function App() {

    const [ state, setState ] = useState([]);

    useEffect(() => {
        fetch("/api/get-games").then(
            res =>  {
                if (res.ok) {
                    res.json().then(json => {
                        setState(json.data);
                    })
                } else {
                    console.log('Error');
                }
            }
        );
    }, []);

    return (
    <div className="App">
        <header className="App-header">
        { console.log(state[1]) }
        </header>
    </div>
    );
}

export default App;
