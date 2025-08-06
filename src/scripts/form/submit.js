import dayjs from "dayjs";

const form = document.querySelector("form");
const selectedDate = document.getElementById("daily-schedules");
const selectedScheduleDate = document.getElementById("schedule-day");
const today = dayjs(new Date()).format("YYYY-MM-DD");

// Carrega a data atual e bloqueia anteriores
selectedDate.value = today;
selectedDate.min = today;

// Carrega a data atual para o agendamento e bloqueia anteriores
selectedScheduleDate.value = today;
selectedScheduleDate.min = today;

form.onsubmit = (event) =>{
    event.preventDefault();
}