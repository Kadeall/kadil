const hamburger_menu = document.querySelector(".hamburger_menu")
const nav_menu = document.querySelector(".nav_menu")

hamburger_menu.addEventListener("click", () => {
    hamburger_menu.classList.toggle("active");
    nav_menu.classList.toggle("active");
}
)
document.querySelectorAll(".nav_link").forEach(n => n.
    addEventListener("click", () => {
        hamburger_menu.classList.remove("active");
        nav_menu.classList.remove("active");
    }))