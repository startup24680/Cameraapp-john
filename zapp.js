const express = require('express');
const app = express();


app.use(express.static('public'))



app.listen(8012, (req, res) => {
    console.log('server start...');
})  