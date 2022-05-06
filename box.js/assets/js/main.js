let ap=document.getElementById("ap");
let st=document.getElementById("st");
let pi=document.getElementById("pi");
let to=document.getElementById("to");
let so=document.getElementById("so");
let ke=document.getElementById("ke");
let dragItem=null;

ap.addEventListener("dragstart",function(e){
    e.dataTransfer.setData("fruitId",this.id);
})
st.addEventListener("dragstart",function(e){
    e.dataTransfer.setData("fruitId",this.id);
})
pi.addEventListener("dragstart",function(e){
    e.dataTransfer.setData("fruitId",this.id);
})
document.querySelectorAll(".fruit").forEach(area=>{
    area.addEventListener("dragover",function(e){
        e.preventDefault();
    })
})
document.querySelectorAll(".fruit").forEach(area=>{
    area.addEventListener("drop",function(e){
        let data = e.dataTransfer.getData("fruitId");
        this.appendChild(document.getElementById(data));
    })
})

to.addEventListener("dragstart",function(e){
    e.dataTransfer.setData("vegetablesId",this.id);
})
so.addEventListener("dragstart",function(e){
    e.dataTransfer.setData("vegetablesId",this.id);
})
ke.addEventListener("dragstart",function(e){
    e.dataTransfer.setData("vegetablesId",this.id);
})
document.querySelectorAll(".vegetables").forEach(area=>{
    area.addEventListener("dragover",function(e){
        e.preventDefault();
    })
})
document.querySelectorAll(".vegetables").forEach(area=>{
    area.addEventListener("drop",function(e){
        let data = e.dataTransfer.getData("vegetablesId");
        this.appendChild(document.getElementById(data));
    })
})
function Drop(){
    this.append(dragItem)
}