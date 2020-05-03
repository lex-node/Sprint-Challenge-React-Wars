import React from 'react';
import {Card, CardText, CardBody, CardTitle, CardSubtitle} from 'reactstrap';

const Character = (props) => {
    return (
        <div>
            {
                props.characters.map((character) =>
                    <Card style={{margin: `60px`, backgroundColor: `rgb(152, 152, 152, 0.7)`}}>
                        <CardBody style={{borderStyle: `solid`, padding: `5px`}}>
                            <CardTitle><h2>{character.name}</h2></CardTitle>
                            <CardSubtitle><h3>{character.birth_year}, {character.gender}</h3></CardSubtitle>
                            <CardText style={{textAlign: `justify`}}>Lucas ipsum dolor sit amet kohl frozarns joruus vel
                                ord
                                antonio himoran olié darpa noa. Aqualish cordé givin ansion. Verpine irek shistavanen
                                carondian mustafar antilles castell porkins besalisk. Falleen utapaun isolder joh
                                balosar
                                bail farlander tagge. Thrackan fel annoo biggs. Zekk huk moore bothawui ansuroer owen.
                                Snivvian zeltron b4-d4 gand coruscant ventress organa chazrach pa'lowick. Mirta ponda
                                kuat
                                muunilinst spar klivian. Davin devaronian zabrak jabiimas sebulba grievous saurin.
                                Gordin
                                kashyyyk vima-da-boda quermian skywalker omwati darklighter.</CardText>
                        </CardBody>
                    </Card>
                )}
        </div>
    )
}

export default Character;
