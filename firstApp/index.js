const express = require("express");  // after installing express on the folder, requrie express
const app = express();               // now we have to run express

// app.use((req, res) => {
//     console.log("we got a new request")
//     res.send("<h1>This is a response to your request</h1>") // can't have a http request with more than one send
// })

app.get('/', (req, res) => {
    res.send("WELCOME TO THE HOMEPAGE")
})

app.get('/r/:subreddit', (req, res) => {                 //using the colon allows us to use whatever the user types as a variable
    const {subreddit} = req.params;                      // req returns that variable as a parameter, so we can destructure it and use it
    res.send(`<h1>Browsing the ${subreddit} subreddit page!</h1>`)
})

app.get('/cats', (req, res) => {
    res.send('MEOW')
})

app.get('/dogs', (req, res) => {
    res.send('WOOF!!')
})

app.get('/search', (req, res) => {
    const { q } = req.query;             // this will require the search string '/search?q=searchterm' in browswer
    if (!q) {
        res.send('NOTHING FOUND IF NOTHING SEARCHED');
    } else 
    res.send(`<h1>You are searching for ${q}</h1>`)
    
})

app.get('*', (req, res) => {                    // THIS HANDLES ERRORS BUT MUST BE PUT AFTER THE ONES WE DO WANT
    res.send(`I DO NOT KNOW THAT PATH`)
})

app.listen(3000, () => {
    console.log('listening on port 3000')
})