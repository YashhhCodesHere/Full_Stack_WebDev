import express from 'express';

const app = express();

app.get('/ride1/', (req, res) => {

    if(Number(req.query.age) >= 14){
        res.json({
            Message : "You have successfully booked your ride-1!"
        })
    }else{
        res.json({
            Message : "You can't access this ride!"
        })
    }
});

app.get('/ride2/', (req, res) => {

    if(Number(req.query.age) >= 14){
        res.json({
            Message : "You have successfully booked your ride-2!"
        })
    }else{
        res.json({
            Message : "You can't access this ride!"
        })
    }
});

app.listen(3000);