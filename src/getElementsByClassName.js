// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
//input object
//output array of subElements 
var getElementsByClassName = function(className, doc) {
  if(doc === undefined){
    doc = document.body; 
  }
  var returner = []; 
  if (doc.className !== undefined){
    var ourClasses = doc.className.split(" ");
  } else {
    var ourClasses = [];
  }
  if (ourClasses.includes(className)){
    returner.push(doc);
  }
  if (doc.childNodes.length !== 0){
    for (var i=0; i<doc.childNodes.length; i++){
      returner = returner.concat(getElementsByClassName(className, doc.childNodes[i]));
    }
  }
  return returner;
};

//call it like myObject.getElementsByClassName("myClass");