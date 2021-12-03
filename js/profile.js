const mainNav = document.querySelector(".main-nav"),
    cardResome = document.querySelector(".resume"),
    cardSkills = document.querySelector(".skills"),
    cardBlog = document.querySelector(".blog"),
    cardContact = document.querySelector(".contact"),
    cardHome = document.querySelector(".home"),
    cardPortfolio = document.querySelector(".portfolio"),
    content = document.querySelector(".content");

eventListeners();
function eventListeners() {
    mainNav.addEventListener("click", showCard);
}

function showCard(e) {
    e.preventDefault();
    for (let i = 0; i < content.children.length; i++) {
        if (content.children[i].classList.contains("d-block")) {
            content.children[i].classList.remove("d-block");
        }
    }
    const myId = e.target.id;
    switch (myId) {
        case "home":
            cardHome.classList.add("d-block");
            break;
        case "resume":
            cardResome.classList.add("d-block");
            break;
        case "skills":
            cardSkills.classList.add("d-block");
            break;
        case "portfolio":
            cardPortfolio.classList.add("d-block");
            break;
        case "blog":
            cardBlog.classList.add("d-block");
            break;
        case "contact":
            cardContact.classList.add("d-block");
            break;
    }
}