const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(express.static('public')); // Serve static files from the public directory

const games = [
    { title: 'Diamond Quest', description: 'An adventure game where you collect diamonds.', price: 19.99 },
    { title: 'Gem Collector', description: 'A puzzle game about collecting gems.', price: 9.99 },
    { title: 'Diamond Tycoon', description: 'Build your diamond empire!', price: 29.99 },
];

app.get('/api/games', (req, res) => {
    res.json(games);
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});