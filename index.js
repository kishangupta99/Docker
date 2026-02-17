const express = require('express')

const app = express();

app.get("/", (req, res) => {
    res.json(
        [
            {
                id : 1,
                name : "kishan",
                job : "software developer",
                salary : 900000000
            },
            {
                id : 2,
                name : "Tanya",
                job : "software developer",
                salary : 300000
            },
            {
                id : 3,
                name : "khushi",
                job : "software developer",
                salary : 2000000
            },
            {
                id : 4,
                name : "aarchie",
                job : "software developer",
                salary : 1000000
            },
             {
                id : 5,
                name : "aarchie girl",
                job : "software developer",
                salary : 1000000
            },
            {
                id : 6,
                name : "aarchie girl",
                job : "software developer",
                salary : 1000000
            }
        ]
    )
})

app.listen(4000, () => {
    console.log("App is listen on port 4000");
})







