var express = require('express');
var router = express.Router();
var conn = require('../lib/db')


router.get('/tour', (req, res, next) => {
    if (req.session.loggedin === true) {
        var pros = "SELECT * FROM programs"
        var tR = "SELECT * FROM tour_com_db"
        conn.query(tR, (err, row) => {
            if (err) {
                res.render('tour', {
                    data: ''
                })
            } else {
                res.render('tour', {
                    data: row
                })
            }
        })
    } else {
        res.redirect('/login/login')
    }
})


module.exports = router