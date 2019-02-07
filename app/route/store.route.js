module.exports = function(app) {
    const stores = require('../controller/store.controller.js');
 
    // Create a new Store
    app.post('/api/stores', stores.create);
 
    // Retrieve all Store
    app.get('/api/stores', stores.findAll);
 
    // Retrieve a single Store by Pk
    app.get('/api/stores/:id', stores.findByPk);
 
    // Update a Store with Id
    app.put('/api/stores', stores.update);
 
    // Delete a Store with Id
    app.delete('/api/stores/:id', stores.delete);
}