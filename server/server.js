'use strict';
//подключаемые модули
const cors = require('cors');
var express = require('express'), //собственно, сервер
    app = express(), // объект типа "сервер"
    bodyParser = require('body-parser'), //модуль, который парсит post-запрос
    path = require('path');
    app.use(cors());
    app.options('*', cors());

app.use(bodyParser.urlencoded({extended: false}));

//установка пути, где находятся файлы
app.use(express.static(__dirname));

app.get('/indicators', function(req, res) {

    const NUM = 8;

    const data = [];

    for (let i = 0; i < NUM; i++) {
        data.push({
            id: i,
            value: Math.floor(Math.random() * 1200),
            minValue: 0,
            maxValue: 1100
        });
    }

    res.send(data);

})

//слушаем порт
app.listen(8000);

