import React from 'react';
import {
    ChakraProvider,
    theme,
    Center
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import { Logo } from './Logo';
import GameCard from './components/GameCard';
import CreateNewGameCard from './components/CreateNewGameCard';
// TODOs:
// - Create the main game card:
//      - Shows a graph and table of scores


function App() {
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
