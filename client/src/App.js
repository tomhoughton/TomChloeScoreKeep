import logo from './logo.svg';
import { useEffect, useState } from 'react';
import { NextUIProvider, Button, Container, Grid, Row, Col, Spacer, Text } from '@nextui-org/react';
import GameCard from './components/GameCard'
import './App.css';
import Title from './components/MainTitle';

function App() {

    const [ state, setState ] = useState([]);

    useEffect(() => {
        fetch("/api/get-games").then(
            res =>  {
                if (res.ok) {
                    res.json().then(json => {
                        setState(json.data);
                    })
                } else {
                    console.log('Error');
                }
            }
        );
    }, []);

    return (
        <NextUIProvider>
                <div className='MainTitle'>
                    <Text
                        h1
                        size={60}
                        css={{
                        textGradient: "45deg, $blue600 -20%, $pink600 50%",
                        }}
                        weight="bold"
                    >
                        Game 
                    </Text>
                    <Spacer />
                    <Text
                        h1
                        size={60}
                        css={{
                        textGradient: "45deg, $purple600 -20%, $pink600 100%",
                        
                        }}
                        weight="bold"
                    >
                        Scores
                    </Text>
                </div>
            <Container>
                <Title />
                {state.map((data) => { return <GameCard title={data.name} /> })}
            </Container>
        </NextUIProvider>
    );
}

export default App;
