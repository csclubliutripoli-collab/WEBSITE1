function toggleMenu() {
    const menu = document.getElementById("navLinks");

    menu.classList.toggle("active");
}


function openCourse(courseName) {
    alert(
        "Welcome to " + courseName + "!\n\n" +
        "Course content will be available soon."
    );
}


function registerEvent() {
    alert(
        "Registration will open soon!\n\n" +
        "Follow LIU CS Club on Instagram for updates."
    );
}


// Category buttons
const categoryButtons = document.querySelectorAll(".categories button");

categoryButtons.forEach(button => {

    button.addEventListener("click", function () {

        categoryButtons.forEach(btn => {
            btn.style.background = "#0b1c2b";
            btn.style.color = "#9eb2c2";
        });

        this.style.background = "#12d9e8";
        this.style.color = "#06111c";

    });

});