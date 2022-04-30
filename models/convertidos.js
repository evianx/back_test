var moogose = require('mongoose');
var Schema = moogose.Schema;

var ConvertidorSchema = Schema({
    from: String,
    to: String,
    amount: Number,
    quote: Number,
    fecha: {
        type: Date,
        default: Date.now
    },
});

module.exports =  moogose.model('Convertidor', ConvertidorSchema);