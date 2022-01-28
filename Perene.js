const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.topbar-ul');
    const navLinks = document.querySelectorAll('.topbar-hiper li');
    //toggle

    burger.addEventListener('click',()=>{
        nav.classList.toggle('navActive');
        
//animate the hipers
        navLinks.forEach((link, index) => {
            if (link.style.animation){
                 link.style.animation = '';
            }
            else{
             link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 1.5}s`;
            }
         });
         burger.classList.toggle('toggle');
    });

}

navSlide();

