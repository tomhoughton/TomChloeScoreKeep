const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const { v4: uuidv4 } = require('uuid');
const { MONGODB, PORT } = require('./config');

const app = express(); // Create the base express app.

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
    var games = Game.find({}, (err, found) => {
        if (!err) {
            res.send(found);
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
        }
    });
});

app.post('/api/add-score', (req, res) => {
    // Get the request input:
    const input = req.body;
    const gameName = input.gameName;
    const playerId = input.playerId;
    const score = input.score;

    const updated = {
        name: "MarioKart",
        players: [
            {playerId: "5adf75ae-c982-41e8-b989-b9f0f5fad145", playerName: "Chloe", scores: [0, 1, 2, 3]},
            {playerId: "6baff9a8-61b2-4769-b095-ec48222ec1e1", playerName: "Thomas", scores: [0, 2, 3, 4]}
        ]
    }

    Game.updateOne({ name: 'MarioKart'}, { players: [
        {playerId: "5adf75ae-c982-41e8-b989-b9f0f5fad145", playerName: "Chloe", scores: [0, 1, 2, 3]},
        {playerId: "6baff9a8-61b2-4769-b095-ec48222ec1e1", playerName: "Thomas", scores: [0, 2, 3, 4]}
    ]}, null, () => {
        console.log('Done');
    });

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