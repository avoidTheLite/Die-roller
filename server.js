import express from 'express';
const app = express();

import router from './server/routes.js';
const port = 3000;

app.use('/', router);



app.listen(port, () => {
  return console.log(`Die rolling machine is listening at http://localhost:${port}`);
});