const express = require('express');
const server = express();
const PORT = process.env.PORT || 3000;

server.get('/', (req, res) => {
  res.send('Hello Express16!');
  for (let i = 0; i < 10000; i++) {
    console.log(`Foooo`);
  }
});

server.listen(PORT, () => {
  console.log(`Application is listening at port ${PORT}`);
});
