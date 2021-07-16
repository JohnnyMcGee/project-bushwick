const express = require("express");
const logger = require("morgan");

const app = express();
const port = 8000;

const items = new Set();
app.use(logger());
app.use(express.json());

app.get("/", (req, res) => {
    res.status(200).json(Array.from(items));
});

app.post("/", (req, res) => {
    const { item } = req.body;

    if (typeof item !== "string") {
        res.status(400).send("invalid item");
    } 
    else {
        items.add(item);
        res.status(200).send();
    }
});

app.delete("/", (req, res) => {
    const { item } = req.body;

    if (!items.has(item)) {
        res.status(400).send("item not found");
    }
    else {
        items.delete(item);
        res.status(200).send();
    }
});

app.use("*", (_, res) => {    
    res.status(404).send();
});

app.use((error, req, res, next) => {
    console.log(error);
    res.status(500).send();
});

app.listen(port, () => {
    console.log("YEE HAW! Port 8000 buckaroos");
});
