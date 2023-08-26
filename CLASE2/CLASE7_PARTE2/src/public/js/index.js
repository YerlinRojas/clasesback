const socket = io()

const chatbox = document.getElementById('chatbox')
let user = sessionStorageStorage.getItem('user') || ''

Swal.fire({
    title: 'Auth',
    input: 'text',
    text: 'set user name',
    inputValidator: value =>{
        return !value.trim() && 'please write username'
    },
    allowOutsideClick : false
}).then(result =>{
    user=result.value
    document.getElementById('username').innerHTML = user
    sessionStorageStorage.setItem('user', user)
    socket.emit('new', user)
})
//enviar
chatbox.addEventListener('keyup', event =>{
    if(event === 'Enter'){
        const message= chatbox.value.trim()
        if(message.length > 0){
            socket.emit('message',{
                user,
                message
            })
            chatbox.value= ''
        }
    }
})
//.......

//recibir 
socket.on('logs', data =>{
    const divlogs= document.getElementById('logs')
    let message= ''
data.forEach(msn => {
    message = `<p><i>${msn.user}</i>: ${msn.message}</p>` + message

})

    divlogs.innerHTML = message
})
//....