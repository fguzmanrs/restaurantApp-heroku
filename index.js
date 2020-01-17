const express = require('express');
const path = require('path');
const port = process.env.PORT || 3000;

const app = express();

app.use( '/reservation', (req, res) => {
  res.send(reservation.html)
});

app.use( '/view', (req, res) => {
  res.send(view.html)
});

app.use( '/', (req, res) => {
    res.send(index.html)
});




app.listen( port, () => {
  console.info( "Server app started on port " + port )
} )
