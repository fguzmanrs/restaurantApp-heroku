const express = require('express');
const path = require('path');
const port = process.env.PORT || 3000;

const app = express();

app.use(express.static('public'))

app.use( '/reservation', (req, res) => {
  res.sendFile(path.join(__dirname, "public/reserve.html"))
});

app.use( '/tables', (req, res) => {
  res.sendFile(path.join(__dirname, "public/tables.html"))
});

app.use( '/', (req, res) => {
  res.sendFile(path.join(__dirname, "public/home.html"))
});


app.listen( port, () => {
  console.info( "Server app started on port " + port )
} )
