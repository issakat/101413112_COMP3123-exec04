const express = require('express');
const app = express();
const port = 3000;

// GET /hello, Returns "Hello Express JS" as plain text.
app.get('/hello', (req, res) => {
    res.send('Hello Express JS');
});

// GET /user, Returns firstname and lastname from query params
app.get('/user', (req, res) => {
    const firstname = req.query.firstname || 'Kate';
    const lastname = req.query.lastname || 'Labis';
    res.json({ firstname, lastname });
})

app.post('/user/:firstname/:lastname', (req, res) => {
    const { firstname, lastname } = req.params;
    res.json({ firstname, lastname });
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});