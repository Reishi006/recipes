const express = require('express');
const app = express();
const mysql = require('mysql');
const cors = require('cors');

const port = 8080;

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'recipes',
});

app.use(cors());
app.use(express.json());
app.use('/public', express.static('public'));

//select names of recipes that contain a tagname:
const withTag = `SELECT
    DISTINCT recipe.*
FROM
    recipe
    JOIN recipe_tags ON recipe.id = recipe_tags.recipe_id
    JOIN tags ON tags.id = recipe_tags.tags_id
WHERE
    tags.name IN (?)`;


//for tests server-side
app.get('/', (req, res) => {
    db.query(withTag, ['pancake'], (err, data) => {
        if (err) throw err
        return res.json(data);
    })
})


app.post('/', (req, res) => {
    split = req.body.tagname.split(" ");

    console.log(split);

    db.query(withTag, [split], (err, data) => {
        if (err) throw err
        return res.json(data);
    })
});

app.listen(port, console.log(`Server started on port ${port}`));





/* select all tags from a certain recipe

SELECT
    `tags`.*
FROM
    `tags`
    JOIN `recipe_tags` ON `tags`.`id` = `recipe_tags`.`tags_id`
WHERE
    `recipe_tags`.`recipe_id` = 1

*/