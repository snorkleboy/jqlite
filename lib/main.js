const domNodeCollection = require ('./dom_node_collection.js');


window.$l = function (input){
  if (typeof input === 'string'){
    let objects = document.querySelectorAll(input);
    return new domNodeCollection(objects);
  }else{
    return new domNodeCollection([input]);
  }

};

window.$l.prototype.extends = function (){
  let arr=[];
  arguments.eachFor(function(el){
    for (let i=0;i<el.htmlArr.length;i++){
      let temp=el.htmlArr[i];
      if ( !arr.includes(temp) ) arr.push(temp);
    }
  });
  return arr;
};
