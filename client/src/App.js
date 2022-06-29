import React, { useEffect, useState, setState } from 'react';
import {
    ChakraProvider,
    theme,
    Center
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import { Logo } from './Logo';
import GameCard from './components/GameCard';
import CreateNewGameCard from './components/CreateNewGameCard';

function App() {

    const [ state, setState ] = useState([]);

    useEffect(() => {
        fetch("/api/get-games")
            .then(res => res.json())
            .then(data => setState(data.data));
    }, []);

    return (
        <ChakraProvider theme={theme}>
            {
                state.map((data) => {
                    return (
                        <Center>
                            <GameCard header={data.name} players={data.players}/>
                        </Center>
                    )
                })
            }
            <Center>
                <CreateNewGameCard />
            </Center>
        </ChakraProvider>
    );
}

export default App;
