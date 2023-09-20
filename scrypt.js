function activatelink(e){
    const element=e.target;
    element.classList.add("active");

    activeLink = element;

    const previousActiveLink = element.closest(".container-nav-bar-items").querySelector(".active");
    previousActiveLink.classList.remove("active");
}

const navLinks=document.querySelectorAll(".container-nav-bar-items");
navLinks.forEach((link)=>{
    link.addEventListener("click",activatelink);
})

