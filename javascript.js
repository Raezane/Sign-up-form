const pw = document.querySelector('#password');
const confirmpw = document.querySelector('#confirm');
const submit = document.querySelector('#submitbutton');

confirmpw.addEventListener('input', matchOrNot)

function matchOrNot(e) {
  if (pw.value == confirmpw.value) {
      confirmpw.setCustomValidity("");
    } else confirmpw.setCustomValidity("Passwords not matching!");
};