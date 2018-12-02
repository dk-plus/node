const url = require('url');

console.log(url)
console.log(URL === global.URL)
console.log(URLSearchParams === global.URLSearchParams)
console.log(URL === url.URL)
console.log(URLSearchParams === url.URLSearchParams)

/*
{ Url: [Function: Url],
  parse: [Function: urlParse],
  resolve: [Function: urlResolve],
  resolveObject: [Function: urlResolveObject],
  format: [Function: urlFormat],
  URL: [Function: URL],
  URLSearchParams: [Function: URLSearchParams],
  domainToASCII: [Function: domainToASCII],
  domainToUnicode: [Function: domainToUnicode] }
true
true
true
 */