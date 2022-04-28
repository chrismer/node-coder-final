import Server from "./models/server.js";
import dotenv from 'dotenv';
const dotenvConfig = dotenv.config();

const server = new Server();

server.listen();