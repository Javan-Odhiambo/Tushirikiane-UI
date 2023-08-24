const inProgressBtn = document.querySelector("#in_progress_btn");
const completedBtn = document.querySelector("#completed_btn");
const toggler = (e) => {

    let current = e.target;
    let sibling = current.nextElementSibling || current.previousElementSibling;
    let currentSection = document.querySelector(current.dataset.section);
    let siblingtSection = document.querySelector(sibling.dataset.section);

    current.classList.add("active_tab");
    current.classList.remove("hover:bg-indigo-100");

    sibling.classList.remove("active_tab");
    sibling.classList.add("hover:bg-indigo-100");


    currentSection.classList.remove("hidden");
    siblingtSection.classList.add("hidden");

}

completedBtn.addEventListener("click", toggler);
inProgressBtn.addEventListener("click", toggler);

const profile = document.querySelector("#profile");
profile.addEventListener("click", () => {
    let extras = document.querySelector("#extras");
    extras.classList.toggle("hidden");
})
