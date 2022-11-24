
// const net = require("net");
const { connectObject } = require("./client");
const { setupInput } = require("./input");


console.log("Connecting...");

setupInput(connectObject);