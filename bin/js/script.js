document.addEventListener("DOMContentLoaded", () => {
    // Get the current file name (e.g., "index.html")
    const currentPath = window.location.pathname.split('/').pop() || "index.html";
    const navLinks = document.querySelectorAll(".nav-list li a");

    navLinks.forEach(link => {
        if (link.getAttribute("href") === currentPath) {
            const listItem = link.parentElement;
            
            link.classList.add("active");
            
            // Adding a tiny delay (50ms) ensures the browser registers 
            // the element's original position before moving it.
            setTimeout(() => {
                listItem.classList.add("first-place");
            }, 50);
        }
    });
});