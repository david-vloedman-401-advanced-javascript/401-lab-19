'use strict';

/**
 * @class
 */
class Node {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
}



/**
 * A class for creating a queue object
 * @class
 */
class Queue {
  constructor(){
    this.front = null;
    this.rear = null;
  }

  /**
   * Add a node to the end of the queue
   * @param {*} node 
   */
  enqueue(val){
    const node = new Node(val);        
    if(this.isEmpty()){
      this.front = node;
      this.rear = node;      
      return;
    }
    
    this.rear.next = node;   
    this.rear = node;
  }

  /**
   * Remove a node from the front of the queue
   * @return val
   */
  dequeue(){    
    const node = this.front;
    if(this.front === null){
      return null;
    }
    this.front = this.front.next;
    this.rear = null;
    
    return node.val;
  }

  /**
   * Returns the value of the node next in queue without changing it's position in the queue
   * @return val
   */

  peek(){
    return this.isEmpty()? null : this.front.val;    
  }

  /**
   * Checks to see if the queue is empty
   * @return bool
   */
  isEmpty(){
    return (this.front === null);
  }
}

module.exports = Queue;