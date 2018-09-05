const express = require('express');
const bodyParser = require('body-parser');
const port = process.env.PORT || 3000;

const app = express();
app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
})); 


app.post("/getText", (req, res) => {
	let text = req.body.text;
	res.send(text);
});


app.listen(port, err => {
    if (err) throw err
    console.log(`> Ready on http://localhost:${port}`)
 });

module.exports = app