import React, {useState, useEffect} from 'react';
import axios from "axios";
import styled from 'styled-components';


const StarWarsCharactersList = () => {
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

    return (
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
    )
}

export default StarWarsCharactersList;
