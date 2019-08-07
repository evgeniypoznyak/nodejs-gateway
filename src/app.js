const {WATCH_MODE} = process.env;
if (!WATCH_MODE) process.env.NODE_CONFIG_DIR = '../config';
import 'express-async-errors';
import express from 'express';
import routes from './startup/routes';
import db from './startup/db';
import config from './startup/config'

const app = express();
routes(app);
db();
config();
process.on('unhandledRejection', (ex) => {
    throw ex;
});

const port = process.env.PORT || 2222;
const host = process.env.HOST || 'http://localhost';
app.listen(port, () => console.log(`Listening: ${host}:${port}`));
