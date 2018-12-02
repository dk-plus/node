// const { URL, URLSearchParams } = require('url');
const url = require('url');

let url_1 = 'http://user:pass@baidu.com:8080/p/a/t/h?param=abc&search=123#L123';

const obj = {
  // href: 'https://user1:pass1@yahoo.com:7005/a/b/c?params=kkk&searchs=456#L321',
  // origin: 'http://yahoo.com:7005',
  protocol: 'https:',
  username: 'dkplus',
  password: 'pwd',
  // host: 'yahoo.com:7005',
  hostname: 'google.com',
  port: '7001',
  pathname: '/a/b/c',
  search: '?params=efg&searchs=456',
  searchParams: { 
    'param': 'hhh',
    'search': 'nnn' 
  },
  hash: '#L789' 
}
let urlObj = new URL(url_1);
// let urlObj = url.parse(url_1);

console.log(urlObj)
Object.entries(obj).forEach((array) => {
  urlObj[array[0]] = array[1];
});
console.log(urlObj)
