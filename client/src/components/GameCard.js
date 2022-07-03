import React, { useState } from 'react';
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
    PopoverBody,
    PopoverArrow,
    PopoverCloseButton,
    Input
} from '@chakra-ui/react';
import AddScores from './AddScores';

const chartColors = [
    '#F27777',
    '#30BFB1',
    '#E6C949',
    '#87EB81',
    '#B49ACC'
];

// We need to sort the data:
const createChartData = (players) => {
    var playerData = [];

    players.forEach(player => {

        let playerName = player.playerName;

        // console.log(`Player: ${player.playerName}`)
        var scores = [];
        player.scores.forEach((score, i) => {
            scores.push({x: i, y: score})
        });
        
        playerData.push({ name: playerName, scores: scores });
    }); 

    return playerData;
}

const createTableData = (chartData) => {
    var tableData = [];

    chartData.forEach(player => {
        
        var totalScore = 0;
        player.scores.forEach(score => {
            totalScore += score.y;
        });
        
        tableData.push({ name: player.name, total: totalScore })
    });

    return tableData;
}

export default function GameCard(props) {

    const [newScores, setScore] = useState([]);
    
    // Re format data for the charts:
    var playerCartData = createChartData(props.players); 

    // Get the table data:
    var tableData = createTableData(playerCartData);
    console.log('Table Data');
    console.log(tableData);

    console.log('PlayerData');
    console.log(props.players);

    // Add Scores function:
    const addScoresButtonClick = () => {
        
        // Wait we acc need to render the players into the placeholder thingy:

        // We need to do a check to see if the fields have been entered:.

    }

    return (
        <Box style={{margin: '10px', padding: '10px'}}maxW='30rem' minW='15rem' borderWidth='1px' borderRadius='lg'>
            <Heading>{props.header}</Heading>
            <VictoryChart>
                {
                    playerCartData.map((data, i) => {
                        return (
                            <VictoryGroup>
                                <VictoryLine
                                    interpolation="natural"
                                    animate={{
                                        duration: 2000,
                                        onLoad: { duration: 1000 }
                                    }}
                                    style={{
                                    data: { stroke: chartColors[i], strokeWidth:  5, opacity: 0.8},
                                    parent: { border: "1px solid #ccc"}
                                    }}
                                    data={data.scores}
                                />
                            </VictoryGroup>
                        )
                    })
                }
            </VictoryChart>
                <Center>
                    <HStack>
                        {
                            playerCartData.map((data, i) => {
                                return <Tag backgroundColor={chartColors[i]}>{data.name}</Tag>
                            })
                        }
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
                        {
                            tableData.map((data) => {
                                return (
                                    <Tr>
                                        <Td>{data.name}</Td>
                                        <Td>{data.total}</Td>
                                    </Tr>
                                )
                            })
                        }
                    </Tbody>
                </Table>
            </TableContainer>
            <Popover>
                <PopoverTrigger>
                    <Button colorScheme='teal' variant='ghost' onClick={addScoresButtonClick}>Add Scores</Button>
                </PopoverTrigger>
                <Portal>
                    <PopoverContent>
                        <PopoverArrow />
                        <PopoverHeader>Add Scores</PopoverHeader>
                        <PopoverCloseButton />
                        <PopoverBody>
                            <div>
                                <TableContainer>
                                    <Table variant='simple'>
                                        <Thead>
                                            <Tr>
                                                <Th>Players</Th>
                                                <Th>New Scores</Th>
                                            </Tr>
                                        </Thead>
                                        <Tbody>
                                            {
                                                props.players.map((player) => {
                                                    return (<Tr>
                                                        <Td>{player.playerName}</Td>
                                                        <Td><Input variant='filled' placeholder='New Scores' /> </Td>
                                                    </Tr>)
                                                })
                                            }
                                        </Tbody>
                                    </Table>
                                </TableContainer>
                                <HStack>
                                    <Button colorScheme='teal' variant='ghost' onClick={addScoresButtonClick}>Add Scores</Button>
                                    <Button colorScheme='red' variant='ghost'>Cancel</Button>
                                </HStack>
                            </div>
                        </PopoverBody>
                    </PopoverContent>
                </Portal>
            </Popover>

        </Box>
    );
}