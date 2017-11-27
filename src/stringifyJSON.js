// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  var returner = '';
  var types = ['boolean', 'number', 'undefined'];
  if (typeof obj === 'function') {
    return '{}';
  }
  if (types.includes(typeof obj)) {
    return '' + obj;
  }
  if (typeof obj === 'string') {
    return '"' + obj + '"';
  }
  if ( obj === null) {
    return 'null';
  }
  if (Array.isArray(obj)) {
    returner = '[' + returner;
    for (var i = 0; i < obj.length; i++) {
      returner += stringifyJSON(obj[i]);
      returner += ',';
    }
    if (returner.length > 2) {
      returner = returner.slice(0, -1);
    }
    returner = returner + ']';
  }
  if (typeof obj === 'object' && !Array.isArray(obj)) {
    returner += '{';
    for (key in obj) {
      if (typeof obj[key] === 'function') {
        return '{}';
      }
      returner += '' + stringifyJSON(key) + ':' + stringifyJSON(obj[key]) + ',';
    }
    if (returner.length > 2) {
      returner = returner.slice(0, -1);
    }
    returner += '}';
  }
  return returner;
};