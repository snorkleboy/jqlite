function DOMNodeCollection(htmlArr){
  this.htmlArr = htmlArr;

  return this;
}

DOMNodeCollection.prototype.html = function(input){
  if (typeof input === 'string'){

    this.htmlArr.forEach( function(el){el.innerHTML = input;} );
    return this.htmlArr;

  }else if (typeof input === 'number'){
    return this.htmlArr[input].innerHTML;
  }else{
    return this.htmlArr[0].innerHTML;
  }
};

DOMNodeCollection.prototype.empty= function (){
  this.htmlArr.forEach(function(el){
    el.innerHTML="";
  });
};

DOMNodeCollection.prototype.append= functio   ){

  let callback = appendHelper(thing);
  this.htmlArr.forEach((el) => callback(el));

};
//.append helper
//this funciton returns a callback for the DOMNodeCOllection.apend to use on its htmlArray
//thing is the original parameter being appended and el is the html element being appended to
// if thing is htmlement this retunrs a function that appends thing to el
// if thing is string this retuns function that makes thing the inner html of el
//if thing is a domnodecollection it retuns an array that iterates through the thing and appends each element to el

function appendHelper(thing){
  if (thing instanceof HTMLElement){
    return (el)=>el.appendChild(thing);
  }
  else if (typeof(thing) === 'string'){
    return function(el) {
      let newel = window.document.createElement("div");
      newel.innerHTML=thing;
      el.appendChild(newel);
      // el.innerHTML += thing;
    };
  }
  else if (thing instanceof DOMNodeCollection ){
     return function(el){
         thing.htmlArr.forEach(function(collEl){
         el.appendChild(collEl);
       });
     };
  }
}

DOMNodeCollection.prototype.children(){
  let childarr=[];
  this.htmlArr.forEach( function(el){
    childarr.push(el.children);
  });
  return new DOMNodeCollection(childarr);
}

domNodeCollection.prototype.parent(){
  let parents=[];
  this.htmlArr.forEach( function(el){
    parents.push(el.parentNode);
  });
  return new domNodeCollection(parents);
}

domNodeCollection.prototype.find(selector){
  let children=[];
  this.htmlArr.forEach(function(el){
    children.concat(el.querySelectorAll(selector))
  });
  return children;
}


module.exports = DOMNodeCollection;
