const express = require('express');
const bodyParser = require('body-parser');
const { dialogflow } = require('actions-on-google');

const app = dialogflow({ debug: true });

express().use(bodyParser.json(), app).listen(3000);
