const Sequelize = require('sequelize');

const sequelize = new Sequelize('database', 'username', 'password', {
	host: 'localhost',
	dialect: 'sqlite',
	logging: false,
	storage: 'database.sqlite',
});

require('./models/Users')(sequelize, Sequelize.DataTypes);

sequelize.sync({force}).then(async() => {
    console.log('Database synced');
    sequelize.close();
}).catch(console.error);
