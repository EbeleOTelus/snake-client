

const net = require("net");
const { IP, PORT } = require("./constants");
// establishes a connection with the game server
const connect = function() {
  const conn = net.createConnection({
    host: IP,
    port: PORT,
    // host: "165.227.47.243",
    // port: 50541,
  });

  conn.on('data', (message) => {
    console.log("New message:", message);
  });

  conn.on('connect', () => {
    console.log("Successfully connected to game server");
  });
  conn.on("connect", () => {
    conn.write("Name: Eby");
  });

  //   conn.on("connect", () => {
  //    setInterval(() => {conn.write("Move: up")
  //  }, 2000);

  //    });

  //    conn.on("connect", () => {
  //     setInterval(() => {conn.write("Move: down")
  //   },2050);

  //     });

  //     conn.on("connect", () => {
  //       setInterval(() => {conn.write("Move: left")
  //     }, 2100);

  //       });

  // conn.on("connect", () => {
  //     setInterval(() => {conn.write("Move: right")
  //   }, 2150);

  //     });

  conn.setEncoding("utf8"); // interpret data as text

  return conn;
};


const connectObject = connect();

// console.log(connectObject)

module.exports = { connectObject };



