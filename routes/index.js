var express = require('express');
var router = express.Router();
var conn = require('../lib/db');

/* GET home page. */

router.get('/', (req, res, next) => {
    conn.query('SELECT * FROM programs', (err, row) => {
        res.render('display', {
            data: row
        })
    })

})





module.exports = router;