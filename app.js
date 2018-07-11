
const express = require('express'),
    bodyParser = require('body-parser');

const app = express();

const PORT = process.env.PORT || 3000;




app.listen(PORT, function(){
    console.log("Node is running on port",PORT);
});