const app = require("express")();

app.get("/", (req, res) => {
    res.sendFile(`${__dirname}/index.html`);
});

app.get("/contact", (req, res) => { 
    res.statusCode = 418;
    res.send("contact page");
})

app.listen(8080, () => console.log("listening on port 8080"));