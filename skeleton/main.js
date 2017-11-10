const Router = require('./router.js');
document.addEventListener("DOMContentLoaded", function(event) {
  let arr = document.querySelectorAll('.sidebar-nav li');
  arr.forEach(function(el){
    el.addEventListener('click', function(e){
      window.location.hash = el.innerText.toLowerCase()+ "!@#$%^&*()?><`-*/`";
    });
  });
  let a =new Router(document.querySelector('.content'));
  a.start();
 });
