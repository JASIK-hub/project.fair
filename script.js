const button = document.getElementById("icon");
const sidebar = document.getElementById("bar");

button.addEventListener ('click',()=>
    {sidebar.classList.toggle('active');
     button.classList.toggle('active');})
