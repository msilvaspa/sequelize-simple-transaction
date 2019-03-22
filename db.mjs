import Sequelize from 'sequelize';

const DB = 'test';
const USER = 'SA';
const PASSWORD = 'Password123';
const DIALECT = 'mssql';
const HOST = process.env.DB_PATH || '127.0.0.1';

export const db = new Sequelize(DB, USER, PASSWORD, {
	dialect: DIALECT,
	host: HOST,
	port: 1433
});
