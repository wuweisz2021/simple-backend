const express = require('express');
const bodyParser= require('body-parser');
const cors= require("cors"); //cross-orignresource sharing
const app = express();
const port = 3001; // Must be different than the port of the React app
app.use(cors());  // https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS
app.use(express.json()); // Allows express to read a request body
// Configuring body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/users', async (req, res) => {
    const users = await userModel.find();
    res.send(users);
    });

app.listen(port, () => console.log(`Hello world app listening on port ${port}!`))