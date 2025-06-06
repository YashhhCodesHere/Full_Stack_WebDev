import express from 'express';
const app = express();
const port = 3000;

// Our in-memory database:
var users = [{
    name : "Geralt",
    kidneys : [{
        healthy : true
    }, {
        healthy : false
    }]
}]

app.use(express.json());

app.get('/', (_, res) => {
    const usersKidney = users[0].kidneys;
    // Number of healthy kidneys:-
    let healthyKidneys = 0;
    for(let i=0; i<usersKidney.length; i++){
        if(usersKidney[i].healthy){
            healthyKidneys++;
        }
    }
    res.json({
        "name" : users[0].name,
        "total number of kidneys" : usersKidney.length,
        "number of healthy kidneys" : healthyKidneys,
        "Number of unhealthy kidneys" : usersKidney.length - healthyKidneys

    })
})

app.post('/', (req, res) => {
    const addInfo = req.body.isHealthy;

    users[0].kidneys.push({
        healthy : addInfo
    })
    res.json({
        message : "Done!"
    })
})

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
})