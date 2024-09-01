// // Описаний у документації
// import iziToast from "izitoast";
// // Додатковий імпорт стилів
// import "izitoast/dist/css/iziToast.min.css";



// const form = document.querySelector(".form");



// form.addEventListener("submit", onSubmitBtnClick);

// function onSubmitBtnClick(event) {
//     event.preventDefault();

//     const formEvent = event.target;
//     const delay = Number(formEvent.elements.delay.value);
//     const radioChecked = formEvent.elements.state.value;

//     newPromises(delay, radioChecked).then(({ delay }) => {
//         iziToast.success({
//             title: 'OK',
//             message: `Fulfilled promise in ${delay} ms`,
//         });
//     }).catch(({ delay }) => {
//         iziToast.error({
//             title: 'Error',
//             message: `Rejected promise in ${delay} ms`,
//         });
//     })

//     formEvent.reset();
// }

// function newPromises(delay, radioChecked) {
//     const data = { delay, radioChecked };

//     return new Promise((res, rej) => {
//         setTimeout(() => {
//           if (radioChecked === 'fulfilled') {
//             res(data)
//           } else {
//             rej(data)
//           }
//         },delay)
//     })
// }



import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const form = document.querySelector('.form');

function delayPromise(delay, radioChecked) {
    const data = { delay, radioChecked };

    return new Promise((res, rej) => {
        setTimeout(() => {
            if (radioChecked === 'fulfilled') {
                res(data);
            } else {
                rej(data);
            }
        }, delay);
    });
}

form.addEventListener('submit', onSubmitBtnClick);

function onSubmitBtnClick(event) {
    event.preventDefault();

    const form = event.target;
    const delay = Number(form.elements.delay.value);
    const radioChecked = form.elements.state.value;

    delayPromise(delay, radioChecked)
        .then(({ delay }) => {
            iziToast.success({
                title: 'OK',
                message: `✅ Fulfilled promise in ${delay} ms`,
            });
        })
        .catch(({ delay }) => {
            iziToast.error({
                title: 'Error',
                message: `❌ Rejected promise in ${delay} ms`,
            });
        });

    form.reset();
}