// Day 6, Exercise 3: Objects (Device Representation)

let smartDevice = {
    name: "Smart Light",
    pin: 5,
    state: false,
    location: "Living Room",
    
    toggle: function() {
        this.state = !this.state;
        console.log(`${this.name} is now ${this.state ? "ON" : "OFF"}`);
        return this.state;
    },
    
    getStatus: function() {
        return {
            name: this.name,
            location: this.location,
            state: this.state,
            pin: this.pin
        };
    }
};

// Test
smartDevice.toggle();
console.log(smartDevice.getStatus());

// Your exercise: Create device2 for "Smart Fan" on pin 6
let smartFan = {
    // Fill in
};