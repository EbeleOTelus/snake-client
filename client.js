 

const net = require("net");
// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
  host: "172.27.168.139",
  port: 50541,
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
//    setTimeout(() => {conn.write("Move: up")
//  }, 2000);
    
//    });

//    conn.on("connect", () => {
//     setTimeout(() => {conn.write("Move: down")
//   },2050);
     
//     });

//     conn.on("connect", () => {
//       setTimeout(() => {conn.write("Move: left")
//     }, 2100);
       
//       });

// conn.on("connect", () => {
//     setTimeout(() => {conn.write("Move: right")
//   }, 2150);
     
//     });

conn.setEncoding("utf8"); // interpret data as text

return conn;
};

console.log("Connecting ...");
connect();


module.export = {connect};



