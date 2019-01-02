# path学习笔记

> path 模块是一个相对简单的模块。

## 系统差异

### posix 和 win32

> path 模块会因操作系统的差异而不同。因此想在 windows 系统得到 posix 效果的可以使用 `path.posix`，反之亦然。

### sep 和 delimiter

> posix 和 windows 会有不同的结果。比如 windows 的路径分割是`\`，环境变量的分割是`;`。

```javascript
console.log(path.win32.sep);
// \ 
console.log(path.posix.sep);
// / 

console.log(path.win32.delimiter);
// ; 
console.log(path.posix.delimiter);
// : 
```

## format 和 parse

> path.format 和 path.parse 类似 JSON 的 stringify 和 parse。了解了这个就基本知道路径是怎么组成的了。

我们先看一个图：

```txt
┌─────────────────────┬────────────┐
│          dir        │    base    │
├──────┬              ├──────┬─────┤
│ root │              │ name │ ext │
"  /    home/user/dir / file  .txt "
└──────┴──────────────┴──────┴─────┘
```

这个图已经很好的诠释了路径的组成，下面我们用代码实现：

我们使用 `path.format`的时候，对象参数会有优先级，上图第一层的 `dir`和`base` 优先级较高，如果设置了这一层的参数，第二层的参数会被忽略：

```javascript
console.log(path.posix.format({
  root: '/ignore/',
  dir: 'foo/bar',
  base: 'index.html',
  name: 'ignore',
  ext: '.ignore'
}));
// foo/bar/index.html
```

`path.parse` 的使用很简单：

```javascript
console.log(path.parse('/foo/bar/xxx/yyy.html'));
/*
{ root: '/',
  dir: '/foo/bar/xxx',
  base: 'yyy.html',
  ext: '.html',
  name: 'yyy' }
*/
```

## basename、dirname、extname

> 知道 `path.parse` 后这几个属性就很简单的了。

```javascript
console.log(path.basename('C:\\temp\\myfile.html'));
// myfile.html

console.log(path.dirname('/foo/bar/abc/hi.txt'));
// /foo/bar/abc

console.log(path.extname('foo/bar/abc.txt'));
// .txt
```

## 绝对路径、相对路径

> 和绝对路径有关的是 `path.isAbsolute` 和 `path.resolve`，和相对路径有关的是 `path.relative`，顺便也讲一讲 `path.join`。

windows 的绝对路径类似 `C:\\` 开头，而 posix 的则是 `/`开头。

`path.resolve` 会返回一个绝对路径：

```javascript
console.log(path.resolve('wwwroot','public/js','..','statics/abc.png'));
// D:\github\node\path\wwwroot\public\statics\abc.png
```

而 `path.join` 则会拼接参数，返回拼接后的结果：

```javascript
console.log(path.posix.join('/foo','/bar/xxx','yyy'));
console.log(path.posix.join('/foo','/bar/xxx','yyy','.'));
console.log(path.posix.join('/foo','/bar/xxx','yyy','..'));
console.log(path.posix.join('/foo','/bar/xxx','yyy','../..'));
console.log(path.posix.join('/foo','/bar/xxx','..','yyy'));
console.log(path.posix.join('/foo','/bar/xxx','../..','yyy'));
// /foo/bar/xxx/yyy
// /foo/bar/xxx/yyy
// /foo/bar/xxx
// /foo/bar
// /foo/bar/yyy
// /foo/yyy
```

`path.relative(from, to)` 则会返回 `to` 相对于 `from` 的相对路径。

```javascript
console.log(path.relative('src/model/index.js', 'src/util/util.js'));
// ..\..\util\util.js
```