const emailInput = document.getElementById("email-input");
const submitBtn = document.getElementById("submit-btn");

emailInput.addEventListener("input", () => {
  if (emailInput.value.length > 0) {
    submitBtn.classList.remove("mistake-btn");
    submitBtn.disabled = false;
  } else if (emailInput.value.length == 0) {
    submitBtn.classList.add("mistake-btn");
    submitBtn.disabled = true;
  }
});
