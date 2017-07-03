const app = require('express')()

app.get('/', (req, res) => res.sendFile(__dirname + '/index.html'))

app.get('/ToDo.jsx', (req, res) => res.sendFile(__dirname + '/components/ToDo.jsx'))

app.get('/ToDoList.jsx', (req, res) => res.sendFile(__dirname + '/components/ToDoList.jsx'))

app.get('/app.js', (req, res) => res.sendFile(__dirname + '/app.js'))

app.listen(3000)
