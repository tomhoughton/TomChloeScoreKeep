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

    // Re format data for the charts:
    var playerCartData = createChartData(props.players); 

    // Get the table data:
    var tableData = createTableData(playerCartData);
    console.log('Table Data');
    console.log(tableData);

    return (
        <Box style={{margin: '10px', padding: '10px'}}maxW='30rem' minW='15rem' borderWidth='1px' borderRadius='lg'>
            <Heading>{props.header}</Heading>
            <VictoryChart>
                {
                    playerCartData.map((data) => {
                        return (
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
                                    data={data.scores}
                                />
                            </VictoryGroup>
                        )
                    })
                }
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