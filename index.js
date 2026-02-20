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
            },
            {
                id : 7,
                name : "John",
                job : "Data Scientist",
                salary : 1200000
            },
            {
                id : 8,
                name : "Doe",
                job : "Product Manager",
                salary : 1500000
            }
        ]
    )
});

// New route to fetch data by ID
app.get("/user/:id", (req, res) => {
    const users = [
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
        },
        {
            id : 7,
            name : "John",
            job : "Data Scientist",
            salary : 1200000
        },
        {
            id : 8,
            name : "Doe",
            job : "Product Manager",
            salary : 1500000
        }
    ];

    const userId = parseInt(req.params.id);
    const user = users.find(u => u.id === userId);

    if (user) {
        res.json(user);
    } else {
        res.status(404).json({ message: "User not found" });
    }
});

app.listen(4000, () => {
    console.log("App is listen on port 4000");
})







