const assert = require('assert')
const obj = {
  fn1: () => {
    console.log('222');
  }
}
debugger
assert(obj.fn1, '没有fn3这个函数');
console.log('111');
assert(obj.fn3, '没有fn3这个函数');
console.log('2');
