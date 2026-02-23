// Day 6, Exercise 2: Functions

function celsiusToFahrenheit(c) {
    return (c * 9/5) + 32;
}

function toggleRelay(currentState) {
    return !currentState;
}

function formatStatus(device, temp, hum, state) {
    return `${device}: ${temp}°C, ${hum}%, Relay ${state ? "ON" : "OFF"}`;
}

// Test
console.log("25°C =", celsiusToFahrenheit(25), "°F");

let relayState = false;
relayState = toggleRelay(relayState);
console.log("Relay toggled:", relayState);

console.log(formatStatus("Bedroom", 22.5, 55, relayState));