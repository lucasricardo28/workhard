const express   = require('express');
const bodyParse = require('body-parser');
const config    = require('config');
const routes    = require('../src/routes/api')

module.exports = () => {
    const app = express();

    app.set('port', process.env.PORT || config.get('server.port'));
    app.set(bodyParse.json());
    app.use('/api/v1', routes);

    return app;
}