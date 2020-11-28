const express   = require('express');
const bodyParse = require('body-parser');

const config    = require('config');

module.exports = () => {
    const app = express();

    app.set('port', process.env.PORT || config.get('server.port'));
    app.set(bodyParse.json());

    return app;
}