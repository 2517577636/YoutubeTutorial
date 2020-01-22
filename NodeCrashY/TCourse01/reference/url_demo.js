const url = require("url");

/**
 * Note: module url provide two differents apis to deal with the url.the 
 * one of is the old api,the other is the WHATWG New API.
 * 
 * old api: 
 * const myURL = url.parse('https://user:pass@sub.host.com:8080/p/a/t/h?query=string#hash');
 * 
 * WHATWG: 
 * const myURL = new URL('https://user:pass@sub.host.com:8080/p/a/t/h?query=string#hash');
 * 
 * WHATWG's origin attribute contains protocal and host, but it doesn't contain username and password.
 */

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
console.log("searchParams: " + myUrl.searchParams);

// Loop through param
myUrl.searchParams.forEach((value, name) => {
    console.log(`${name}: ${value}`);
})
