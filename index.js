const mongoose = require('mongoose');
const app = require('./app');
const port = process.env.PORT || 443;

mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost:27017/convertidor',{useNewUrlParser: true}).then(() => {
    app.listen(port,() => {
        console.log('servidor corriendo ' + port); 
    });
}).catch(error => console.log(error));
