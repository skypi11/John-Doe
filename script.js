const buttonBurger = document.querySelector(".burger")
const navLink = document.querySelector(".navLink")
const buttonmodal = document.querySelector(".buttonmodal")
const modal = document.querySelector(".modal")
const buttonmodalclose = document.querySelector(".buttonmodalclose")

function affiche() {
    navLink.classList.remove('active')
}
function closemodal() {
    modal.close()
}

buttonBurger.addEventListener('click', ()=> {
    console.log("click")
    
    navLink.classList.toggle('active')
})
window.addEventListener('resize',affiche )
window.addEventListener('scroll',affiche )

// buttonmodal.addEventListener('click', ()=>{
//     modal.classList.toggle('activemodal')
// })
buttonmodal.addEventListener('click', () =>{
    modal.showModal()
})
buttonmodalclose.addEventListener('click',()=>{
    console.log("close")
    modal.close()
})
window.addEventListener('resize',closemodal )
window.addEventListener('scroll',closemodal )

window.addEventListener('click', (e)=>{
    if (e.target === modal) {
        modal.close()
    }
})