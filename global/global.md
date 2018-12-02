### global笔记

> global是node里的全局对象，类似浏览器里的window对象。
- 但浏览器的JavaScript由DOM、BOM、ECMAscript组成，比起node多出了DOM、BOM这些的相关属性和方法。
- 而node也同样拥有浏览器不具备的全局属性，比如Buffer、setImmeadiate等。
所以node和浏览器JavaScript两者互为相交关系。

我们主要讨论node。

## 全局变量有哪些

我们在node交互命令行里输入`global`，输出了一堆东西，但我们不难发现，global直属的属性只有process、Buffer、console、setImmediate、setTimeout、setInterval、clearImmediate、clearTimeout、clearInterval、URL、URLSearchParams。

我们大致列举一下这些属性的作用：
- `process`：提供 Node.js 进程的有关信息以及控制进程。
- `Buffer`：用于在 TCP 流或文件系统操作等场景中处理字节流。
- `console`：类似于 Web 浏览器提供的 JavaScript 控制台。
- `setImmediate`：预定立即执行的 `callback`，它是在 I/O 事件的回调之后被触发。 返回一个用于 `clearImmediate()` 的 `Immediate`。
- `setTimeout`：预定在 `delay` 毫秒之后执行的单次 `callback`。 返回一个用于 `clearTimeout()` 的 `Timeout`。
- `setInterval`：预定每隔 `delay` 毫秒重复执行的 `callback`。 返回一个用于 `clearInterval()` 的 `Timeout`。
- `clearImmediate`：取消一个由 `setImmediate()` 创建的 Immediate 对象。
- `clearTimeout`：取消一个由 `setTimeout()` 创建的 Timeout 对象。
- `clearInterval`：取消一个由 `setInterval()` 创建的 Timeout 对象。
- `URL`：浏览器兼容的 `URL` 类，根据 `WHATWG URL` 标准实现。
- `URLSearchParams`：`URLSearchParams`API接口提供对`URLquery`部分的读写权限。