const express = require ('express');
const app = express();

app.use((req, res, next) => {
  console.log(req.method, req.url, res.statusCode);
  next();
});

app.get('/', (req, res) =>
        res.send('howdy'));

app.get('/news', (req, res) =>
        res.send('this is the evening news'));












app.listen(3000);
