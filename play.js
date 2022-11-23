
// const net = require("net");
const {connect} = require("./client")

<<<<<<< HEAD
console.log(connect)
=======
// establishes a connection with the game server
const connect = function () {
  
const conn = net.createConnection({
  host: "172.27.168.139",
  port: 50541,
});
conn.on('data', (message) => {
  console.log("New message:", message);
conn.setEncoding("utf8"); // interpret data as text

return conn;
};

console.log("Connecting ...");
connect();
>>>>>>> 13e7d3d14377c326b221a8c159109dfa0f2d149d
