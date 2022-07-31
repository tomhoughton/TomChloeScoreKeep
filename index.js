const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');
const { v4: uuidv4 } = require('uuid');

const app = express(); // Create the base express app.
const PORT = 5000; // The port for the server.
const MONGODB = null;

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

// Routes:
// TODO: Possible get game to ID, or player to ID Api Routes.
// This will be for the default page:
app.use(express.static(path.join(__dirname, '../build')))
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/build/index.html'));
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
        }
    });
});

app.post('/api/add-score', (req, res) => {
    // Get the request input:
    const input = req.body;

    // Get the keys array:
    let gameName = input.gameName;

    // This is the object to update the document:
    let update = {
        players: input.data
    } 

    // Update the scores:
    Game.updateOne({name: gameName}, { 
        players: update.players
    }, null, () => {
        console.log('Done');
    });

    // Send a confirmation response:
    res.send('response');
});

app.post('/api/create-game', (req, res) => {
    const input = req.body.data; // Get the body input of the request.
    const players = input.players; // Get the player IDs.
    const gameName = input.name; // Get the game name.
    var uploadPlayers = []; // Store the players data that we need to upload.


    console.log(input);

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
    createNewPlayer(player.player); // Create the new player.
    res.send('Response'); // Confirm the response.
});

// Start the express server:
app.listen(process.env.PORT, () => console.log(`Server is running on port: ${PORT} mongo: ${process.env.MONGODB} hello world: ${process.env.HelloWorld}`));

// Connect to MongoDB:
mongoose.connect(process.env.MONGODB_URI, {useNewUrlParser: true})
    .then(() => {
        console.log('MongoDB Successful');
    });
