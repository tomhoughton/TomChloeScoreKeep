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

export default function AddNewPlayer() {
    return (
        <Box style={{margin: '10px', padding: '10px'}} maxW='30rem' minW='10rem' borderWidth='1px' borderRadius='lg'>
            <Heading>Add New Player</Heading>
            <FormControl>
                <Input variant='filled' placeholder='Player name' colorScheme='teal'/>
            </FormControl>
            <Button colorScheme='teal' variant='ghost'>Add Player</Button>
        </Box>
    )
}