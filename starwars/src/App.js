import React, {useState, useEffect} from 'react';
import './App.css';
import axios from "axios";
import styled from 'styled-components';

const App = () => {
    // Try to think through what state you'll need for this app before starting. Then build out
    // the state properties here.

    // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a
    // side effect in a component, you want to think about which state and/or props it should
    // sync up with, if any.

    const [characters, setCharacters] = useState([]);

    useEffect(() => {
        axios
            .get("https://swapi.co/api/people/")
            .then(people => {
                setCharacters(people.data.results);
                console.log(people);
            })

            .catch(err => console.log(err));
    }, []);

    const Card = styled.div`
      display: flex;
      flex-direction: column;
      background-color: black;
      color: #FFE81F;
      justify-content: center;
      align-items: center;
      border-style: solid;
      border-color: black;
      margin: 5px;
      padding: 5px;
      width: 90%;
     
`;

    const CardContainer = styled.div`
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
`;


    const App = styled.div`
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
`;
    return (
        <App>
            <h1 className="Header">React Wars</h1>
            <CardContainer>
                {characters.map(character => {
                    return (
                        <Card key={character.name}>

                            <h2>{character.name}</h2>
                            <p>
                                {character.name} was born {character.birth_year}, has {character.eye_color} eyes and
                                is {character.gender}
                            </p>

                        </Card>
                    )
                })}
            </CardContainer>
        </App>
    );
}

export default App;
