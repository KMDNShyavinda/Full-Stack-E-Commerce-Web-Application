import express from 'express';

let app = express();

app.get('/', (req, res) => {
  console.log('This is a Get request');
  res.send('This is a Get request');
});

app.delete('/', (req, res) => {
  console.log('This is a Delete request');
  res.send('This is a Delete request');
});

app.put('/', (req, res) => {
  console.log('This is a Put request');
}); 

app.post('/data', (req, res) => {
  let data = req.body;
  console.log('Received data:', data);
  res.send('Data received successfully');
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});

 

