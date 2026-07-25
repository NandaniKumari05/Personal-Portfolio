// Portfolio Website JavaScript

// Page load message
console.log("Portfolio Website Loaded Successfully");


// Smooth scrolling for navigation links

document.querySelectorAll("nav a").forEach(link => {

    link.addEventListener("click", function(e){

        e.preventDefault();

        let section = document.querySelector(
            this.getAttribute("href")
        );

        section.scrollIntoView({
            behavior:"smooth"
        });

    });

});