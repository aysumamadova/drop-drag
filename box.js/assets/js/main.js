let box=document.querySelector(".box");
let fruit=document.querySelector(".fruit");
let vegetables=document.querySelector(".vegetables");
let ap=document.querySelector(".ap");
let st=document.querySelector(".st");
let pi=document.querySelector(".pi");
let to=document.querySelector(".to");
let so=document.querySelector(".so");
let bi=document.querySelector(".bi");


fruit.ondragover=function(e){
    e.preventDefault();
}
fruit.ondrop=function(){
    fruit.append(ap)
}
fruit.ondragover=function(e){
    e.preventDefault();
}
fruit.ondrop=function(){
    fruit.append(pi)
}
fruit.ondragover=function(e){
    e.preventDefault();
}
fruit.ondrop=function(){
    fruit.append(st)
}


vegetables.ondragover=function(e){
    e.preventDefault();
}
vegetables.ondrop=function(){
    vegetables.append(veg)
}