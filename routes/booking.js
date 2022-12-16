var express = require('express');
var router = express.Router();
var conn = require('../lib/db')
router.get('/booking', (req, res, next) => {
    var pro = 'SELECT * FROM programs'
    conn.query(pro, (err, row) => {
        if (err) {
            res.render('display', {
                data: ''
            })
        } else {
            res.render('display', {
                data: row
            })
        }
    });
});


router.post('/booking/update', function(req, res, next) {

    const userDetails = req.body;

    var sql = 'INSERT INTO cust_bk SET ?';
    conn.query(sql, userDetails, function(err, data) {
        if (!err) {
            console.log("User data is inserted successfully ");
            console.log(data);
        } else {
            console.log("Did not insert user data");
            console.log(err);
        }

    });
    res.redirect('/booking/booking');
});
module.exports = router;