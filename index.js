'use strict';

import "dotenv/config";
import express from 'express';
import { createServer } from 'http';

const app = new express();

const http = createServer(app);

app.get("*", express.static('./src'));

http.listen(process.env.PORT || 3000);
