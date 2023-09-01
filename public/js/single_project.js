const addTaskBtn = document.querySelector("#add_task_btn");
const addMemberBtn = document.querySelector("#add_member_btn");
const viewMembersBtn = document.querySelector("#view_members_btn");
const viewRequstsBtn = document.querySelector("#view_requests_btn");

const ModalCloseBtns = document.querySelectorAll(".modal_close_btn");

addTaskBtn.addEventListener("click", showModal);
addMemberBtn.addEventListener("click", showModal);
viewMembersBtn.addEventListener("click", showModal);
viewRequstsBtn.addEventListener("click", showModal);

ModalCloseBtns.forEach((closeBtn) => {
    closeBtn.addEventListener("click", (e) => {
        let  modal = e.target.parentNode;
        while (modal.tagName !== "DIV") {
            modal = modal.parentNode;
        }
        modal.classList.add("hidden");
        document.querySelector("main").classList.remove("blur-sm");
    })
})


const pendingBtn = document.querySelector("#pending_btn");
const assignedBtn = document.querySelector("#assigned_btn");
const inProgressBtn = document.querySelector("#in_progress_btn");
const completedBtn = document.querySelector("#completed_btn");

pendingBtn.addEventListener("click", toggler);
assignedBtn.addEventListener("click", toggler); 
completedBtn.addEventListener("click", toggler);
inProgressBtn.addEventListener("click", toggler);

const memberMenus = document.querySelectorAll(".member_menu");
memberMenus.forEach((menu) => {
    menu.addEventListener("click", (e) => {
        e.target.parentNode.parentNode.lastElementChild.classList.toggle("hidden");
    })
})

function emailIsValid (email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

const addMemberInput = document.querySelector("#new_member_input");
const emails = [];
addMemberInput.addEventListener("keypress", (e) => {
    if (e.key == "Enter") {
        e.preventDefault();
        let text = e.target.value.toLowerCase().trim();
        if (emailIsValid(text) && ! emails.includes(text)) {
            let memberEmail = document.createElement("div");
            memberEmail.classList.add("bg-gray-200", "py-1", "px-2", "rounded-xl", "hover:bg-indigo-200", "flex", "justify-between");
            
            let memberEmailText = document.createElement("p");
            memberEmailText.innerText = `${text}`;
            memberEmail.appendChild(memberEmailText);


            let removeBtn = document.createElement("span");
            removeBtn.classList.add("cursor-pointer");
            removeBtn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
            stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>`
            removeBtn.addEventListener("click", (e) => {
                let div = e.target.parentNode;
                while (div.tagName !== "DIV")
                {
                    div = div.parentNode;
                }

                let index = emails.indexOf(div.firstChild.innerText);
                emails.splice(index, 1);
                div.remove();
            });
            memberEmail.appendChild(removeBtn);
            

            emails.push(text);
            document.querySelector("#new_members_container").appendChild(memberEmail);
            e.target.value = "";
        }
    }
})

const addMemberForm = document.querySelector("#add_member_form");
addMemberForm.addEventListener("submit", (e) => {
    e.preventDefault();
    if (addMemberInput.value && emailIsValid(addMemberInput.value))
        emails.push(addMemberInput.value)
    
    addMemberInput.value = emails.join(" ");
    addMemberForm.submit();

})
