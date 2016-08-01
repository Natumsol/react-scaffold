var express = require('express');
var app = express();

app.use("/js", express.static("build/js"));
app.use("/css", express.static("build/css"));
app.use("/img", express.static("static/img"));
app.use("/lib", express.static("static/lib"));
app.get("*", (req, res) => {
	res.sendFile(__dirname + "/index.html");
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});