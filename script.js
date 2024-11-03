document.addEventListener("scroll", () => {
    const sections = document.querySelectorAll("section");
    const links = document.querySelectorAll(".sidebar-link");

    let current = "";

    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        if (sectionTop <= 0 && sectionTop + section.clientHeight > 0) {
            current = section.getAttribute("id");
        }
    });

    links.forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("href") === `#${current}`) {
            link.classList.add("active");
        }
    });
});
