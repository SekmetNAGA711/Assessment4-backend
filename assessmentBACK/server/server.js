const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json());

const { getCompliment, addTask, getTasks, deleteItem, updateItem, findYourFortune } = require('./controller')

app.get("/api/compliment", getCompliment);

app.post('/api/tasks', addTask )
app.get('/api/tasks', getTasks )
app.delete('/api/tasks/:id', deleteItem)
app.put('/api/tasks/:id', updateItem)
app.get('/api/fortune',findYourFortune)

app.listen(4000, () => console.log("Server running on 4000"));
