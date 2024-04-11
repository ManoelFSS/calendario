const select_location = document.querySelector(".select_location")
const ul = document.querySelector(".select_location ul")
const span = document.querySelector(".select_location span") 
const li = document.querySelectorAll(".select_location li")


const select_Duration = document.querySelector(".select_Duration")
const ul_du = document.querySelector(".select_Duration ul")
const span_du = document.querySelector(".select_Duration span")
const li_du = document.querySelectorAll(".select_Duration li")
const body = document.querySelector("body")

let allSelect = false

select_location.addEventListener("click", ()=>{
    allSelect = false
    ul_du.style.opacity = "0.5"
    setTimeout(()=>{
        ul_du.style.opacity = "0"
    },100)
    ul_du.style.display = "none"
    span_du.style.transform = "rotate(0deg)" 
    select_Duration.style.border = " solid 2px #ccc"

    if( ul.style.display === "block"){
        select_location.style.border = " solid 2px #ccc"
        ul.style.opacity = "0.5"
        setTimeout(()=>{
            ul.style.opacity = "0"
        },100)
        ul.style.display = "none"
        span.style.transform = "rotate(0deg)"
    }else{
        select_location.style.border = " solid 2px #D7E164"
        ul.style.display = "block"
        ul.style.opacity = "0.5"
        setTimeout(()=>{
            ul.style.opacity = "1"
            allSelect = true
        },10)
        span.style.transform = "rotate(180deg)"
        
    }


})


const hendle_selectAtive = (res) => {
    const h4 = document.querySelector(".select_location h4")
    const list = [...li]

    list.map((e)=> {
        if(e.innerText === h4.innerText){
            e.style.backgroundColor = "#F4F6D3"
        }else{
            e.style.backgroundColor = ""
        }
    })
}

hendle_selectAtive()

li.forEach((e)=>{
    e.addEventListener("click", (e)=>{
    
        const h4 = document.querySelector(".select_location h4")
        h4.innerText = e.target.innerText
        hendle_selectAtive(h4)
        
    })
})


const hendle_selectAtive02 = (res) => {
    const h4 = document.querySelector(".select_Duration h4")
    const list = [...li_du]

    list.map((e)=> {
        if(e.innerText === h4.innerText){
            e.style.backgroundColor = "#F4F6D3"
        }else{
            e.style.backgroundColor = ""
        }
    })
}

hendle_selectAtive02()

const area_btns = document.querySelector(".area_btns")

li_du.forEach((e)=>{
   
    e.addEventListener("click", (e)=>{
        area_btns.innerHTML = ""

        hendelLocalstorage(e.target.innerText)
        teste()
        action_btn()

        const h4 = document.querySelector(".select_Duration h4")
        h4.innerText = e.target.innerText
        hendle_selectAtive02(h4)
    })
})


select_Duration.addEventListener("click", ()=>{

    if( ul_du.style.display === "block"){
        select_Duration.style.border = " solid 2px #ccc"
        ul_du.style.opacity = "0.5"
        setTimeout(()=>{
            ul_du.style.opacity = "0"
        },100)
        ul_du.style.display = "none"
        span_du.style.transform = "rotate(0deg)"
    }else{
        select_Duration.style.border = " solid 2px #D7E164"
        ul_du.style.display = "block"
        ul_du.style.opacity = "0.5"
        setTimeout(()=>{
            ul_du.style.opacity = "1"
            allSelect = true
        },10)
        span_du.style.transform = "rotate(180deg)"
    }

   
  
})

body.addEventListener("click", ()=>{
    if(allSelect){
        select_Duration.style.border = " solid 2px #ccc"
        ul_du.style.opacity = "0.5"
        setTimeout(()=>{
            ul_du.style.opacity = "0"
        },100)
        ul_du.style.display = "none"
        span_du.style.transform = "rotate(0deg)"

        select_location.style.border = " solid 2px #ccc"
        ul.style.opacity = "0.5"
        setTimeout(()=>{
            ul.style.opacity = "0"
        },100)
        ul.style.display = "none"
        span.style.transform = "rotate(0deg)"

        allSelect = false
    }
})




const hendelLocalstorage = (e) => {
   
    let num = ""
    let numArray = []
   
    if(e === "60 min"){
       
        num = 8
        for(let i = 0; i < 6; i++){
           numArray.push(`${(num + i)}:00`)
        }
        localStorage.setItem("hr", JSON.stringify(numArray))

    }else{
       
        num = 8
        numHoras = true

        for(let i = 0; i < 4; i++){
           
            if(numHoras){
                numArray.push(`${(num)}:30`)
                numHoras = false
            }else{
                numArray.push(`${(num + 1)}:00`)
                numHoras = true
                num += 1;
            }
          
        }
        localStorage.setItem("hr", JSON.stringify(numArray))
       
    }
}
hendelLocalstorage()

const teste = () => {

    const geteLocal = JSON.parse(localStorage.getItem("hr"))

    console.log(geteLocal)

    geteLocal.map((e)=> {
        const btns = `
            <div class="container_btn">
                <div class="hr">${e}pm</div>
                <div class="btn">Next</div>
            </div>
        `
        area_btns.innerHTML += btns
      
    })

} 
teste()


const action_btn = () => {
    
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
            console.log(e.children[1])
            e.children[0].classList.add("hr_Ativo")
            e.children[1].classList.add("btn_Ativo")
            e.style.border = "none"
    
        })
    })
}
action_btn()



