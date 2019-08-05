/*
import React, {useState, useEffect} from 'react';
import axios from "axios";


const StarWarsCharactersList = () => {
    const [starWarsCharacters, setStarWarsCharacters] = useState("");

    useEffect(() => {
        axios
            .get("https://swapi.co/api/people")
            .then(people => {
                setStarWarsCharacters(people.data.results);
                console.log(people.data.results);
            })

            .catch(err => console.log(err));
    }, []);

    console.log(starWarsCharacters);


   /!* starWarsCharacters.map(character => {
        return <li>{character}</li>
    })*!/
}

export default StarWarsCharactersList;
*/
