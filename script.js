const navbtn=document.getElementById('nav.btn');
const cancelbtn =document.getElementById('cancel.btn');
const sidebtn =document.getElementById('side.btn');
const modal =document.getElementById('modal');

navbtn.addEventListener("click",function(){
    sideNav.classlist.add('show');
    modal.classList.add("shortModal");
});

window.addEventListener('click',function(event){
    if(event.target===modal){
        sideNav.classList.remove('show');
        modal.classList.remove('showModal');
    }
});
