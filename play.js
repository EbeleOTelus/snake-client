const net = require("net"); 


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
