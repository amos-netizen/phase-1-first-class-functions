// index.js

function receivesAFunction(callback) {
    callback();
  }
  
  function returnsANamedFunction() {
    return function namedFunction() {
      // Named function logic
    };
  }
  
  function returnsAnAnonymousFunction() {
    return function() {
      // Anonymous function logic
    };
  }
  
  module.exports = {
    receivesAFunction,
    returnsANamedFunction,
    returnsAnAnonymousFunction
  };
  
