module.exports = (sequelize, Sequelize) => {
    const Store = sequelize.define('store',
    {
        name: { type: Sequelize.STRING(50)},
        address:{ type: Sequelize.STRING(50)},
        number: {type: Sequelize.INTEGER}
    });
	
	return Store;
}