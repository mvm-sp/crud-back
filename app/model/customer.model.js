module.exports = (sequelize, Sequelize) => {
	const Customer = sequelize.define('customer', {
	  firstname: {
			type: Sequelize.STRING(50)
	  },
	  lastname: {
			type: Sequelize.STRING(50)
	  },
	  age: {
		  type: Sequelize.INTEGER
	  }
	});
	
	return Customer;
}