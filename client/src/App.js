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
        fetch("/api/get-games").then(
            
        );
    }, []);

    return (
        <ChakraProvider theme={theme}>
            <Center>
                <GameCard />
            </Center>
            <Center>
                <GameCard />
            </Center>
            <Center>
                <GameCard />
            </Center>
            <Center>
                <GameCard />
            </Center>
            <Center>
                <CreateNewGameCard />
            </Center>
        </ChakraProvider>
    );
}

export default App;
