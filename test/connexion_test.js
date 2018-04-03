const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/books_test');

mongoose.connection.once( () => {
    console.log('connexion établie');
}).on('error', (err) => {

    console.log(err);
});