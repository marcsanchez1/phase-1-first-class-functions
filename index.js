// Create a function that accepts a callback as a parameter the calls back the callback function
const receivesAFunction = (cb) => {
  cb()
}

// Create a function that take no arguments but returns the named function
const returnsANamedFunction = () => {
  return returnsANamedFunction;
}

// Create an anonymous function that takes no arguments and returns an anonymous function
const returnsAnAnonymousFunction = () => {
  return () => { };}