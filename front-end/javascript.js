window.addEventListener("scroll", () => {
    const scrollY = window.scrollY;
    const miniNav = document.getElementById("miniNav");
    const mainNav = document.getElementById("mainNav");

    if (scrollY > 80) {
        miniNav.classList.add("hide");
        mainNav.classList.add("scrolled");
    } else {
        miniNav.classList.remove("hide");
        mainNav.classList.remove("scrolled");
    }
});

document.querySelectorAll("#navbarNav .nav-link").forEach(link => {
    link.addEventListener("click", () => {
        const collapse = document.querySelector("#navbarNav");
        if (collapse.classList.contains("show")) {
            bootstrap.Collapse.getInstance(collapse)?.hide();
        }
    });
});
// form submission
const form = document.getElementById("contact-form");

form.addEventListener("submit", async function (e) {

    e.preventDefault();

    const data = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        subject: document.getElementById("subject").value,
        message: document.getElementById("message").value
    };

    try {

        const response = await fetch("https://portfolio-backend-cd14.onrender.com/api/contact/send", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        });

        const result = await response.json();

        alert(result.message);

        form.reset();

    }
    catch (error) {
        console.log(error);
    }

});