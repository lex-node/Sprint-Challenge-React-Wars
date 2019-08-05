import React, {useState, useEffect} from 'react';
import './App.css';
import styled from 'styled-components';
import StarWarsCharactersList from './components/StarWarsCharacters';

const App = () => {

    const App = styled.div`
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
`;
    return (
        <App>
            <h1 className="Header">React Wars</h1>
            <StarWarsCharactersList/>
        </App>
    );
}

export default App;
