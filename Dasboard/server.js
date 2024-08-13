const express = require('express');
const http = require('http');
const socketIo = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

const PORT = 4000;

let voltageData = [];
let currentData = [];
let powerData = [];
let powerFactorData = [];
let frequencyData = [];

// Simulate data updates every second
setInterval(() => {
    const newVoltage = Math.random() * 100 + 100;
    const newCurrent = Math.random() * 10;
    const newPower = newVoltage * newCurrent;
    const newPowerFactor = Math.random();
    const newFrequency = Math.random() * 2 + 48;

    voltageData.push(newVoltage);
    currentData.push(newCurrent);
    powerData.push(newPower);
    powerFactorData.push(newPowerFactor);
    frequencyData.push(newFrequency);

    if (voltageData.length > 100) {
        voltageData.shift();
        currentData.shift();
        powerData.shift();
        powerFactorData.shift();
        frequencyData.shift();
    }

    io.emit('updateData', {
        voltage: newVoltage,
        current: newCurrent,
        power: newPower,
        powerFactor: newPowerFactor,
        frequency: newFrequency
    });
}, 1000);

io.on('connection', (socket) => {
    socket.emit('initialData', {
        voltage: voltageData,
        current: currentData,
        power: powerData,
        powerFactor: powerFactorData,
        frequency: frequencyData
    });

    socket.on('requestData', (data) => {
        // Handle data request based on the range (data.range)
        // For simplicity, sending the same data
        socket.emit('initialData', {
            voltage: voltageData,
            current: currentData,
            power: powerData,
            powerFactor: powerFactorData,
            frequency: frequencyData
        });
    });
});

server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
