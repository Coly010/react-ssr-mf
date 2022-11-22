import express from 'express';
import { handleRequest } from './src/main.server';
import * as path from 'path';

const port = process.env['port'] || 4200;
const cors = require("cors");
const app = express();

app.use(cors());
const browserDist = path.join(process.cwd(), 'dist/apps/remote1/browser');
const indexPath = path.join(browserDist, 'index.html');

app.get(
  '*.*',
  express.static(browserDist, {
    maxAge: '1y',
  })
);

app.use('*', handleRequest(indexPath));

const server = app.listen(port, () => {
  // Server has started
});

server.on('error', console.error);
