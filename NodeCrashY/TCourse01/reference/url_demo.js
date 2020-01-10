const url = require("url");

const myUrl = new URL("http://myWebsite.com:8080/hello.html?id=100&status=active");

// Serialized URL
console.log(myUrl.href);
console.log(myUrl.toString());

/** 
 * Note: Host and hostname will be return the same as result, if the url do not 
 * set port. The result of host contain port. This is only difference between
 * the host and the hostname. 
*/
// Host (root domain)
console.log(myUrl.host);
// Hostname (does not get port)
console.log(myUrl.hostname);
// Pathname
console.log(myUrl.pathname);
// Serialized query
console.log(myUrl.search);
// Params Object
console.log(myUrl.searchParams);
// Add param
myUrl.searchParams.append("abc", "123456");
console.log(myUrl.searchParams);
// Loop through param
myUrl.searchParams.forEach((value, name) => {
    console.log(`${name}: ${value}`);
})
