const path = require('path');

// Base file name 
console.log(path.basename(__filename));

// Directory name 
console.log(path.dirname(__filename));

// File extension 
console.log(path.extname(__filename));

// Create path Object
console.log(path.parse(__filename));

// Return path, the oppsite of the path.parse 
console.log(path.format(path.parse(__filename)));
 
// Return an absolute path,from right to left.
console.log(path.resolve());

// Return a relative path from first path to second path
console.log(path.relative());
 