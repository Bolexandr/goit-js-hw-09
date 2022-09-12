
import Notiflix from 'notiflix';

function createPromise(position, delay) {

  const shouldResolve = Math.random() > 0.3;

  if (shouldResolve) {
    // setTimeout()
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve({ position, delay }), delay)
      
    })
    
  } else {
    return new Promise((resolve, reject) => {
      setTimeout(() => reject({ position, delay }), delay)
    })
  }

}

const form = document.querySelector('form')
////////////////////////////////////
console.dir(form)
const first = form[0];
// console.log(`${form[0].name}`,form[0])
const step = form[1];
// console.log(`${form[1].name}`,form[1])
const amount = form[2];
// console.log(`${form[2].name}`,form[2])
const btn = form[3];

const eventClickHendler = e =>{

  e.preventDefault()

let firstDelay = Number(first.value)

for(let i = 1 ; i <= amount.value ; i+=1 ) {
  createPromise(i,firstDelay) 
   .then(({ position, delay }) => {
    Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
  })
  .catch(({ position, delay }) => {
    Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
  });

  firstDelay += Number(step.value)
  // console.log(firstDelay)
}
}



form.addEventListener('submit', eventClickHendler)

