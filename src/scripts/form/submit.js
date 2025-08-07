import dayjs from "dayjs";
import { newSchedule } from "../api/new-schedule";

// Variaveis referentes ao form
const form = document.querySelector("form");
const selectedDate = document.getElementById("daily-schedules");
const selectedScheduleDate = document.getElementById("schedule-day");
const currentTime = document.getElementById("schedule-hour");
const today = dayjs(new Date()).format("YYYY-MM-DD");
const time = dayjs().format("HH:mm");

// Carrega a data atual e bloqueia anteriores
selectedDate.value = today;
selectedDate.min = today;

// Carrega a data atual para o agendamento e bloqueia anteriores
selectedScheduleDate.value = today;
selectedScheduleDate.min = today;

currentTime.value = time;

form.onsubmit = async(event) =>{
    event.preventDefault();

    try {
        // Variáveis referentes ao agendamento
        const tutorName = document.getElementById("owner-name").value.trim();
        const petName = document.getElementById("pet-name").value.trim();
        const phoneNumber = document.getElementById("owner-contact").value.trim();
        const service = document.getElementById("service").value.trim();
        const date = document.getElementById("schedule-day").value.trim();
        const hour = document.getElementById("schedule-hour").value.trim();
        const id = Math.random().toString(36).slice(2, 11);

        if(!tutorName || !petName || !phoneNumber || !service || !date || !hour){
            return alert("Há items a serem preenchidos!")
        }

        await newSchedule({id, tutorName, petName, phoneNumber, service, date, hour})
        
        // console.log({id, tutorName, petName, phoneNumber, service, date, hour})

    } catch (error) {
        console.log(error)
    }
}