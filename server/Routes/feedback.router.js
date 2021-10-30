const express = require ('express');
const router = express.Router();
const pool = require('../modules/pool');

router.get('/', (req, res) => {

    pool.query('SELECT * FROM "feedback";')
    .then((result) => {
        res.send(result.rows);
    })
    .catch((err) => {
        console.log('Error in GET');
        res.sendStatus(500);
    })
})

router.post('/', (req, res) => {
    const newFeedback = req.body
    sqlText = `
    INSERT INTO "feedback" ("feeling", "understanding", "support", "comments")
    VALUES ($1, $2, $3, $4);
    `;

    let values = [
        newFeedback.feeling,
        newFeedback.understanding,
        newFeedback.support,
        newFeedback.comments
    ];
    pool
        .query(sqlText, values)
        .then((result) => {
            res.sendStatus(201);
        })
        .catch((err) => {
            console.log('Error posting to DB', err);
            res.sendStatus(500);
        })
})

module.exports = router;