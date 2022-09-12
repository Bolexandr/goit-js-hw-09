import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import Notiflix from 'notiflix';

const btn = document.querySelector('button');
// btn.disabled=true
const dataStart = document.querySelector('[data-start]');
const inpt = document.querySelector('#datetime-picker');

dataStart.classList.add('dataStartBtn')

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    // console.log(selectedDates[0]);
    // console.log(selectedDates[0].getTime());
    // console.log(new Date().getTime());
    if (new Date().getTime() < selectedDates[0].getTime()) {
      btn.disabled = false;
      Notiflix.Notify.success('You choose a date in the future , great!!!');
    } else {
      btn.disabled = true;
      Notiflix.Notify.failure('Please choose a date in the future');
    }
  },
};

flatpickr('#datetime-picker', options);
let intervalId = null;

function diffTime(finishDate) {
  ms = new Date(finishDate).getTime() - new Date().getTime();

  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);
  // console.log({ days, hours, minutes, seconds });
  return { days, hours, minutes, seconds };
}

function addLeadingZero(value, countZero) {
  if (value <= 99) {
    return value.toString().padStart(2, 0);
  } else {
    return value.toString().padStart(countZero, 0);
  }
}

function changerValueOnPage(inptValue) {
  const obj= diffTime(inptValue)
  const vallArr = Object.values(obj).reduce( (acumulator, item) => acumulator + item ,0)

  if ( vallArr >= 0 ){
    console.log('sumAllNumbersOfDate=',vallArr)

     const fatherDiv = document.querySelector('.timer');

  ///////Перший спосіб:
  // const { days, hours, minutes, seconds } = obj;
  // fatherDiv.querySelector('[data-days]').textContent = addLeadingZero(days, 3);
  // fatherDiv.querySelector('[data-hours]').textContent = addLeadingZero( hours,2);
  // fatherDiv.querySelector('[data-minutes]').textContent = addLeadingZero(minutes,2);
  // fatherDiv.querySelector('[data-seconds]').textContent = addLeadingZero(seconds,2);

  //////Другий спосіб:
  for (let ell of Object.keys(obj)) {
    fatherDiv.querySelector(`[data-${ell}]`).textContent = addLeadingZero(obj[ell], 3 );
  }
  }else{
    console.log('Event: (clearInterval) = true')
    clearInterval(intervalId)
  }
 
}

function hednlerEvent(e) {
  clearInterval(intervalId)
  console.log('Event: (setInterval) = true')
  intervalId = setInterval(changerValueOnPage ,1000,inpt.value);
}
 
btn.addEventListener('click', hednlerEvent);
