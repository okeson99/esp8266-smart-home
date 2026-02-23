// Day 6, Exercise 4: Arrays (Multiple Devices)

let devices = [
    { name: "Light", pin: 5, state: false },
    { name: "Fan", pin: 6, state: false },
    { name: "AC", pin: 7, state: false }
];

// List all devices
console.log("=== All Devices ===");
devices.forEach(d => {
    console.log(`${d.name} (pin ${d.pin}): ${d.state ? "ON" : "OFF"}`);
});

// Toggle all devices
function toggleAll(deviceArray) {
    deviceArray.forEach(d => {
        d.state = !d.state;
        console.log(`Toggled ${d.name} to ${d.state ? "ON" : "OFF"}`);
    });
}

toggleAll(devices);

// Find device by name
function findDevice(name) {
    return devices.find(d => d.name === name);
}

console.log("\nFound:", findDevice("Fan"));