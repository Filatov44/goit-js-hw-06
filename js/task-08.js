const form = document.querySelector(".login-form");
form.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();
  const {
    elements: { email, password },
  } = event.currentTarget;
  if (email.value === "" || password.value === "") {
    return alert("Внимание! Все поля должны быть заполнены!");
  } else {
    const user = {
      email: email.value,
      password: password.value,
    };
    console.log(user);
    // const formData = new FormData(event.currentTarget);
    // formData.forEach((name, value) => {
    //     console.log(value,name);
    // });

    document.querySelector(".login-form").reset();
  }
}
