## url模块

url模块需要`require`引入，而`url`模块下的`URL`和`URLSearchParams`则是全局变量，并且全等于`global`下的`URL`和`URLSearchParams`。

```javascript
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
true
 */
```

所以我们同样可以使用`const { URL, URLSearchParams } = require('url');`引入`URL`和`URLSearchParams`。

## url.parse 和 URL

### 创建的对象

> `url.parse`是node遗留的特有API，`URL`则是实现了`WHATWG URL Standard`的API，在浏览器也同样通用。

我们在[例2](./example_2.js)中展现他们结果的区别：

```javascript
const url = require('url');

let url_1 = 'http://user:pass@baidu.com:8080/p/a/t/h?param=abc&search=123#L123';

let urlObj = new URL(url_1);
console.log(urlObj);

console.log(url.parse(url_1));
```

区别如下：

```txt
┌─────────────────────────────────────────────────────────────────────────────────────────────┐
│                                            href                                             │
├──────────┬──┬─────────────────────┬─────────────────────┬───────────────────────────┬───────┤
│ protocol │  │        auth         │        host         │           path            │ hash  │
│          │  │                     ├──────────────┬──────┼──────────┬────────────────┤       │
│          │  │                     │   hostname   │ port │ pathname │     search     │       │
│          │  │                     │              │      │          ├─┬──────────────┤       │
│          │  │                     │              │      │          │ │    query     │       │
"  https:   //    user   :   pass   @ sub.host.com : 8080   /p/a/t/h  ?  query=string   #hash "
│          │  │          │          │   hostname   │ port │          │                │       │
│          │  │          │          ├──────────────┴──────┤          │                │       │
│ protocol │  │ username │ password │        host         │          │                │       │
├──────────┴──┼──────────┴──────────┼─────────────────────┤          │                │       │
│   origin    │                     │       origin        │ pathname │     search     │ hash  │
├─────────────┴─────────────────────┴─────────────────────┴──────────┴────────────────┴───────┤
│                                            href                                             │
└─────────────────────────────────────────────────────────────────────────────────────────────┘
```

### new URL参数

`new URL(input[, base])`接受两个参数，其中`base`可选，当`base`存在时，`input`则是相对路径。

```javascript
console.log(new URL('/p/a/t/h?params=987#123','http://baidu.com'));
/*
URL {
  href: 'http://baidu.com/p/a/t/h?pa=987#123',
  origin: 'http://baidu.com',
  protocol: 'http:',
  username: '',
  password: '',
  host: 'baidu.com',
  hostname: 'baidu.com',
  port: '',
  pathname: '/p/a/t/h',
  search: '?pa=987',
  searchParams: URLSearchParams { 'pa' => '987' },
  hash: '#123' }
*/
```

### 对象的读写接口

> 当你试图改变`url.parse`或`URL`的属性时，你就会发现他们实质的区别。

`url.parse`的对象是一个纯粹对象，对象里的属性不会相互联动，比如你改变`hostname`并不会同时改变它的`host`属性。

而`URL`则更像是一个整体，内部的属性是会相互联动的。我们在[例3](./example_3.js)中探讨这些区别。

```javascript
let url_1 = 'http://user:pass@baidu.com:8080/p/a/t/h?param=abc&search=123#L123';

let urlObj = new URL(url_1);
urlObj.host = 'google.com';
console.log(urlObj);
// 'http://user:pass@google.com:8080/p/a/t/h?param=abc&search=123#L123'
```

#### 只读字段

同时，我们看到，试图直接修改`searchParams`属性是不会成功的，你只有在改变`search`字段时才能改变它。同样的情况也出现在`origin`字段，单独修改`origin`字段的值是不会成功的。

#### protocol

而`protocol`字段也不是什么都能改的：
- 当`protocol`初始值是有意义的，如`http:`，那么它不能变成无意义的，比如`fish`；
- 当`protocol`初始值是无意义的，如`fish:`，那么它也不能变成有意义的；

但这种情况只存在于node，浏览器的`protocol`还是会随着设置改变。

```javascript
let urlObj = new URL('http://baidu.com');
urlObj.protocol = 'fish:';
console.log(urlObj);

urlObj = new URL('fish://baidu.com');
urlObj.protocol = 'http:';
console.log(urlObj);
```

## URLSearchParams

> `URLSearchParams`更多是给予用户访问和操作查询参数的方法。

### new URLSearchParams构造函数

此构造函数接收3种参数：`string`字符串、`object`对象、`iterable`可迭代。详情看[例4](./example_4.js)。

### URLSearchParams方法

`URLSearchParams`提供了一系列方法增删查的方法，包括`append`，`delete`，`set`，`get`，`getAll`，`has`，同时提供了`iterable`的接口`entries`，`keys`，`value`，另外还有排序方法`sort`。

#### append和set

需要注意的是`set`相当于重置，而`append`会附加一对新的键值对。

```javascript

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
```

这时候`get`只会拿到第一个键值对的值，而`getAll`会拿到所有键值对的值的数组。

其他详情看[例5](./example_5.js)。