// this is what you would do if you were one to do things the easy way:
// var parseJSON = JSON.parse;

// but you're not, so you'll write it from scratch:
var parseJSON = function(json) {
  if (json === '[]') {
    return [];
  }
  if (json[0] === '[' && json[json.length - 1 ] === ']') {
    var returner = [];
    returner = returner.concat(json.split(','));
  }
  if (json === '{}') {
    return {};
  }
  if (json[0] === '{' && json[json.length - 1 ] === '}') {
    var returner = {};
    // holder array that is json split on :
    // example {"one": 1, "two": 2};
    // becomes ["one", "1, 'two'", "2"];
    // then split each element on ,
    // becomes ["one", "1", "two", "2"];
    var holder1 = json.split(':');
    console.log('holder1 is ' + holder1);
    var holder2 = [];
    if (json.length > 2) {
      for (var i = 0; i < holder1.length; i++) {
        var myElem = holder1[i].split(',');
        // for (var j = 0; j < myElem.length; j++) {
        //   myElem[j] = myElem[j].slice(2, myElem[j].length - 2);
        // }
        console.log('holder2 is in the loop and is ' + holder2);
      }
      //holder2[0] = holder2[0].slice(1, holder2[0].length -1);
      console.log('holder2 is ' + holder2);
      for (var j = 0; j < holder2.length; j += 2) {
        returner[holder2[j]] = holder2[j + 1];
        console.log('returner is ' + JSON.stringify(returner));
        // set the key "one" equal to the value "1" in returner
      }
      //alert(returner); 
    }
    returner = holder2;
  }
  return returner;
};
