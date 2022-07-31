import React, { useEffect, useState, setState } from 'react';
import {
    ChakraProvider,
    theme,
    Center
} from '@chakra-ui/react';
import GameCard from './components/GameCard';
import CreateNewGameCard from './components/CreateNewGameCard';
import AddNewPlayer from './components/AddNewPlayer';

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
                            <GameCard header={data.name} players={data.players} id={data['_id']}/>
                        </Center>
                    )
                })
            }
            <Center>
                <CreateNewGameCard />
            </Center>
            <Center>
                <AddNewPlayer />
            </Center>
        </ChakraProvider>
    );
}

export default App;
