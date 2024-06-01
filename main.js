
  const form = document.getElementById("form");
  const email = document.getElementById("emailValue");
  const errorIcon = document.querySelector(".error-img");
  const errorText = document.querySelector(".error--text");
  const errorface=document.querySelector(".email-input")
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,6}$/;


  form.addEventListener("submit", (event) => {
    event.preventDefault();
    if (emailRegex.test(email.value)) {
        errorIcon.style.opacity = 0;
        errorText.style.opacity = 0;
        errorface.classList.remove("error-active");
        console.log(email.value);
        email.value="";
    } else {
      errorIcon.style.opacity = 1;
      errorText.style.opacity = 1;
      errorface.classList.add("error-active")
      console.log(email.value);
    }
  });
