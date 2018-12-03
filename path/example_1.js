const path = require('path');

console.log(path);

console.log(path.basename('C:\\temp\\myfile'));
console.log(path.basename('C:\\temp\\myfile.html'));
console.log(path.win32.basename('C:\\temp\\myfile.html'));
console.log(path.posix.basename('C:\\temp\\myfile.html'));
console.log(path.basename('C:\\temp\\myfile.html', '.html'));
// myfile
// myfile.html
// myfile.html
// C:\temp\myfile.html
// myfile

console.log(path.delimiter);
console.log(path.win32.delimiter);
console.log(path.posix.delimiter);
// ; 
// ; 
// : 

console.log(path.dirname('foo/bar/abc'));
console.log(path.dirname('/foo/bar/abc'));
console.log(path.dirname('/foo/bar/abc/hi.txt'));
// foo/bar
// /foo/bar
// /foo/bar/abc

console.log(path.extname('foo/bar/abc'));
console.log(path.extname('foo/bar/abc.txt'));
console.log(path.extname('foo/bar/abc.txt.html'));
console.log(path.extname('foo/bar/abc.'));
console.log(path.extname('.foo'));
//
// .txt
// .html
// .   
//

console.log(path.posix.format({
  root: '/ignore/',
  dir: 'foo/bar',
  base: 'index.html',
  name: 'ignore',
  ext: '.ignore'
}));
console.log(path.format({
  root: '\\ignore\\',
  dir: 'foo\\bar\\',
  base: 'index.html',
  name: 'ignore',
  ext: '.ignore'
}));
console.log(path.format({
  root: '\\xxx\\',
  base: 'index.html',
  name: 'ignore',
  ext: '.ignore'
}));
console.log(path.format({
  root: '\\xxx\\',
  name: 'foo',
  ext: '.txt'
}));
// foo/bar/index.html
// foo\bar\\index.html
// \xxx\index.html
// \xxx\foo.txt

console.log(path.isAbsolute('/foo/bar'));
console.log(path.isAbsolute('//foo/bar'));
console.log(path.isAbsolute('./foo/bar'));
console.log(path.isAbsolute('foo/bar'));
// true
// true
// false
// false

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

console.log(path.posix.normalize('foo\\bar\\index.html'));
console.log(path.posix.normalize('foo//bar\\index.html'));
// foo\bar\index.html
// foo/bar\index.html

console.log(path.parse('/foo/bar/xxx/yyy.html'));
console.log(path.parse('foo/bar/xxx/yyy.html'));
console.log(path.parse('foo/bar/xxx\\yyy.html'));
// { root: '/',
//   dir: '/foo/bar/xxx',
//   base: 'yyy.html',
//   ext: '.html',
//   name: 'yyy' }

// { root: '',
//   dir: 'foo/bar/xxx',
//   base: 'yyy.html',
//   ext: '.html',
//   name: 'yyy' }

// { root: '',
//   dir: 'foo/bar/xxx',
//   base: 'yyy.html',
//   ext: '.html',
//   name: 'yyy' }

/*
┌─────────────────────┬────────────┐
│          dir        │    base    │
├──────┬              ├──────┬─────┤
│ root │              │ name │ ext │
"  /    home/user/dir / file  .txt "
└──────┴──────────────┴──────┴─────┘
 */

console.log(path.relative('src/model/index.js', 'src/util/util.js'));
// ..\..\util\util.js

console.log(path.resolve('wwwroot','public/js','..','statics/abc.png'));
// D:\github\node\path\wwwroot\public\statics\abc.png

console.log(path.sep);
console.log(path.win32.sep);
console.log(path.posix.sep);
// \ 
// \ 
// / 

console.log(path.toNamespacedPath('D:\\github\\node\\path\\wwwroot\\public\\statics\\abc.png'));