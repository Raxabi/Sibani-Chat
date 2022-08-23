import { io } from "socket.io-client"

const socket = io("http://localhost:5000/")

function Message() {

  socket.on("connect", () => {
    console.log(socket.id)
  })

  return (
    <div>
      <h1>Hello World!</h1>
    </div>
  )
}

export default Message
