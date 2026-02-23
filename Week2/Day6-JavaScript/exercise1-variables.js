// Day 6, Exercise 1: Variables and Types
// Run: node exercise1-variables.js

let temperature = 30.5;
let humidity = 80;
let deviceName = "Bed Room Light";
let isRelayOn = true;

console.log("=== Device Status ===");
console.log("Name:", deviceName);
console.log("Temperature:", temperature + "°C");
console.log("Humidity:", humidity + "%");
console.log("Relay State:", isRelayOn ? "ON" : "OFF");

// Your modification: Create variables for your actual device
let myDevice = "ESP8266 NodeMCU";
let myPin = 5;
console.log("\nMy Device:", myDevice, "on pin", myPin);