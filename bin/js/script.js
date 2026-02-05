document.addEventListener("DOMContentLoaded", () => {
    const currentPath = window.location.pathname.split('/').pop() || "index.html";
    const navLinks = document.querySelectorAll(".nav-list li a");

    navLinks.forEach(link => {
        if (link.getAttribute("href") === currentPath) {
            const listItem = link.parentElement;
            
            link.classList.add("active");
            
            // We add the class immediately so the 'order' is set 
            // before the browser renders the first frame.
            listItem.classList.add("first-place");
        }
    });
});