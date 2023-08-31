const addTaskBtn = document.querySelector("#add_task_button");
const addTaskModalClose = document.querySelector("#add_task_modal_close");

addTaskBtn.addEventListener("click", showModal)

addTaskModalClose.addEventListener("click", (e) => {
    document.querySelector("#add_task_modal").classList.add("hidden")
    document.querySelector("main").classList.remove("blur-sm")
})

const pendingBtn = document.querySelector("#pending_btn");
const assignedBtn = document.querySelector("#assigned_btn");
const inProgressBtn = document.querySelector("#in_progress_btn");
const completedBtn = document.querySelector("#completed_btn");

pendingBtn.addEventListener("click", toggler);
assignedBtn.addEventListener("click", toggler); 
completedBtn.addEventListener("click", toggler);
inProgressBtn.addEventListener("click", toggler);