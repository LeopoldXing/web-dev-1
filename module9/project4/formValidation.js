const validateForm = (event) => {
  // if the form has errors, then this flag will be true;
  let formErrorFlag = false;

  console.log(event);
  event.preventDefault();

  // username validation
  const usernameElement = document.getElementById("username");
  const usernameRegExp = new RegExp(/^[a-zA-Z0-9_]{3,16}$/);
  if (!usernameRegExp.test(usernameElement.value)) {
    // validate failed
    const usernameErrorMsgElement = document.getElementById("usernameformat_error");
    usernameErrorMsgElement.style.display = "block";

    if (formErrorFlag) {
      usernameElement.focus();
      usernameElement.select();
    }

    formErrorFlag = true;
  }

  // phone number validation
  const phoneElement = document.getElementById("phone");
  const phoneNumber = phoneElement.value;


}

const load = () => {
  const formElement = document.getElementById("contact_form");
  formElement.addEventListener("submit", validateForm);
}

document.addEventListener('DOMContentLoaded', load);
