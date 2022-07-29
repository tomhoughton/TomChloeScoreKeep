import React, { useEffect, useState } from 'react';
import {
    Box,
    Heading,
    Button,
    Table,
    Tr,
    Th,
    Td,
    Thead,
    Tbody,
    FormControl, 
    Input,
    Switch
} from '@chakra-ui/react';

// Need to add the ability to read the players within the thingy.

export default function CreateNewGameCard() {

    // Store the players:
    const [ players, setPlayers ] = useState([]);
    const [ gamePlayers, setGamePlayers ] = useState({});
    const [ gameTitle, setGameTitle ] = useState('');

    useEffect(() => {
        fetch("/api/get-players")
            .then(res => res.json())
            .then(data => {
                console.log('Players');
                console.log(data[0]);
                setPlayers(data);
            });
    }, []);

    const switchChange = (event, id) => {
        // We need to get the previous (current) state:
        var previousState = gamePlayers;

        // Now set the id (key) and value (switch bool):
        previousState[id] = event.target.checked;

        setGamePlayers(previousState);

        console.log('New State');
        console.log(gamePlayers); 
    }

    const gameTitleChange = (event, id) => {
        setGameTitle(event.target.value);
        console.log('New Title');
        console.log(gameTitle);
    }

    const addGameClick = () => {
        let rtnPlayers = [];
        players.forEach((player) => {
            if (gamePlayers[player.Id] == true) {
                rtnPlayers.push({
                    playerId: player.Id,
                    playerName: player.name,
                    scores: [0]
                });
            }
        });

        let data = {
            name: gameTitle,
            players: rtnPlayers
        }

        // Push the data:
        fetch('api/create-game', {
            headers: {'Content-Type': 'application/json'},
            method: 'POST',
            body: JSON.stringify({
                data
            })
        }).then(() => {
            console.log('Sent');
        });
    }

    return (
        <Box style={{margin: '10px', padding: '10px'}} maxW='30rem' minW='10rem' borderWidth='1px' borderRadius='lg'>
            <Heading>Create New Game</Heading> 
            <FormControl>
                {/* <FormLabel>Game Title</FormLabel> */}
                <Input variant='filled' placeholder='Input Game Title' colorScheme='teal' onChange={(event) => { gameTitleChange(event)}}/>
                <Table variant='simple'>
                    <Thead>
                        <Tr>
                            <Th>Players</Th>
                            <Th>Active</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {
                            players.map((player) => {
                                return (
                                    <Tr>
                                        <Td>{player.name}</Td>
                                        <Td>
                                            <Switch colorScheme='teal' size='lg' onChange={(event) => {switchChange(event, player.Id)}}/>
                                        </Td>
                                    </Tr>
                                )
                            })
                        }
                    </Tbody>
                </Table>
            </FormControl>
            <Button colorScheme='teal' variant='ghost' onClick={() => {addGameClick()}}>Add Game</Button>
        </Box>
    );
}
