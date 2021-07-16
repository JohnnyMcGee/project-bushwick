const express = require("express");

const app = express();
const port = 8000;

app.get("/", (_, res) => {
    res.send("Cowabunga, dude!");
});

app.listen(port, () => {
    console.log("YEE HAW! Port 8000 buckaroos");
});
