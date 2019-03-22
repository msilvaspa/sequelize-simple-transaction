import Sequelize from 'sequelize';
import { db } from '../db';

export default db.define(
	'message',
	{
		id: {
			type: Sequelize.INTEGER,
			primaryKey: true,
			unique: true,
			autoIncrement: true
		},
		message: { type: Sequelize.STRING, allowNull: false }
	},
	{ timestamps: false }
);
