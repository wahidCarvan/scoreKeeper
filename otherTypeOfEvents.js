// selecting the all the lis
var lis =document.querySelectorAll('li');
// looping through the lis
for(var i = 0; i< lis.length;i++){
lis[i].addEventListener("mouseover", function(){
  this.classList.add("selected");
});
lis[i].addEventListener("mouseout",function(){
this.classList.remove("selected");
});
lis[i].addEventListener("click", function(){
this.classList.toggle("done");
});
}
