// Описаний в документації
import flatpickr from "flatpickr";
// Додатковий імпорт стилів
import "flatpickr/dist/flatpickr.min.css";

// Описаний у документації
import iziToast from "izitoast";
// Додатковий імпорт стилів
import "izitoast/dist/css/iziToast.min.css";


const inputDate = document.querySelector('#datetime-picker')
const button = document.querySelector('[data-start]');
const dateDays = document.querySelector('[data-days]');
const dateHours = document.querySelector('[data-hours]');
const dateMinutes = document.querySelector('[data-minutes]');
const dateSeconds = document.querySelector('[data-seconds]');


button.disabled = true;

let userSelectedDate = '';
let intervalId = null;

const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
        userSelectedDate = selectedDates[0];
        if (selectedDates[0] <= options.defaultDate) {
            button.disabled = true;
            button.style.hover = "none";
            iziToast.warning({
                title: 'Caution',
                message: 'Please choose a date in the future',
            });
        } else {
            button.disabled = false;
        }
    },
};


button.addEventListener('click', startTimer)

function startTimer() {
    button.disabled = true;
    inputDate.disabled = true;
    inputDate.style.cursor = 'default';
    intervalId = setInterval(() => {
        const currentTime = Date.now();
        const deltaTime = userSelectedDate.getTime() - currentTime;
        const timerClock = convertMs(deltaTime);
        timeText(timerClock);
        stopTimer(deltaTime)
    }, 1000);
}

function stopTimer(deltaTime) {
    if (deltaTime <= 1000) {
        clearInterval(intervalId);
        inputDate.disabled = false;
        inputDate.style.cursor = 'pointer';

    }
}

function timeText({ days, hours, minutes, seconds } = time) {
    dateDays.textContent = days;
    dateHours.textContent = hours;
    dateMinutes.textContent = minutes;
    dateSeconds.textContent = seconds;
}

function addLeadingZero(value) {
    return String(value).padStart(2, '0')
}


flatpickr("#datetime-picker", options);

function convertMs(ms) {
    // Number of milliseconds per unit of time
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    // Remaining days
    const days = addLeadingZero(Math.floor(ms / day));
    // Remaining hours
    const hours = addLeadingZero(Math.floor((ms % day) / hour));
    // Remaining minutes
    const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
    // Remaining seconds
    const seconds = addLeadingZero(Math.floor((((ms % day) % hour) % minute) / second));

    return { days, hours, minutes, seconds };
}





const weekDaysText = document.querySelector('.curent-value_week');
const dayText = document.querySelector('.curent-value_day');
const monthText = document.querySelector('.curent-value_month');
const yearText = document.querySelector('.curent-value_year');

const clockBoxes = document.querySelector('.clock-box');

const clockSeconds = document.querySelector('.clock-seconds');
const clockMinutes = document.querySelector('.clock-minutes');
const clockHours = document.querySelector('.clock-hours');

const arrDaysWeek = ['Неділя', 'Понеділок', 'Вівторок', 'Середа', 'Четвер', 'Пятниця', 'Субота',];
const arrMonth = ['Січень', 'Лютий', 'Березень', 'Квітень', 'Травень', ' Липень', 'Серпень', 'Вересень', 'Жовтень', 'Листопад', 'Грудень'];

const currentDay = new Date();

const dayNow = arrDaysWeek[currentDay.getDay()];
const monthNow = arrMonth[currentDay.getMonth()];


yearText.textContent = currentDay.getFullYear();
weekDaysText.textContent = dayNow;
monthText.textContent = monthNow;
dayText.textContent = currentDay.getDate()


setInterval(() => {
    const timeNow = new Date()
    clockSeconds.textContent = timeNow.getSeconds().toString().padStart(2, '0');
    clockMinutes.textContent = timeNow.getMinutes().toString().padStart(2, '0');
    clockHours.textContent = timeNow.getHours().toString().padStart(2, '0');
}, 1000)

