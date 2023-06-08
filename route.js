const express = require('express');
const fs = require('fs');
const app = express();
app.use(express.json());//kkj
app.post('/api/data', (req, res) => {
  const data = req.body;
  // Convert the data object to a string
  const dataString = JSON.stringify(data);
  // Append the data to a text file
  fs.appendFile('data.txt', dataString + '\n', (err) => {
    if (err) {
      console.error(err);
      res.status(500).send('Error writing to file');
    } else {
      res.status(200).send('Data stored successfully');
    }
  });
});
app.listen(7000, () => {
  console.log('Server listening on port 7000');
});