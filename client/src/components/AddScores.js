import React from 'react';
import {
    Box,
    Heading,
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
    return (
        <Box style={{margin: '10px', padding: '10px'}}maxW='30rem' minW='15rem' borderWidth='1px' borderRadius='lg'>
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
                            <Td><Input variant='filled' placeholder='New Score' /></Td>
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
                <Button colorScheme='teal' variant='ghost'>Add Scores</Button>
                <Button colorScheme='red' variant='ghost'>Cancel</Button>
            </HStack>
        </Box>
    )
}