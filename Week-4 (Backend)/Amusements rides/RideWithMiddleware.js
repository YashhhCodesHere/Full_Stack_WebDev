const express = require('express');
const app = express();

app.use((req, res, next) => {
    if(req.query.age >= 14){
        next();
    }else{
        res.json({
            Message : "You can't access this ride!"
        })
    }
})

app.get('/ride1/', (req, res) => {
    res.json({
        Message : "You have successfully booked your ride-1!"
    })
});

app.get('/ride2/', (req, res) => {
    res.json({
        Message : "You have successfully booked your ride-2!"
    })
});

app.listen(3000, () => {
    console.log("Server is running on port 3000:");
})