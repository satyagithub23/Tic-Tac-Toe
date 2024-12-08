const io = require('socket.io')(3400, {
    cors: {
      origin: "*",
      methods: ["GET", "POST"]
    }
  })

let player = {}

io.on('connection', socket => {
    socket.on('new-player-joined', name => {
        player[socket.id] = name
        socket.broadcast.emit('player-joined', {name: name, id: socket.id})
        console.log(player);
    })
})
