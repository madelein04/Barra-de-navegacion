const body = document.querySelector("body"),
    sidebar = body.querySelector(".sidebar"),
    toggle = body.querySelector(".toogle"),
    searchBoxBtn = body.querySelector(".search-box"),
    modeToogleSwitch = body.querySelector(".toogle-switch"),
    modeText = body.querySelector(".mode-text");

toggle.addEventListener("click", () => {
    sidebar.classList.toggle("close");
})

modeToogleSwitch.addEventListener("click", () => {
    body.classList.toggle("dark");
})

