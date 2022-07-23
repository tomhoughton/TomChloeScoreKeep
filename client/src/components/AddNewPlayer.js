import React, { useState } from 'react';
import {
    Box,
    Heading,
    Center,
    Button,
    Table,
    TableContainer,
    Tr,
    Th,
    Td,
    Thead,
    Tbody,
    FormControl, 
    Input,
    Switch
} from '@chakra-ui/react';

export default function AddNewPlayer() {

    const [newPlayer, setPlayer] = useState('');
    const [newR, setR] = useState(0);
    
    const handleChange = (event) => {
        console.log('change');
        setPlayer(event.target.value);
    } 

    const buttonClick = () => {

        // Push the players copy to the server.
        fetch('/api/add-player', {
            headers: {'Content-Type': 'application/json'},
            method: 'POST',
            body: JSON.stringify({
                player: newPlayer
            })
        }).then(() => {
            setR(newR + 1); 
        });

    }

    return (
        <Box style={{margin: '10px', padding: '10px'}} maxW='30rem' minW='10rem' borderWidth='1px' borderRadius='lg'>
            <Heading>Add New Player</Heading>
            <FormControl>
                <Input variant='filled' placeholder='Player name' colorScheme='teal' onChange={ (event) => { handleChange(event) }}/>
            </FormControl>
            <Button colorScheme='teal' variant='ghost' onClick={() => { buttonClick() } }>Add Player</Button>
        </Box>
    )
}