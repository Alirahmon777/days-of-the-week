const elForm = document.querySelector("#form");
const elInput = document.querySelector(".input");
const elBtn = document.querySelector(".btn");
const elText = document.querySelector(".text");

elForm.addEventListener("submit", (e) => {
  e.preventDefault();

  switch (+elInput.value) {
    case 0:
      elText.textContent = "0 dan katta son yozing!!!";
      elInput.style.cssText = "border: 1px solid red";
      break;
    case 1:
      elText.textContent = "Dushanba";
      elInput.style.cssText = "border: 1px solid lightgreen";
      break;
    case 2:
      elText.textContent = "Seshanba";
      elInput.style.cssText = "border: 1px solid lightgreen";
      break;
    case 3:
      elText.textContent = "Chorshanba";
      elInput.style.cssText = "border: 1px solid lightgreen";
      break;
    case 4:
      elText.textContent = "Payshanba";
      elInput.style.cssText = "border: 1px solid lightgreen";
      break;
    case 5:
      elText.textContent = "Juma";
      elInput.style.cssText = "border: 1px solid lightgreen";
      break;
    case 6:
      elText.textContent = "Shanba";
      elInput.style.cssText = "border: 1px solid lightgreen";
      break;
    case 7:
      elText.textContent = "Yakshanba";
      elInput.style.cssText = "border: 1px solid lightgreen";
      break;
    default:
      elText.textContent = "7 dan kichik son yozing!!!";
      elInput.style.cssText = "border: 1px solid red";
      break;
  }
  elForm.reset();
});
