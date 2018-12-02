const attrArr = [
  process,
  Buffer, 
  console, 
  setImmediate, 
  setTimeout, 
  setInterval, 
  clearImmediate, 
  clearTimeout, 
  clearInterval, 
  URL, 
  URLSearchParams,
]

function showAttr(attrArr) {
  attrArr.forEach((attr) => {
    console.log(attr)
  })
}

showAttr(attrArr);