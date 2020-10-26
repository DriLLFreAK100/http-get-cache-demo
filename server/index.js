const express = require('express')
const cors = require('cors');
const app = express()
const port = 5000;

app.use(cors());

const serverResponse = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        message: "Yep, this message is from the mighty demo Node.js Server!",
        datetime: new Date(),
      });
    }, 5000);
  })
    .catch(err => { throw err; })
};

app.get('/', async (req, res) => {
  res.set('Cache-Control', 'public, max-age=60'); // 1 Minute
  res.send(await serverResponse());
});

app.listen(port, () => {
  console.log(`Demo Server listening at http://localhost:${port}`)
});
