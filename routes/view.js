var express = require('express');
var router = express.Router();
var conn = require('../lib/db')

router.get('/view', (req, res, next) => {
    if (req.session.loggedin === true) {
        conn.query("SELECT * FROM cust_bk", (err, rows) => {
            if (err) {
                res.render('book-view', {
                    data: ''
                })
            } else {
                res.render('book-view', {
                    data: rows
                })
            }
        })
    } else {
        res.redirect('/login/login')
    }
})
module.exports = router;