const express = require("express");
const app = express();
const port = 3000;

app.use(express.json());

let tasks = [];

app.post("/tasks", (req, res) =>{
    const { title } = req.body;

    if (!title) {
        return res.status(400).json({ error: "Title is required"});
    }

    const newTask = { id: tasks.length + 1, title};
    tasks.push(newTask);

    res.status(201).json(newTask);


});

app.get("/tasks", (req, res) => {
    res.status(200).json(tasks);
});


app.listen(port, () => {
    console.log(`API is running on http://localhost:${port}`)
});