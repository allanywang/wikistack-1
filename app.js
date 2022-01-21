const express = require('express');
const sequelize = require('sequelize');
const morgan = require('morgan');
const layout = require('./views/layout');
const { db, Page, User } = require('./models');


const app = express();
const PORT = 1337;

app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/public"));

app.get('/', (req, res, next) => {
    res.send(layout(''));
})

let sync = async function(){
    await db.sync({ force: true });
    app.listen(PORT, () => {
        console.log('listening')
    })
}

sync();

db.authenticate()
  .then(() => {
    console.log('connected to the database');
  })