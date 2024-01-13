// type cache = {
//   [key: string] : string
// }

interface cache {
  [key: string]: string;
}

//implementation 1
function memo(fn: Function) {
  const cache: cache = {};
  return function (arg: string): string {
    const property = JSON.stringify(arg);
    const hasProperty = cache.hasOwnProperty(property);

    let result: string;

    if (hasProperty) {
      console.info('This is cached');
      result = cache[property]
    } else {
      const output = fn(arg);
      cache[property] = output;
      result = output;
    };

    return result;
  }
}

function log(msg: string = ''): string {
  return msg;
}

const memoLog: Function = memo(log);
console.log(memoLog('123'));
console.log(memoLog('1234'));
console.log(memoLog('Hello is this also cached'));
console.log(memoLog('Hello is this also cached'));