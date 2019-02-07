const db = require('../config/db.config.js');
const Store = db.stores;

// Post a Store
exports.create = (req, res) => {	
	// Save to PostgreSQL database
	Store.create({
				"name": req.body.name, 
				"address": req.body.address, 
				"number": req.body.number
			}).then(store => {		
			// Send created customer to client
			res.json(store);
		}).catch(err => {
			console.log(err);
			res.status(500).json({msg: "error", details: err});
		});
};
 
// FETCH All Stores
exports.findAll = (req, res) => {
	Store.findAll().then(stores => {
			// Send All Customers to Client
			res.json(stores.sort(function(c1, c2){return c1.id - c2.id}));
		}).catch(err => {
			console.log(err);
			res.status(500).json({msg: "error", details: err});
		});
};

// Find a Store by Id
exports.findById = (req, res) => {	
	Store.findById(req.params.id).then(store => {
			res.json(store);
		}).catch(err => {
			console.log(err);
			res.status(500).json({msg: "error", details: err});
		});
};

// Find a Store by PK
exports.findByPk = (req, res) => {	
	Store.findByPk(req.params.id).then(store => {
			res.json(store);
		}).catch(err => {
			console.log(err);
			res.status(500).json({msg: "error", details: err});
		});
};

// Update a Store
exports.update = (req, res) => {
	const id = req.body.id;
	Store.update( req.body, 
			{ where: {id: id} }).then(() => {
				res.status(200).json( { mgs: "Updated Successfully -> Store Id = " + id } );
			}).catch(err => {
				console.log(err);
				res.status(500).json({msg: "error", details: err});
			});
};

// Delete a Store by Id
exports.delete = (req, res) => {
	const id = req.params.id;
	Store.destroy({
			where: { id: id }
		}).then(() => {
			res.status(200).json( { msg: 'Deleted Successfully -> Store Id = ' + id } );
		}).catch(err => {
			console.log(err);
			res.status(500).json({msg: "error", details: err});
		});
};

