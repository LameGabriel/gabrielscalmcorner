// Add event listener to fade out and redirect to the main page
document.getElementById("main-page").addEventListener("click", function() {
    // Fade out the page by setting the opacity to 0
    document.getElementById("main-page").style.opacity = '0';

    // Wait for the fade-out animation to complete before redirecting (2 seconds)
    setTimeout(function() {
        window.location.href = "Main.html"; // Replace with your actual next page URL
    }, 2000); // 2000ms delay matches the CSS transition duration
});

