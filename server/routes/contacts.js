// require('dotenv').config()
const morgan = require('morgan')
const { Router } = require('express');
const express = require('express'); 
const router = express.Router();
const pgp = require('pg-promise')({});
const db = require('../app');

router.get('/', (req, res) => {
    db.any("SELECT * FROM contacts")
    .then(rows => {
        console.log(rows);
        res.json(rows)
    })
    .catch(error => {
     console.log(error);
    })
})

router.post("/", async (req, res) => {
    console.log(req.body) 
    try{
        let insertQuery = `INSERT INTO contacts (first_name, last_name, phone_number, email) VALUES ( $1, $2, $3, $4)`
               await db.none(insertQuery, [req.body.first_name, req.body.last_name, req.body.phone_number, req.body.email])
               console.log(req.body.firstName)
                res.json({
                payload: req.body,
                message: "Contact Added"
                })
             } catch (error) {
        console.log(error);
     }
    });

    module.exports = router;
