const express = require('express');
const app = express();

app.get('/', (req, res, next) => {
	res.send('Hola mundo!');
});

app.get('/query', (req, res, next) => { res.send(req.query.id)});

app.get('/:id', (req, res, next) => { res.send(req.params.id)});

app.listen(1000, () => console.log('Runing on port 1000'));