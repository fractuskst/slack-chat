import { io } from 'socket.io-client';

const URL = 'http://localhost:5001';
const socket = io(URL);

export default socket;
