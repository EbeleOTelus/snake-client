 

const net = require("net");

const host = "172.27.168.139";
const port = 50541;
const connectionConfig = {
  host,
  port
};
// establishes a connection with the game server
const connect = () => {
const conn = net.createConnection(connectionConfig);
conn.on('data', (message) => {
  console.log(message);
  });
conn.setEncoding("utf8"); // interpret data as text

return conn;
};

console.log("Connecting ...");
connect();

module.exports = {
  host,
  port 
};



