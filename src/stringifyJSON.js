// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  if (typeof obj === 'boolean' || typeof obj === 'number') {
    return `${obj}`;
  } else if (typeof obj === 'string') {
    return `"${obj}"`;
  }  else if (obj === null) {
    return `null`;
  } else if (Array.isArray(obj)) {
    const output = [];
    for (let i = 0; i < obj.length; i++) {
      output.push(stringifyJSON(obj[i]));
    }
    return `[${output}]`;
  } else if (typeof obj === 'object') {
    const outputArray = [];
    for (let key in obj) {
      if (typeof obj[key] === 'function') {
        return `{}`;
      } else {
        let stringKey = stringifyJSON(key);
        let stringValue = stringifyJSON(obj[key]);
        outputArray.push(`${stringKey}:${stringValue}`);
      }
    }
    return `{${outputArray.join(',')}}`;
  }
};
