/**
 * Note: every file all is a module,and it is a execute function immediately.
 * it contains 5 formal parameters.which are 
 * exports
 * require
 * module
 * __filename
 * __dirname 
 */
console.log(arguments.callee + " ");
console.log(module);

