import express from 'express';
import User from './model/User';
import { db } from './db';
const app = express();

const stringFactory = (length = 10) => {
	let text = '';
	const possible =
		'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
	for (let i = 0; i < length; i++)
		text += possible.charAt(Math.floor(Math.random() * possible.length));

	return text;
};

db.authenticate()
	.then(() => console.log('success connected'))
	.catch(err => console.log(`db conn err : ${err}`));

db.sync();

app.get('/', (req, res) => res.json({ status: 'ok' }));

app.get('/go', (req, res) => {
	const msgArr = [stringFactory(), stringFactory(), ''];

	const promiseArr = msgArr.map(e => User.create({ message: e }));

	db.transaction(transaction => Promise.all(promiseArr, User.create({})))
		.then(e => res.json({ deu: 'bom' }))
		.catch(err => res.json({ deu: 'ruim' }));
});

app.listen(3030, () => console.log('server running'));
