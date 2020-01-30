'use strict';

const io = require('socket.io-client');

const deliveries = io.connect('http://localhost:3001/deliveries');

deliveries.emit('join', 'flowers');

deliveries.on('anything', payload => {
  payload.forEach(msg => {
    console.log(msg);
    deliveries.emit('recieved', 'acme');
  });
});

deliveries.on('delivery', payload => {  
  console.log(payload);
  deliveries.emit('received', 'flowers');
});
