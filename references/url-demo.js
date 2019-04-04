const url = require('url');

const myUrl = new URL('http://mywebsite.com:8000/hello.html?id=100&status=active');

// Serialised URL
console.log(myUrl.href);

// Host (domain name)
console.log(myUrl.host);

// Hostname
console.log(myUrl.hostname);

// Pathname
console.log(myUrl.pathname);

// Serialised query
console.log(myUrl.search);

// Parameters object
console.log(myUrl.searchParams);

// Add params
myUrl.searchParams.append('abc', '123');

// Loop through params
myUrl.searchParams.forEach((value, name) => console.log(`${name}: ${value}`));
