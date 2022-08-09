const prevbtns=document.querySelectorAll(".details_back");
const nextbtns=document.querySelectorAll(".details_next");
const formsteps=document.querySelectorAll(".details_form_step");
let formstepnum=0;
nextbtns.forEach((btn)=>{
    btn.addEventListener("click",()=>{
        formstepnum++;
        updateformsteps();
    })
});
console.log("loading")
function updateformsteps(){
    formsteps.forEach((formstep)=>{
        formstep.classList.contains("details_form_step_active")&&
        formstep.classList.remove("details_form_step_active");
    })
    formsteps[formstepnum].classList.add("details_form_step_active");
}

