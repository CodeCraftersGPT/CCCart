const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

// In-memory array to store users
let users = [
    { id: 1, name: 'John Doe', email: 'john@example.com', phone: '1234567890', password: '$A123456'},
    { id: 2, name: 'Jane Doe', email: 'jane@example.com', phone: '0987654321',password: '$B123456'}
];

// Get all users
app.get('/users', (req, res) => {
    res.json(users);
});

// Get a single user by id
app.get('/users/:name', (req, res) => {
    const user = users.find(u => u.name === parseInt(req.params.name));
    if (!user) return res.status(404).send('User not found.');
    res.json(user);
});

// Create a new user
app.post('/users', (req, res) => {
    const { name, email, phone,password } = req.body;
    const user = {
        id: users.length + 1,
        name,
        email,
        phone,
        password
    };
    users.push(user);
    res.status(201).send(user);
});

// Update a user
app.put('/users/:name', (req, res) => {
    const user = users.find(u => u.name === parseInt(req.params.name));
    if (!user) return res.status(404).send('User not found.');

    const { name, email, phone } = req.body;
    user.name = name;
    user.email = email;
    user.phone = phone;
    user.password = password;
    res.send(user);
});

// Delete a user
app.delete('/users/:name', (req, res) => {
    users = users.filter(u => u.name !== parseInt(req.params.name));
    res.status(204).send();
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
