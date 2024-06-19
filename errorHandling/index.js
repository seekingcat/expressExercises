const express = require('express');
const app = express();
const morgan = require('morgan');

// morgan('tiny');
app.use(morgan('dev'))

app.use((req, res, next) => {
    req.requestTime = Date.now();
    next();
})

app.use('/dogs', (req, res, next) => {
    console.log('I LOVE DOGS');
    next();
})

const verifyPassword = (req, res, next) => {
    const {password} = req.query;
    if (password === 'chickennugget') {
        next();
    } else {
        // res.send('SORRY YOU NEED A PASSWORD')
        res.status(401);
        throw ('PASSWORD REQUIRED')
    }
}





// app.use((req, res, next) => {
    //     console.log('FIRST MIDDLEWARE!!!');
    //     return next();
    //     console.log('FIRST MIDDLEWARE AFTER CALLING NEXT!!!!')  // this will not print now that we have the return keyword
    // })
    // app.use((req, res, next) => {
        //     console.log('SECOND MIDDLEWARE!!!');
        //     return next();
        // })
        // app.use((req, res, next) => {
            //     console.log('THIRD MIDDLEWARE!!!');
            //     return next();
            // })
            
            app.get('/', (req, res) => {
                console.log(`REQUEST DATE: ${req.requestTime}`);
                res.send('HOMEPAGE')
            })
            
            app.get('/error', (req, res) => {
                chicken.fly();
            })
            
            app.get('/dogs', (req, res) => {
                console.log(`REQUEST DATE: ${req.requestTime}`);
                res.send('WOOF WOOF!!')
            })
            
            app.get('/secret', verifyPassword, (req, res) => {
                res.send('MY SECRET IS: I work in theatre but I do not like talking to people!')
            })
            
            app.use((req, res) => {
                res.status(404).send('NOT FOUND')
            })

            app.use((err, req, res, next) => {
                console.log("***********************************")
                console.log("*************ERROR ************")
                console.log("***********************************")
                next(err);
            })
            
            app.listen(3000, () => {
                console.log('App running on Port 3000')
})