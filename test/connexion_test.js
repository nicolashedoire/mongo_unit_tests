const mongoose = require('mongoose');

// Override du système de promesses par le système natif ES6
mongoose.Promise = global.Promise;

// Avant d'exectuter les tests on se connecte à la base grace au before
before((done) => {
    mongoose.connect('mongodb://localhost/books_test');

    mongoose.connection.once('open', () => {
        console.log('connexion établie');
        done();
    }).on('error', (err) => {
        console.log(err);
    });
});


// beforeEach('On supprime les anciens livres', (done) => {
//     // On va chercher la collection de livres
//     const {books, users} = mongoose.connection.collections;

//     // On drop la collection 
//     books.drop().then(() => {
//         // On passe à la suite
//         users.drop().then(() => {
//             done();
//         }).catch((err) => {
//             // pass
//             done();
//         })
//     }).catch((err) => {
//         // pass
//         done();
//     })
// });

beforeEach('On supprime les données', (done) => {

    mongoose.connection.db.dropDatabase().then(() => {
        done();
    });
});
