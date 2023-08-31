const toggler = (e) => {

    const current = e.target;
    const currentSection = document.querySelector(current.dataset.section);
    const siblings = current.parentNode.children;
    let siblingsArray = [];

    for (sibling of siblings) {
        siblingsArray.push(sibling)
    } 
    siblingsArray = siblingsArray.filter((node) => node !== current)
    siblingsArray.map((element) => {
        element.classList.remove("active_tab");

        const siblingSection = document.querySelector(element.dataset.section);
        siblingSection.classList.add("hidden");

    })
    
    current.classList.add("active_tab");
    currentSection.classList.remove("hidden");
}

const showModal = (e) => {
    closeSideMenuBtn.click();
    const currentModal = document.querySelector(e.target.dataset.modal);
    currentModal.classList.remove("hidden");
    document.querySelector("main").classList.add("blur-sm");
}

const profile = document.querySelector("#profile");

if (profile) {
    profile.addEventListener("click", () => {
        let extras = document.querySelector("#extras");
        extras.classList.toggle("hidden");
    })
}

const hamburgerBtn = document.querySelector("#side_menu_open");
const sideMenu = document.querySelector("#side_menu");
const closeSideMenuBtn = document.querySelector("#side_menu_close");

if (closeSideMenuBtn) {
    closeSideMenuBtn.addEventListener("click", (e) => {
        hamburgerBtn.classList.remove("hidden");
        hamburgerBtn.childNodes[1].classList.remove("hidden")
        sideMenu.classList.add("hidden");
    })
}

if (hamburgerBtn) {
    hamburgerBtn.addEventListener("click", (e) => {
        hamburgerBtn.classList.add("hidden");
        sideMenu.classList.remove("hidden");
    })
}