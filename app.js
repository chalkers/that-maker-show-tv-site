var server = require('pushstate-server');

server.start({
    directories: ['./public', './build']
});