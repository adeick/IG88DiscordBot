module.exports = (sequelize, DataTypes) => {
	return sequelize.define('users', {
		user_id: {
			type: DataTypes.STRING,
			primaryKey: true,
		},
		slogan: {
			type: DataTypes.STRING,
			defaultValue: "",
			allowNull: true,
		}
	}, {
		timestamps: false,
	});
};
