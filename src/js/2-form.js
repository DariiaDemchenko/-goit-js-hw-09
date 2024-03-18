const LOCALSTORAGE_KEY = 'feedback-form-state';
const form = document.querySelector('.feedback-form');

form.addEventListener('input', saveFormData);
// form.addEventListener('submit', formSubmitHandler);

function saveFormData(event) {
  event.preventDefault();
  const email = form.elements.email.value.trim();
  const text = form.elements.message.value.trim();
  const data = JSON.stringify({ email, text });
  localStorage.setItem(LOCALSTORAGE_KEY, data);
}

const jsn = localStorage.getItem(LOCALSTORAGE_KEY) ?? '';
try {
  const data = JSON.parse(jsn);
  console.log(data);
  form.elements.email.value = data.email;
  form.elements.message.value = data.text;
} catch {
  console.log('No save data');
}

form.addEventListener('submit', formSubmitHandler);

function formSubmitHandler(event) {
  event.preventDefault();
  localStorage.removeItem(LOCALSTORAGE_KEY);

  const email = form.elements.email.value.trim();
  const text = form.elements.message.value.trim();

  if (email === '' || text === '') {
    alert('Please enter your email and message!');
    return;
  }

  console.log({ email: email, message: text });

  form.reset();
}
