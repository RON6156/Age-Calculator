let birthdateInput = document.getElementById("bd");
let ageDisplay = document.getElementById("age2");

function calculateAge() {
  let currentDate = new Date();
  let birthDate = new Date(birthdateInput.value);

  let age = currentDate.getFullYear() - birthDate.getFullYear();
  let monthDiff = currentDate.getMonth() - birthDate.getMonth();

  if (monthDiff < 0 || (monthDiff === 0 && currentDate.getDate() < birthDate.getDate())) {
    age--;
  }

  ageDisplay.innerHTML = age;
}

function reset() {
  birthdateInput.value = "";
  ageDisplay.innerHTML = "";
}
