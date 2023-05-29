const toggleMenu=document.querySelector(".toggleMenu");
const sidebar=document.querySelector(".sidebar");
toggleMenu.addEventListener("click",()=>{
    sidebar.classList.toggle("open");
});
const list =document.querySelectorAll(".list");
function activeLink(){
    list.forEach((item)=>
        item.classList.remove("active"));
    this.classList.add("active");
    }
list.forEach((item)=>
    item.addEventListener("click",activeLink));