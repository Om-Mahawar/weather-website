const weatherForm = document.querySelector('form');
const search = document.querySelector('input');
let messageOne = document.getElementById('message-1');
let messageTwo = document.getElementById('message-2');

weatherForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const location = search.value;

  fetch(`/weather?address=${location.trim()}`).then((res) => {
    res.json().then((data) => {
      if (data.error) {
        messageOne.innerText = data.error;
        messageTwo.innerText = '';
      } else {
        messageOne.innerText = data.location;
        messageTwo.innerText = data.forecast;
      }
    });
  });
});
