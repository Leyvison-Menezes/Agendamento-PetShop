import dayjs from "dayjs";

// Seleciona os períodos
const morning = document.getElementById("morning-period").children[1];
const afternoon = document.getElementById("afternoon-period").children[1];
const night = document.getElementById("night-period").children[1];

export function showSchedules ({ allSchedules }){
    try {
        // Limpa as listas
        morning.innerHTML = "";
        afternoon.innerHTML = "";
        night.innerHTML = "";

        // Ordena por horário
        allSchedules.sort((a, b) => dayjs(a.when).valueOf() - dayjs(b.when).valueOf());

        // Cria os elementos para exibição
        allSchedules.forEach((schedule) => {
            const div = document.createElement("div")
            const scheduledInfos = document.createElement("strong")
            const ownerName = document.createElement("span")
            const service = document.createElement("span")
            const remove = document.createElement("p")

            // Criando os elementos
            div.setAttribute("id", "scheduled-pet")
            div.setAttribute("class", "flex column")
            scheduledInfos.setAttribute("id", "scheduled-infos")
            ownerName.setAttribute("id", "pet-owner")
            service.setAttribute("id", "service-description")

            // Setando os elementos
            scheduledInfos.textContent = dayjs(schedule.when).format("HH:mm") + " " + schedule.petName
            ownerName.textContent = " / " + schedule.tutorName
            service.textContent = schedule.service
            remove.textContent = "Remover agendamento"
            
            // Criando os Appends
            scheduledInfos.append(ownerName)
            div.append(scheduledInfos, service, remove)
            
            // Adiciona o agendamento em seus respectivos períodos
            const hour = dayjs(schedule.when).hour()
            if(hour <= 12){
                morning.appendChild(div)
            }else if(hour > 12 && hour <= 18){
                afternoon.appendChild(div)
            }else{
                night.appendChild(div)
            }

            // Preciso agora: organizar a lista em ordem de horário
            // Remover agendamentos
            // 

        })
    } catch (error) {
        alert("Não foi possível exibir os agendamentos")
        console.log(error)
    }
}