import express from 'express'
import __dirname from './utils.js'
import { Server } from 'socket.io'
const app = express()


app.use('/static', express.static(__dirname + '/public'));
app.get('/', (req, res) => {
  res.send('<h1>HOME</h1>');
});

const httpServer = app.listen(8080);
const socketServer = new Server(httpServer);

socketServer.on('connection', socket => {
  console.log('nuevo cliente conectado ');

  socket.on('message', data => {
    console.log(data);

    socket.emit('message_one', 'solo al conectado');
    socket.broadcast.emit('msn_rest', 'todos lo ven')
    socketServer.emit('msn_all', data)
  });
});






