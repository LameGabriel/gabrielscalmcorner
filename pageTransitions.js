document.addEventListener('DOMContentLoaded', function() {
    console.log("JavaScript is loaded and running");

    // Selecting arrow buttons
    const arrows = {
        'up-arrow': { animation: 'slide-out-down', url: 'about.html' },
        'down-arrow': { animation: 'slide-out-up', url: 'third.html' },
        'left-arrow': { animation: 'slide-out-right', url: 'fifth.html' },
        'right-arrow': { animation: 'slide-out-left', url: 'fourth.html' }
    };

    // Adding event listeners to arrows
    Object.keys(arrows).forEach(arrowId => {
        const arrow = document.getElementById(arrowId);
        if (arrow) {
            arrow.addEventListener('click', function(event) {
                event.preventDefault();
                console.log(`${arrowId} clicked`);
                initiateSlide(arrows[arrowId].animation, arrows[arrowId].url);
            });
        }
    });

    // Function to initiate sliding animation
    function initiateSlide(animation, url) {
        console.log(`${animation} initiated`);
        document.body.classList.add(animation);
        setTimeout(function() {
            console.log(`Navigating to ${url}...`);
            window.location.href = url;
        }, 600);
    }
});
