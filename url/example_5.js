const { URL, URLSearchParams } = require('url');

const paramObj = new URLSearchParams({
  params: [1,2],
  search: 123,
  option: {
    a: 'hhh',
    b: 'xxx'
  }
});
console.log(paramObj.toString());
// params = 1 % 2C2 & search=123 & option=% 5Bobject + Object % 5D

paramObj.append('search', 456);
console.log(paramObj.toString());
// params = 1 % 2C2 & search=123 & option=% 5Bobject + Object % 5D & search=456

paramObj.delete('params');
console.log(paramObj.toString());
// search = 123 & option=% 5Bobject + Object % 5D & search=456

paramObj.set('search', 789);
console.log(paramObj.toString());
// search = 789 & option=% 5Bobject + Object % 5D

console.log(paramObj.get('search'));
console.log(paramObj.getAll('search'));
// 789
// ['789']
paramObj.append('search', 456);
console.log(paramObj.get('search'));
console.log(paramObj.getAll('search'));
// 789
// ['789', '456']

console.log(paramObj.has('search'));
console.log(paramObj.has('search_1'));
// true
// false

paramObj.sort();
console.log(paramObj.toString());
console.log(paramObj.getAll('search'));
// option =% 5Bobject + Object % 5D & search=789 & search=456
// ['789', '456']

console.log(paramObj.entries());
// URLSearchParams Iterator {
//   ['option', '[object Object]'],
//     ['search', '789'],
//     ['search', '456']
// }

console.log(paramObj.keys());
// URLSearchParams Iterator { 'option', 'search', 'search' }

console.log(paramObj.values());
// URLSearchParams Iterator { '[object Object]', '789', '456' }