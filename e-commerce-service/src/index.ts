// src/index.ts
import express from 'express';

const app = express();
const port = 4500;

app.get('/', (req, res) => {
  res.send('Hello, TypeScript with Express!GLT');
});


app.get('/products', (req, res)=>{
  res.send([{name: "naraa"}]);
});

app.get('/products', (req, res)=>{
  res.send([{
    name: 'T-shirt',
    price: 1000,
    colors: ["red, yellow, white, black"]
  }])
})


app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});


