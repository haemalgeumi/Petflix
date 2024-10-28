// export function lightAndDarkMode(){
//     document.querySelector(".header__mode").addEventListener("click",function(){
//     document.querySelector(".thumbs__wrapper").classList.toggle("dark-mode");
//     document.querySelector("header").classList.toggle("dark-mode");
//     document.querySelector(".nav__wrapper").classList.toggle("dark-mode");
//     })
// }
export function lightAndDarkMode(){
    document.querySelector(".header__mode").addEventListener("click", function(){
        event.stopPropagation();
        document.body.classList.toggle("dark-mode");
    });
}