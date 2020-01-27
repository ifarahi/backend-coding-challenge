const express = require('express');
const app = express();
const cors = require('cors');
const repositoriesRouter = require('./app/routes/repositories');

const PREFIX_API = '/api/v1';

app.use(cors());

app.use(`${PREFIX_API}/repositories`, repositoriesRouter);

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`App running at port ${port}`);
})
