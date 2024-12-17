// Create web server
// Create a new express app
const express = require('express');
const app = express();

// Add middleware to parse JSON content
app.use(express.json());

// Define a variable to store the comments
const comments = [
    { id: 1, author: 'John', content: 'Hello!' },
    { id: 2, author: 'Doe', content: 'Hi!' },
    { id: 3, author: 'Smith', content: 'Hey!' }
];

// Define a route to get all comments
app.get('/comments', (req, res) => {
    res.status(200).json(comments);
});

// Define a route to get a single comment
app.get('/comments/:id', (req, res) => {
    const comment = comments.find(c => c.id === parseInt(req.params.id));
    if (!comment) return res.status(404).send('The comment with the given ID was not found');
    res.status(200).json(comment);
});

// Define a route to create a new comment
app.post('/comments', (req, res) => {
    if (!req.body.author || !req.body.content) return res.status(400).send('Bad request');
    const comment = {
        id: comments.length + 1,