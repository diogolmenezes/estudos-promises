TestWithPromises = function() {
}

TestWithPromises.prototype.defineMessage = function() {
    return new Promise((resolve, reject) => {
        resolve('Uma mensagem qualquer');
    });
};

TestWithPromises.prototype.incrementMessage = function(message) {
    return new Promise((resolve, reject) => {
        resolve(message + ' incremento...');
    });
};

TestWithPromises.prototype.printMessage = function(message) {
    return new Promise((resolve, reject) => {
        console.log(message);
        resolve();
    });
};

var t = new TestWithPromises();

Promise.resolve() // apenas para iniciar uma nova chain de encadeamento
    .then(t.defineMessage)
    .then(t.incrementMessage)
    .then(t.printMessage)
    .catch(t.printMessage);




