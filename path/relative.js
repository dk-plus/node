/**
 * 计算文件相对路径
 * 
 * usage：node relative.js [from] [to]
 * 输入：$ node relative.js 'egg-dev\app\controller\blogs.js' 'egg-dev\app\view\blogs.tpl'
 * 输出：../../view/blogs.tpl
 */
const path = require('path');

const [execPath, jsPath, ...pathArr] = process.argv;
const argsArr = pathArr.map(item => item.replace(/\\/g, '/'));

const finalPath = path.posix.relative(...argsArr);

console.log(finalPath);