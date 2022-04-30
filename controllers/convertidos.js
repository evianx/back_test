const request = require('request');
const Convertidor = require('../models/convertidos');

function listarCurrencies(req, res) {
    var headers = {
        "apikey": "nNlOaeJyDkodCsX47uo576iuieWNPQE9"
    };
    request({
        method: "GET",
        url: 'https://api.apilayer.com/currency_data/list',
        headers: headers,
    }, (error, response, body) => {
        /* console.log(body); */
        body = JSON.parse(body);
        return res.status(200).send({
            status:"success",
            message: "Lista de currency",
            data: body.currencies
        });
    });
}

function convertir(req, res) {
    var params = req.body;
    var headers = {
        "apikey": "nNlOaeJyDkodCsX47uo576iuieWNPQE9"
    };
    var to = params.to;
    var from = params.from;
    var amount  = params.amount ;
    request({
        method: "GET",
        url: `https://api.apilayer.com/currency_data/convert?to=${to}&from=${from}&amount=${amount}`,
        headers: headers,
    }, async (error, response, body) => {
        body = JSON.parse(body);
        console.log(body);
        var convertidor = new Convertidor();
        convertidor.from = params.from;
        convertidor.to = params.to;
        convertidor.amount = params.amount;
        convertidor.timestamp = body.info.timestamp;
        convertidor.quote = body.info.quote;
        var convertidor_storage = await convertidor.save();
        return res.status(200).send({
            status:"success",
            message: "Lista de currency",
            data: body.result,
            /* convertidor: convertidor_storage */
        });
    });
}

module.exports = {
    listarCurrencies,
    convertir
};