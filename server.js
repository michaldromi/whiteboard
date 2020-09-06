var app = require('express')();
var http = require('http').createServer(app);

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/src/index.html');
});

http.listen(8001, () => {
    console.log('listening on *:8001');
});
