const mainPage = document.getElementById("main-page");

mainPage.addEventListener("click", function() {
    mainPage.style.opacity = '0';

    setTimeout(function() {
        window.location.href = "Main.html"; 
    }, 2000); 
});
