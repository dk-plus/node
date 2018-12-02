const { URL, URLSearchParams } = require('url');

// 字符串
let paramString = '';
paramString = '?search=123&param=jkl';
paramString = 'search=123&param=jkl';
console.log(new URLSearchParams(paramString).toString());
// search = 123 & param=jkl

// 对象
let paramObj = {
  searchs: 456,
  params: 'qwe'
};
console.log(new URLSearchParams(paramObj).toString());
// searchs = 456 & params=qwe

// 可迭代
// 数组
let paramArr = [
  ['param', 'lmn'],
  ['search', 'hhh']
];
console.log(new URLSearchParams(paramArr).toString());
// param = lmn & search=hhh

// map
let paramMap = new Map();
paramMap.set('param', 'asd');
paramMap.set('search', 789);
console.log(new URLSearchParams(paramMap).toString());
// param = asd & search=789

// generator
function* getParamPair() {
  yield ['param', 'xxx'];
  yield ['search', 'yyy'];
}
console.log(new URLSearchParams(getParamPair()).toString());
// param = xxx & search=yyy