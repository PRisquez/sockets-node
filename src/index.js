import app from './app';
import {Server as WebsocketServer} from 'socket.io';
import http from 'http';
import {connectDB} from './db';
import { PORT } from './config';
import sockets from './sockets'
connectDB();

const server = http.createServer(app);
const httpServer = server.listen(PORT);

console.log('Server or port', PORT);

const io = new WebsocketServer(httpServer);
sockets(io);