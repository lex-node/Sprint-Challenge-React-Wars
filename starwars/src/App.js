import React, {useState, useEffect} from 'react';
import './App.css';
import axios from 'axios';
import Character from './components/Character';

const App = () => {

    const [characters, setCharacters] = useState([]);

    useEffect(() => {
        axios
            .get(`https://swapi.py4e.com/api/people/`)
            .then(response => {
                console.log(response.data.results);
                setCharacters(response.data.results);
            })
            .catch(error => {
                alert(error);
            })
    }, [])

    return (
        <div className='App'>
            <h1 className='Header'>Characters</h1>
            <Character characters={characters}/>
        </div>
    );
}

export default App;
