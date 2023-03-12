import { io as socketio } from 'socket.io-client'

class SocketIOService {
  socket 
  constructor() {}

  setupSocketConnection() {
    this.socket = socketio('http://127.0.0.1:5080')
  }
}

const io = new SocketIOService()

export default io