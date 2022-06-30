const btnDarkMode = document.getElementById("darktheme");

function saveTheme() {
    localStorage.setItem("darkMode", 1);
}

function changeTheme() {
    const body = document.querySelector("body");

    body.classList.toggle("dark");
    localStorage.removeItem("darkMode");

    const checkThemeDark = body.classList.contains("dark");
    if(checkThemeDark) {
        saveTheme();
    }
}

btnDarkMode.addEventListener("change", changeTheme );

function loadTheme() {
    const themeDark = localStorage.getItem("darkMode");

    if (themeDark) {
        const body = document.querySelector("body");
        body.classList.add("dark");

    }
}

loadTheme();