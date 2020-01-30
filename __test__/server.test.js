'use strict';

const {server} = require('../lib/cfps-server');

const superTest = require('supertest');

//const mock = superTest(server);


xdescribe('Testing the HTTP server', ()=>{

  it('should be able to hit the route with flowers', (done)=>{
    return mock.post('/deliveries/flowers/123')
      .then(res => {
        expect(res.status).toBe(200);
        done();
      });
  });

  it('should be able to hit the route with acme', (done)=>{
    return mock.post('/deliveries/acme/4321')
      .then(res => {
        expect(res.status).toBe(200);
        done();
      });
  });
});