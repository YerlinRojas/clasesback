const user = input ('escribiendo')
const socket= io()

socket.emit('new', user)