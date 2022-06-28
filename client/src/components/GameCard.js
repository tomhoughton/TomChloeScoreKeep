import { Card, Text, Button, Row, Col } from '@nextui-org/react';
import { VictoryChart, VictoryGroup, VictoryLine } from 'victory'; 

export default function GameCard(props) {
    return (
        <Card className='Card'>
            <Card.Header>
                <Text b>{props.title}</Text> 
            </Card.Header>
            <Card.Body>
                <Row>
                    <Col><Text>Tom</Text></Col>
                    <Col><Text>Chloe</Text></Col>
                    <Col><Text>Matthew</Text></Col>
                </Row>
                <VictoryChart>
                    <VictoryGroup>
                        <VictoryLine
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
            </Card.Body>
            <Card.Footer>
                <Button>Add Scores</Button>
            </Card.Footer>
        </Card>
    );
}