let calendar_dias = document.querySelector(".container_date");
const right_btn = document.querySelector(".right_btn");
const left_btn = document.querySelector(".left_btn");
const mes_ano = document.querySelector(".mes_ano");

const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

const rigth_box_h3 = document.querySelector(".rigth_box h3")
const rigth_box = document.querySelector(".rigth_box")

let year = new Date().getFullYear();
let anoAtual = year
let month = new Date().getMonth();
let mesAtual = month
let dia = new Date().getDate();

let agenda = [
    {
        ano:2024,
        mes:months[month + 1],
        data:"6",
        horas:"14",
    },
    {
        ano:2024,
        mes:months[month + 1],
        data:"7",
        horas:"14"
    },
    {
        ano:2024,
        mes:months[month],
        data:"29",
        horas:"14",
    },
    {
        ano:2024,
        mes:months[month],
        data:"22",
        horas:"14",
    },
    {
        ano:2024,
        mes:months[month + 1],
        data:"2",
        horas:"14",
    },
    {
        ano:2024,
        mes:months[month + 2],
        data:"23",
        horas:"14",
    }
]

const renderCalendar = () => {
    calendar_dias.innerHTML = "";
    const daysInMonth_anterior = new Date(year, month, 0).getDate();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const firstDayOfMonth = new Date(year, month, 1).getDay();
    
    let array = []

    for (let i = 0; i < firstDayOfMonth; i++) {
        
        array.unshift(daysInMonth_anterior - i)

        if(i + 1 === firstDayOfMonth){
           
            array.map((e)=>{

                let emptySpan = document.createElement("div");
                emptySpan.innerText = e
                emptySpan.classList.add("empty");
                emptySpan.style.backgroundColor = "#f9f6f6"
                emptySpan.style.borderLeft = "solid 3px #fff"
                calendar_dias.appendChild(emptySpan);

            })
        }
    
        
    }

    for (let i = 1; i <= daysInMonth; i++) {
        let span = document.createElement("span");
        span.classList.add("dt");
        span.innerText = i ;
    
        if(i === dia && months[mesAtual]  === months[month] && year === anoAtual){
            span.classList.add("dia_Ativo")
        }
        // Iterar sobre o array 'agenda' para verificar se o dia está agendado
        agenda.forEach(item => {
            
            if (year === item.ano && months[month] === item.mes && item.data === i.toString()) {
         
                span.classList.add("agendado");
             // marca a data em vermelho caso a data atual seja maior que a data agendada assim se o dia do agendamento ja se passou marca vermelho
                if(dia > item.data && months[mesAtual]  === months[month]){
                    span.style.backgroundColor = "red"
                    span.style.color = "#fff"
                    span.style.opacity = 0.4
                }

            }
        });
    
        calendar_dias.appendChild(span);
    }

    const span = document.querySelectorAll("span")
    span.forEach((e)=>{
        e.classList.remove("ativo")
    
        if(e.classList.toString().includes("agendado")){
            
            e.addEventListener("click",()=>{ 
                span.forEach((e)=> {
                    e.classList.remove("ativo")
                })

                const diaSemana = new Date(anoAtual, month, e.innerText).getDay();
                e.classList.add("ativo")
                const date_agenda = `${daysOfWeek[diaSemana]}, ${months[month]} ${e.innerText}`
                rigth_box_h3.innerText = date_agenda
                rigth_box.style.width = "250px"
            })
           
        }
        
    })
    
};

left_btn.addEventListener('click', () => {

    calendar_dias.classList.add("animation")
    
    if (month === 0) {
        year--;
        month = 11;
    } else {
        month--;
    }

    mes_ano.textContent = `${months[month]} ${year}`;
    renderCalendar(); 
    setTimeout(() => {
        calendar_dias.classList.remove("animation");
    },300)
    
});

right_btn.addEventListener('click', () => {

    calendar_dias.classList.add("animation02")
    
    if (month === 11) {
        year++;
        month = 0;
    } else {
        month++;
    }

    mes_ano.textContent = `${months[month]} ${year}`;
    renderCalendar();

    setTimeout(() => {
        calendar_dias.classList.remove("animation02");
    },300)
});

mes_ano.textContent = `${months[month]} ${year}`;
renderCalendar();


