const form = document.getElementById("loginForm");
const email = document.getElementById("email");
const password = document.getElementById("password");
const emailError = document.getElementById("emailError");
const passError = document.getElementById("passError");
const message = document.getElementById("message");
const toggle = document.getElementById("toggle");

// Show or hide the password
toggle.addEventListener("click", () => {
  const hidden = password.type === "password";
  password.type = hidden ? "text" : "password";
  toggle.textContent = hidden ? "Hide" : "Show";
});

function setError(input, errorBox, text) {
  errorBox.textContent = text;
  input.parentElement.classList.toggle("invalid", text !== "");
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  message.textContent = "";
  message.className = "message";

  let ok = true;
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailPattern.test(email.value.trim())) {
    setError(email, emailError, "Enter a valid email, like name@example.com");
    ok = false;
  } else {
    setError(email, emailError, "");
  }

  if (password.value.length < 6) {
    setError(password, passError, "Password must have at least 6 characters");
    ok = false;
  } else {
    setError(password, passError, "");
  }

  if (ok) {
    message.textContent = "Login successful. Welcome back!";
    message.classList.add("ok");
    form.reset();
  }
});