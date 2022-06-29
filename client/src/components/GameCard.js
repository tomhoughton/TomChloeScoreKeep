import React from 'react';
import { VictoryChart, VictoryGroup, VictoryLine } from 'victory'; 
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
    HStack,
    Tag,
    Center,
    Popover,
    PopoverTrigger,
    Portal,
    PopoverContent,
    PopoverHeader,
    PopoverFooter,
    PopoverBody,
    PopoverArrow,
    PopoverCloseButton
} from '@chakra-ui/react';
import AddScores from './AddScores';

export default function GameCard() {
    return (
        <Box style={{margin: '10px', padding: '10px'}}maxW='30rem' minW='15rem' borderWidth='1px' borderRadius='lg'>
            <Heading>Game Card</Heading>
            <VictoryChart>
                <VictoryGroup>
                    <VictoryLine
                        interpolation="natural"
                        animate={{
                            duration: 2000,
                            onLoad: { duration: 1000 }
                        }}
                        style={{
                        data: { stroke: "#c43a31" },
                        parent: { border: "1px solid #ccc"}
                        }}
                        data={[
                        { x: 1, y: 2 },
                        { x: 2, y: 3 },
                        { x: 3, y: 5 },
                        { x: 4, y: 4 },
                        { x: 5, y: 7 }
                        ]}
                    />
                </VictoryGroup>
                <VictoryGroup>
                    <VictoryLine
                        interpolation="natural"
                        animate={{
                            duration: 2000,
                            onLoad: { duration: 1000 }
                        }}
                    
                        style={{
                        data: { stroke: "#00ff00" },
                        parent: { border: "1px solid #ccc"}
                        }}
                        data={[
                        { x: 1, y: 8 },
                        { x: 2, y: 4 },
                        { x: 3, y: 5 },
                        { x: 4, y: 9 },
                        { x: 5, y: 10 }
                        ]}
                    />
                </VictoryGroup>
            </VictoryChart>
                <Center>
                    <HStack>
                            <Tag backgroundColor='#ff0000'>
                                Tom
                            </Tag>
                            <Tag backgroundColor='#ff0000'>
                                Tom
                            </Tag>
                    </HStack>
                </Center>
            <TableContainer>
                <Table variant='simple'>
                    <Thead>
                        <Tr>
                            <Th>Players</Th>
                            <Th>Scores</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        <Tr>
                            <Td>Thomas</Td>
                            <Td>56</Td>
                        </Tr>
                        <Tr>
                            <Td>Chloe</Td>
                            <Td>98</Td>
                        </Tr>
                        <Tr>
                            <Td>Matthew</Td>
                            <Td>1</Td>
                        </Tr>
                    </Tbody>
                </Table>
            </TableContainer>


            <Popover>
                <PopoverTrigger>
                    <Button colorScheme='teal' variant='ghost'>Add Scores</Button>
                </PopoverTrigger>
                <Portal>
                    <PopoverContent>
                        <PopoverArrow />
                        <PopoverHeader>Add Scores</PopoverHeader>
                        <PopoverCloseButton />
                        <PopoverBody>
                            <AddScores />
                        </PopoverBody>
                    </PopoverContent>
                </Portal>
            </Popover>

        </Box>
    );
}