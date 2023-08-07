const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json());



const {getCompliment,getRecords, createRecord, findYourFortune } = require('./controller')

app.get("/api/compliment", getCompliment);
app.get('/api/records', getRecords)
app.post('/api/records', createRecord)
app.get('/api/fortune',findYourFortune)

app.listen(4000, () => console.log("Server running on 4000"));
