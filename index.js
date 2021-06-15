const express = require('express')

const app = express()

app.listen(3000, () => {
    console.log('Server listening on port 3000');
});

app.get('/', (req, res) => {
    res.json({
        message: "Users Shown!!"
    })
});

app.get('/delete', (req, res) => {
    res.json({
        message: "Users Deleted!!"
    }) 	
});

app.get('/update', (req, res) => {
    res.json({
        message: "User Updated!!"
    })
})

app.get('/insert', (req, res) => {
    res.json({
        message: "User Inserted!!"
    })
})