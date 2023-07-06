const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
const app = express();
require('dotenv').config();

app.use(express.json());
app.use(cors());

const pool = mysql.createPool({
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
})

const port = process.env.PORT;

app.listen(4000, () => {
    console.log(`server is running on port ${port}`);
})

app.get('/student', (req, res) => {
    pool.query('SELECT * FROM student',
        (err, result) => {
            if (err) {
                console.log(err);
                res.status(500).send("STUDENT PAGEERRORRRRRRR!!!!");
            } else {
                res.send(result);
            }
        });
});


app.get('/student/:id', (req, res) => {
    pool.query('SELECT student.*, teacher.name AS teacher_name FROM student JOIN teacher ON student.teacher_id = teacher.teacher_id WHERE student.student_id= ?;',

        [req.params.id],
        (err, result) => {
            if (err) {
                console.log(err);
                res.status(500).send("Student ID ERROR!!");
            } else {
                res.send(result);
                console.log(result)
            }
        });
});


app.get('/projectlibrary', (req, res) => {
    pool.query('SELECT * FROM project',
        (err, result) => {
            if (err) {
                console.log(err);
                res.status(500).send("No project to be shown");
            } else {
                res.send(result);
                console.log(result)
            }
        });
});


app.get('/teacher', (req, res) => {
    pool.query('SELECT * FROM teacher',
        (err, result) => {
            if (err) {
                console.log(err);
                res.status(500).send("Teacher PAGE ERROR!! ERROR!! ERRORRRRRRR!!!!");
            } else {
                res.send(result);
            }
        });
});


app.get('/teacher/:id', (req, res) => {
    pool.query('SELECT * FROM teacher WHERE ID= ?',
        [req.params.id],
        (err, result) => {
            if (err) {
                console.log(err);
                res.status(500).send("Teacher ID ERROR!!");
            } else {
                res.send(result);
                console.log(result)
            }
        });
});