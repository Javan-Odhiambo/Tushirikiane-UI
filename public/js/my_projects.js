const addProjectBtn = document.querySelector("#add_project_button");
const addProjectModalClose = document.querySelector("#add_project_modal_close");

addProjectBtn.addEventListener("click", showModal)

addProjectModalClose.addEventListener("click", (e) => {
    document.querySelector("#add_project_modal").classList.add("hidden")
    document.querySelector("main").classList.remove("blur-sm")
})

