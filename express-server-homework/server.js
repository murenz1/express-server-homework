const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

app.get('/' ,(req, res) => {
    res.send('Hello, world! Welcome to my Express Server.');
});


app.listen(PORT, () =>{
    console.log('sever is running on http://localhost: ${PORT}');
});
