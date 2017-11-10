function Router(node){
  this.node=node;
}

Router.prototype.start = function(){
  this.render();
  this.node.addEventListener("hashchange", function(event){
    this.render();
  }.bind(this));
};

Router.prototype.render= function(){
  this.node.innerHTML="";
  let activeroute= this.activeRoute();
  let newE = document.createElement('p');
  newE.innerHTML=activeroute;
  this.node.apendChild(newE);
};

Router.prototype.activeRoute= function(){
  return window.location.hash.substr(1);
};

module.exports = Router;
