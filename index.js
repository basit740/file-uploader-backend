const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log('server is running at port: ' + PORT));

app.get('/connect', (req, res) => {
	res.status(200).json({
		success: true,
		message: 'all good!',
	});
});

app.post('/upload', (req, res) => {
	console.log(req.body);
	res.status(200).json({
		success: true,
		message: 'all good!',
	});
});
