/* script.js */

document.addEventListener("DOMContentLoaded", () => {
    const navLinks = document.querySelectorAll("nav ul li a");
    navLinks.forEach(link => {
        link.addEventListener("click", (event) => {
            if (link.getAttribute("href").startsWith("#")) {
                event.preventDefault();
                const targetId = link.getAttribute("href").substring(1);
                const targetElement = document.getElementById(targetId);
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 50,
                        behavior: "smooth"
                    });
                }
            }
        });
    });

        document.addEventListener("DOMContentLoaded", function () {
        const menuToggle = document.querySelector(".menu-toggle");
        const navLinks = document.querySelector(".nav-links");
    
        menuToggle.addEventListener("click", function () {
            navLinks.classList.toggle("active");
        });
    });
    

    // Fade-in animation for sections
    const sections = document.querySelectorAll("section");
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("fade-in");
            }
        });
    }, { threshold: 0.1 });

    sections.forEach(section => {
        observer.observe(section);
    });

    // Form validation
    const form = document.querySelector("form");
    if (form) {
        form.addEventListener("submit", (event) => {
            const name = document.getElementById("name").value.trim();
            const email = document.getElementById("email").value.trim();
            const phone = document.getElementById("phone").value.trim();
            let valid = true;

            if (name === "") {
                alert("Name cannot be empty");
                valid = false;
            }
            if (!email.includes("@") || !email.includes(".")) {
                alert("Please enter a valid email address");
                valid = false;
            }
            if (!/^[0-9]{10}$/.test(phone)) {
                alert("Please enter a valid 10-digit phone number");
                valid = false;
            }

            if (!valid) {
                event.preventDefault();
            }
        });
    }
});
