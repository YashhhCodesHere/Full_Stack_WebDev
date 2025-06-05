const express = require('express')
const app = express();
const port = 3000;

function getSum(n){
  let sum = 0;

  for(let i = 1; i < n; i++){
    sum += i;
  }

  return sum;
}

app.get('/', (req, res) => {
  const n = req.query.n;
  res.send(`The sum till ${n} is: ${getSum(n).toString()}`);  // Output must be converted to string!
})

app.listen(port, () => {
  console.log(`App listening on port ${port}:-`);
})
