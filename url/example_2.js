// const { URL, URLSearchParams } = require('url');
const url = require('url');

let url_1 = 'http://user:pass@baidu.com:8080/p/a/t/h?param=abc&search=123#L123';

let urlObj = new URL(url_1);
console.log(urlObj)
/*
URL {
  href:
   'http://user:pass@baidu.com:8080/p/a/t/h?param=abc&search=123#L123',
  origin: 'http://baidu.com:8080',
  protocol: 'http:',
  username: 'user',
  password: 'pass',
  host: 'baidu.com:8080',
  hostname: 'baidu.com',
  port: '8080',
  pathname: '/p/a/t/h',
  search: '?param=abc&search=123',
  searchParams: URLSearchParams { 'param' => 'abc', 'search' => '123' },
  hash: '#L123' }
 */

console.log(url.parse(url_1))
/*
Url {
  protocol: 'http:',
  slashes: true,
  auth: 'user:pass',
  host: 'baidu.com:8080',
  port: '8080',
  hostname: 'baidu.com',
  hash: '#L123',
  search: '?param=abc&search=123',
  query: 'param=abc&search=123',
  pathname: '/p/a/t/h',
  path: '/p/a/t/h?param=abc&search=123',
  href:
   'http://user:pass@baidu.com:8080/p/a/t/h?param=abc&search=123#L123' }
 */