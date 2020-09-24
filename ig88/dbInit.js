const Sequelize = require('sequelize');

const sequelize = new Sequelize('database', 'root', 'T9s+Y(xocjT}#NCS', {
	host: '144.202.21.9',
	dialect: 'sqlite',
	logging: false,
	storage: 'database.sqlite',
});

require('./models/Users')(sequelize, Sequelize.DataTypes);

const force = process.argv.includes('--force') || process.argv.includes('-f');

sequelize.sync({force}).then(async() => {
    console.log('Database synced');
    sequelize.close();
}).catch(console.error);
