import express from 'express';

let app = express();

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.post('/data', (req, res) => {
  let data = req.body;
  console.log('Received data:', data);
  res.send('Data received successfully');
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});

 

