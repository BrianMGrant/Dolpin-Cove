var express = require('express');
var router = express.Router();
var conn = require('../lib/db')

router.get('/admin', (req, res, next) => {
    if (req.session.loggedin === true) {
        const pros = "SELECT programs.pro_nm,tour_comp.comp_nm FROM programs INNER JOIN tour_comp"
        const list = "SELECT * FROM tour_comp";
        conn.query(pros, list, (err, row) => {
            if (err) {
                res.render('admin-booking', {
                    data: '',
                })
            } else {
                res.render('admin-booking', {
                    data: row,
                })
            }
        })
    } else {
        res.redirect('/login/login')
    }
})
router.post('/admin/update', function(req, res, next) {
    if (req.session.loggedin === true) {
        const userDetails = req.body;
        var sql = 'INSERT INTO tour_com_db SET ?';
        conn.query(sql, userDetails, function(err, data) {
            if (!err) {
                res.render('success')
            } else {
                console.log("Did not insert user data");
                console.log(err);
            }

        });
        res.redirect('/success/success');
    } else {
        res.redirect('/login/login')
    }
});
router.get('/admin/edit/:id', function(req, res, next) {
    if (req.session.loggedin === true) {
        const prog = "SELECT * FROM tour_com_db INNER JOIN programs"
        const tour = 'SELECT * FROM tour_com_db WHERE Id='
        conn.query(tour + req.params.id, function(err, row) {

            if (err) {
                //req.flash('error', err); 
                res.render('admin-edit', {
                    user: '',
                    list: ''

                });

            } else {

                res.render('admin-edit', {
                    user: row[0],
                    list: row[0]
                });
            }

        });
        // if (err) {
        //     res.render('admin-edit', {
        //         list: ''
        //     })
        // } else {
        //     res.render('admin-edit', {
        //         list: row
        //     })
        // }
    } else {
        res.redirect('/login/login')
    }
})



module.exports = router