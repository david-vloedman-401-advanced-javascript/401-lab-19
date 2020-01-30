'use strict';

const io = require('socket.io')(3001);

const queues = {
  acme: new Array(),
  flowers: new Array(),
};

io.on('connection', socket => {
  console.log(`Connected on ${socket.id}`);
});

const deliveries = io.of('/deliveries');

deliveries.on('connection', socket => {
  console.log('Delivery channel', socket.id );

  socket.on('join', room => {    
    socket.join(room);
    console.log('joined', room);    
    deliveries.to(room).emit('anything', queues[room]);    
  });

  

  socket.on('received', payload => {    
    switch (payload) {
    case 'acme':
      queues.acme.shift();
      
      return;
    case 'flowers':
      queues.flowers.shift();      
      return;
    }
    
  });


  socket.on('deliveryIn', payload => {
    console.log('delivery');
    switch(payload.retailer){
    case 'acme':
      queues.acme.push(payload);      
      socket.to('acme').emit('delivery', payload);
      return;
    case 'flowers':
      queues.flowers.push(payload);      
      socket.to('flowers').emit('delivery', payload);
      return;
    }
  });

});













