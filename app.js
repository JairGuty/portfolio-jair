const express = require('express');
const app = express();
const port = 5000;

// Servir contenido estatico
app.use(express.static('public'));


app.get('/contact', (req, res) => {
    res.send('contacto');
});

app.get('*', (req, res) => {
    res.sendFile(__dirname + '/public/404.html')
});

app.listen(port, () => {
    console.log(`Server runnin in port ${port}`)
})