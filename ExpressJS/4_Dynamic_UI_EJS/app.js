// Core Module
const path = require('path');

// External Module
const express = require('express');

//Local Module
const userRouter = require("./routers/storeRouter")
const {hostRouter} = require("./routers/hostRouter")
const rootDir = require("./util/path");

const app = express();
app.use(express.static('public'));


app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(express.urlencoded());
app.use(userRouter);
app.use(hostRouter);

app.use(express.static(path.join(rootDir, 'public')))

app.use((req, res, next) => {
  res.status(404).render('404', {pageTitle: 'Page Not Found'});
})

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on address http://localhost:${PORT}`);
});