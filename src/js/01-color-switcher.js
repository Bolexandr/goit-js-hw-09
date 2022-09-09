const bodyLinc = document.querySelector('body');
const btn = bodyLinc.querySelectorAll('button');


// функція по зміні backgroundColor  приймає посилання на 
// потрібний елемент і приймає колір у виді hex , 
// або функції по зміні кольору)
function changerBGColor(elemLinc, color) {
  if (`${typeof color}` === 'function' ) {
    setColor = color()
    console
  }else{
  setColor = color
  }
  elemLinc.style.backgroundColor = setColor
  // console.log('changerBGColor',setColor)
}

 let bull = confirm('натисни <<ок>> якщо хочеш побачити завдання виконане згідно ТЗ до домашки , Але якщо натиснеш <<скасувати>> тоді ти пізнаєш блаженство дискополо' )

////Функція рандомного кольору
function randomColorInHex() {
  const randomColor = Math.floor(Math.random() * 16777215).toString(16);
  return "#" + randomColor;
}

bodyLinc.addEventListener('click', eventHendler)

document.querySelector('[data-stop]').disabled = true
  
////Повністю автономна колбек функція
function eventHendler(e) {
  if (bull) {
    btn[0].classList.remove('discoStyleBtn')
    btn[1].classList.remove('discoStyleBtn')
   if (e.target.textContent === 'Start') {
    clearInterval(sessionStorage.getItem('timerId'));
    changerBGColor(bodyLinc, randomColorInHex)
    timerId = setInterval(changerBGColor, 1000, bodyLinc, randomColorInHex)
    sessionStorage.setItem('timerId', timerId)
    // console.log('event Start',timerId)
        document.querySelector('[data-stop]').disabled=false

    e.target.disabled=true
    // console.dir(e)
    
  }
  else if (e.target.textContent === 'Stop') {
    timerId = sessionStorage.getItem('timerId')
    clearInterval(timerId);
    // console.log('event Stop',timerId);
     e.target.disabled = true;
     document.querySelector('[data-start]').disabled = false;
    // console.log( document.querySelector('[data-start]'))
      bull = confirm('натисни <<ок>> якщо хочеш побачити завдання виконане згідно ТЗ до домашки , Але якщо натиснеш <<скасувати>> тоді ти пізнаєш блаженство дискополо' )
  }
   
  } else {

    btn[0].classList.add('discoStyleBtn')
    btn[1].classList.add('discoStyleBtn')

   if (e.target.textContent === 'Start') {
    clearInterval(sessionStorage.getItem('timerId'));
    changerBGColor(bodyLinc, randomColorInHex)
    timerId = setInterval(changerBGColor, 300, bodyLinc, randomColorInHex)
    sessionStorage.setItem('timerId', timerId)
    // console.log('event Start',timerId)
        document.querySelector('[data-stop]').disabled=false

    e.target.disabled=true
    // console.dir(e)
    
  }
  else if (e.target.textContent === 'Stop') {
    timerId = sessionStorage.getItem('timerId')
    clearInterval(timerId);
    // console.log('event Stop',timerId);
     e.target.disabled=true
    document.querySelector('[data-start]').disabled=false
    // console.log( document.querySelector('[data-start]'))
    bull = confirm('натисни <<ок>> якщо хочеш побачити завдання виконане згідно ТЗ до домашки , Але якщо натиснеш <<скасувати>> тоді ти пізнаєш блаженство дискополо' )

  }
  
}





// console.dir(typeof randomColorInHex)