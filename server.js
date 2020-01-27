const express = require("express");
const app = express();
const createError = require('http-errors')
const cors = require("cors");
const repositoriesRouter = require("./app/routes/repositories");

const PREFIX_API = "/api/v1";

app.use(cors());

app.use(`${PREFIX_API}/repositories`, repositoriesRouter);

app.use((req, res, next) => {
    next(createError(404));
});

app.use((err, req, res, next) => {
    const error = createError(err.status || 500);

    res.status(error.status).json({
        message: error.message
    });
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`App running at port ${port}`);
});
