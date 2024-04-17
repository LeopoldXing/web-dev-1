const validateForm = (event) => {
  hideErrors();

  // if the form has errors, then this flag will be true;
  let formErrorFlag = false;

  // username validation
  const usernameElement = document.getElementById("username");
  const usernameRegExp = new RegExp(/^[a-zA-Z0-9_]{3,16}$/);
  if (!usernameRegExp.test(usernameElement.value)) {
    // validate failed
    const usernameErrorMsgElement = document.getElementById("usernameformat_error");
    usernameErrorMsgElement.style.display = "block";

    if (!formErrorFlag) {
      usernameElement.focus();
      usernameElement.select();
    }

    formErrorFlag = true;
  }

  // phone number validation
  const phoneElement = document.getElementById("phone");
  const phoneNumber = phoneElement.value;
  const phoneNumberRegExp = new RegExp(/^\d{10,}$/);
  if (!phoneNumberRegExp.test(phoneNumber)) {
    // phone number validate failed
    const phoneErrorMsgElement = document.getElementById("phoneformat_error");
    phoneErrorMsgElement.style.display = "block";

    if (!formErrorFlag) {
      phoneElement.focus();
      phoneElement.select();
    }

    formErrorFlag = true;
  }

  // email validation
  const emailElement = document.getElementById("email");
  const email = emailElement.value;
  const emailRegExp = new RegExp(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/);
  if (!emailRegExp.test(email)) {
    // email validate failed
    const emailErrorMsgElement = document.getElementById("emailformat_error");
    emailErrorMsgElement.style.display = "block";

    if (!formErrorFlag) {
      emailElement.focus();
      emailElement.select();
    }

    formErrorFlag = true;
  }

  // comment validation
  const commentElement = document.getElementById("comment");
  const comment = commentElement.value;
  if (!comment) {
    // comment is empty
    const commentErrorMsgElement = document.getElementById("commenterror");
    commentErrorMsgElement.style.display = "block";

    if (!formErrorFlag) {
      commentElement.focus();
      commentElement.select();
    }
    formErrorFlag = true;
  }

  return formErrorFlag;
}

const handleFormSubmission = (e) => {
  hideErrors();

  if (validateForm()) {
    e.preventDefault();

    return false;
  }

  return true;
}

const hideErrors = () => {
  const errorMsgIdList = ["usernameformat_error", "phoneformat_error", "emailformat_error", "commenterror"];
  errorMsgIdList.forEach(msgId => document.getElementById(msgId).style.display = "none");
}

const handleFormReset = () => {
  hideErrors();
  ["username", "phone", "email", "comment"].forEach(inputId => document.getElementById(inputId).value = "");
};

const load = () => {
  const formElement = document.getElementById("contact_form");
  formElement.addEventListener("submit", handleFormSubmission);
  formElement.addEventListener("reset", handleFormReset);
}

document.addEventListener('DOMContentLoaded', load);
