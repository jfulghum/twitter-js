const express = require ('express');
const app = express();

app.use((req, res, next) => {
  console.log(req.method, req.url, res.statusCode);
  next();
});

app.use('/special/', (req, res, next) => {
console.log("This is an updated special place.");
next();
});

app.get('/special/subpath', (req, res) =>
        res.send("You've reached the special place."));

app.get('/', (req, res) =>
        res.send('howdy'));

app.get('/news', (req, res) =>
        res.send('this is the evening news'));












app.listen(3000);
