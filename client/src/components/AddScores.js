import React, { useState } from 'react';
import {
    TableContainer,
    Table,
    Tr,
    Th,
    Td,
    Thead,
    Tbody,
    Button,
    Input,
    HStack
} from '@chakra-ui/react';

export default function AddScores() {

    const [value, setValue] = React.useState('');

    const handleChange = (event) => {
        setValue(event.target.value)
    };

    const addScore = () => {
        console.log(`Value: ${value}`);
    }

    return (
        <div>
            <TableContainer>
                <Table variant='simple'>
                    <Thead>
                        <Tr>
                            <Th>Players</Th>
                            <Th>New Score</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        <Tr>
                            <Td>Thomas</Td>
                            <Td><Input variant='filled' placeholder='New Score' onChange={handleChange}/></Td>
                        </Tr>
                        <Tr>
                            <Td>Chloe</Td>
                            <Td><Input variant='filled' placeholder='New Score' /></Td>
                        </Tr>
                        <Tr>
                            <Td>Matthew</Td>
                            <Td><Input variant='filled' placeholder='New Score' /></Td>
                        </Tr>
                    </Tbody>
                </Table>
            </TableContainer>
            <HStack>
                <Button colorScheme='teal' variant='ghost' onClick={addScore}>Add Scores</Button>
                <Button colorScheme='red' variant='ghost'>Cancel</Button>
            </HStack>
        </ div>
    )
}