var express = require('express');
var router = express.Router();
var conn = require('../lib/db');

/* GET home page. */

router.get('/success', (req, res, next) => {
    const user = "SELECT * FROM tour_com_db ORDER BY Id desc LIMIT 1"
    conn.query(user, (err, row) => {
        if (err) {
            res.render('success', {
                data: ''
            })
        } else {
            res.render('success', {
                data: row
            })
        }
    })
})







module.exports = router;