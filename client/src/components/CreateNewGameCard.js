import React from 'react';
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

export default function CreateNewGameCard() {
    return (
        <Box style={{margin: '10px', padding: '10px'}} maxW='30rem' minW='10rem' borderWidth='1px' borderRadius='lg'>
            <Heading>Create New Game</Heading>
            <FormControl>
                {/* <FormLabel>Game Title</FormLabel> */}
                <Input variant='filled' placeholder='Input Game Title' colorScheme='teal'/>
                <Table variant='simple'>
                    <Thead>
                        <Tr>
                            <Th>Players</Th>
                            <Th>Active</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        <Tr>
                            <Td>Thomas</Td>
                            <Td>
                                <Switch colorScheme='teal' size='lg' />
                            </Td>
                        </Tr>
                        <Tr>
                            <Td>Chloe</Td>
                            <Td>
                                <Switch colorScheme='teal' size='lg' />
                            </Td>
                        </Tr>
                        <Tr>
                            <Td>Matthew</Td>
                            <Td>
                                <Switch colorScheme='teal' size='lg' />
                            </Td>
                        </Tr>
                    </Tbody>
                </Table>
            </FormControl>
            <Button colorScheme='teal' variant='ghost'>Add Game</Button>
        </Box>
    );
}