const container_btn = document.querySelectorAll(".container_btn")


const hr= document.querySelector(".hr")
const btn = document.querySelector(".btn")

container_btn.forEach((e)=>{

    e.addEventListener("click", ()=>{

        container_btn.forEach((e)=>{
            e.children[0].classList.remove("hr_Ativo")
            e.children[1].classList.remove("btn_Ativo")
            e.style.border = ""
        })

        console.log(e.children[0])
        e.children[0].classList.add("hr_Ativo")
        e.children[1].classList.add("btn_Ativo")
        e.style.border = "none"

    })
})
