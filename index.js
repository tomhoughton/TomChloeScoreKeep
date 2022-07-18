const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const { v4: uuidv4 } = require('uuid');
const { MONGODB, PORT } = require('./config');

const app = express(); // Create the base express app.
const PORT = 5000; // The port for the server.

// App uses:
app.use(bodyParser.json()); // We use body parser to parse the json data to the server.

// Schemas:
const playerSchema = new mongoose.Schema({
    Id: String,
    name: String 
});

const gameMemberSchema = new mongoose.Schema({
    playerId: String,
    scores: [Number] 
});

const gameSchema = new mongoose.Schema({
    name: String,
    players: [{playerId: String, playerName: String, scores: [Number]}]
});

// Models:
const Player = mongoose.model('Players', playerSchema);
const GameMember = mongoose.model('GameMember', gameMemberSchema)
const Game = mongoose.model('Games', gameSchema);

const createNewPlayer = (name) => {
    const newPlayer = new Player({
        Id: uuidv4(),
        name: name
    });
    newPlayer.save().then(() => console.log('New Entry Added'));
}

const createNewGame = (players, name) => {
    const newGame = new Game({
        Name: name,
    });
} 

// Functions:
const retreiveGame = (id, callback) => {
    Game.findById(id, (err, found) => {
        if (!err) {
            callback(null, found);
        } else if (err) {
            callback(err, null);
        }
    });
}

// Routes:
// TODO: Possible get game to ID, or player to ID Api Routes.
// This will be for the default page:
app.get('/', (req, res) => {
    res.send('Hello');
});

app.get('/api/get-games', (req, res) => {
    console.log('Get Games');
    var games = Game.find({}, (err, found) => {
        if (!err) {
            let data = { data: found}
            //res.send(JSON.stringify( data  ));
            res.json({data: found}); 
        } else if (err) {
            res.send(err);
        }
    });
});

app.get('/api/get-players', (req,res) => {
    var hello = Player.find({}, (err, found) => {
        if (!err) {
            res.send(found);
        } else if (err) {
            res.send(err);
        }f/-['']
    });
});

app.post('/api/add-score', (req, res) => {
    // Get the request input:
    const input = req.body;
    const gameName = input.gameName;
    const playerId = input.playerId;
    const score = input.score;

    // So what do we do in this add score function ? 
    // We get the game data:

    console.log('Request Received');
    
    console.log(input);
    

    // const updated = {
    //     name: "MarioKart",
    //     players: [
    //         {playerId: "5adf75ae-c982-41e8-b989-b9f0f5fad145", playerName: "Chloe", scores: [0, 25, 12, 34, 12, 54, 68, 48]},
    //         {playerId: "6baff9a8-61b2-4769-b095-ec48222ec1e1", playerName: "Thomas", scores: [0, 30, 54, 64, 45, 54, 12, 11]}
    //     ]
    // }

    // Game.updateOne({ name: 'Cards'}, { players: [
    //     {playerId: "5adf75ae-c982-41e8-b989-b9f0f5fad145", playerName: "Chloe", scores: [58, 120, 134, 136, 200, 212, 234, 270]},
    //     {playerId: "6baff9a8-61b2-4769-b095-ec48222ec1e1", playerName: "Thomas", scores: [30, 30, 54, 64, 123, 132, 142, 151]},
    //     {playerId: "0264ff5f-a258-4b5e-b3f4-2de917aa497f", playerName: "Robert", scores: [54, 121, 138, 146, 152, 168, 210, 220]},
    //     {playerId: "0672dbe0-0309-48ab-bcb7-87c46ce6a46b", playerName: "Jill", scores: [64, 72, 140, 153, 184, 214, 225, 275]},
    //     {playerId: "10f9b8dc-66b1-4662-8820-0883f2b2ff6f", playerName: "Matt", scores: [80, 92, 142, 164, 182, 192, 245, 265]}
    // ]}, null, () => {
    //     console.log('Done');
    // });

    res.send('response');
});

app.post('/api/create-game', (req, res) => {
    const input = req.body; // Get the body input of the request.
    const players = input.players; // Get the player IDs.
    const gameName = input.name; // Get the game name.
    var uploadPlayers = []; // Store the players data that we need to upload.

    players.forEach(player => {
        uploadPlayers.push({
            playerId: player.playerId, playerName: player.playerName, scores: [0]
        });
    });

    const newGame = new Game({
        name: gameName,
        players: uploadPlayers
    });

    // Save the new entry.
    newGame.save().then(() => console.log('New Game Entry Added'));

    res.send('Response');
});

app.post('/api/add-player', (req, res) => {
    var player = req.body; // Get the request body.

    // Create a new player:
    createNewPlayer(player.name); // Create the new player.
    res.send('Response'); // Confirm the response.
});

// Start the express server:
app.listen(PORT, () => console.log(`Server is running on port: ${PORT}`));

// Connect to MongoDB:
mongoose.connect(MONGODB, {useNewUrlParser: true})
    .then(() => {
        console.log('MongoDB Successful');
    });

// Now we must try and add a new player:
// createNewPlayer('Name');

/* 

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
*/
