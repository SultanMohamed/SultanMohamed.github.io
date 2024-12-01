/*
 * *»•» ☾ BMI CALCULATOR ☽ «•«* *
 */
const bmiForm = document.querySelector("form.bmi-calculator");
const bmiResult = document.querySelector("div.bmi-result");

bmiForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const age = bmiForm.age.value;
  const feet = bmiForm.ft.value;
  const inches = bmiForm.inches.value;
  const weight = bmiForm.weight.value;

  const ftToInches = feet * 12 + parseInt(inches);
  const BMI = (weight / Math.pow(ftToInches, 2)) * 703;

  bmiResult.classList.remove("d-none");

  // Check weight
  if (BMI.toFixed(1) >= 30) {
    bmiResult.querySelector("span.category").textContent = "Obesity: ";

    bmiResult.querySelector(
      "span.weight-plan"
    ).textContent = `Your BMI suggests that you may be at risk for a range of health problems, including heart disease, diabetes, and certain cancers. Consult with a healthcare professional to determine a weight loss plan.`;
  } else if (BMI.toFixed(1) > 25) {
    bmiResult.querySelector("span.category").textContent = "Overweight: ";

    bmiResult.querySelector(
      "span.weight-plan"
    ).textContent = `Your BMI suggests that you may be at risk for health problems, including heart disease and diabetes. Consider making healthy lifestyle changes to achieve a healthy weight.`;
  } else if (BMI.toFixed(1) >= 18.5) {
    bmiResult.querySelector("span.category").textContent = "Normal weight: ";

    bmiResult.querySelector(
      "span.weight-plan"
    ).textContent = `Congratulations! Your BMI is within the healthy range of 18.5 to 24.9. Keep up your healthy habits to maintain your weight and support your overall well-being.`;
  } else if (BMI.toFixed(1) < 18.5) {
    bmiResult.querySelector("span.category").textContent = "Underweight: ";

    bmiResult.querySelector(
      "span.weight-plan"
    ).textContent = `You may be at risk of nutritional deficiencies and other health problems. Consult with a healthcare professional to determine a healthy weight gain plan.`;
  }

  bmiResult.querySelector("h2").textContent = `Your BMI = ${BMI.toFixed(1)}`;
});

/*
 * *»•» ☾ TIP CALCULATOR ☽ «•«* *
 */
const tipCalculatorForm = document.querySelector("form.tip-calculator");
const tipResult = document.querySelector("div.tip-results");
const showTipAmount = document.querySelector("#showTipAmount");
const showTipTotal = document.querySelector("#showTipTotal");

tipCalculatorForm.addEventListener("submit", (e) => {
  e.preventDefault();

  // Get the user inputs
  const billAmount = tipCalculatorForm.bill.value;
  const service = tipCalculatorForm.service.value;
  let numberOfPeople = tipCalculatorForm.numOfPeople.value;

  if (billAmount === "" || service === 0) {
    document.querySelector("div.error").classList.remove("d-none");

    document.querySelector("div.error").innerHTML =
      "Ayaa! Please enter some values for the bill amount and the service quality!";

    // Set timer to clear error message after 5 seconds
    setTimeout(function () {
      document.querySelector("div.error").innerHTML = "";
    }, 5000);

    return; // prevent the function from continuing
  }

  if (numberOfPeople === "" || numberOfPeople <= 1) {
    numberOfPeople = 1;
    document.querySelector("h5.each").style.display = "none";
  } else {
    document.querySelector("h5.each").style.display = "block";
  }

  const tipAmount = (billAmount * service) / numberOfPeople;
  const tipTotal = numberOfPeople * tipAmount;

  tipResult.classList.remove("d-none");
  showTipAmount.textContent = tipAmount.toFixed(2);
  showTipTotal.textContent = tipTotal.toFixed(2);

  // the unary plus operator + is used to convert the tipTotal and billAmount strings to numbers before adding them together
  const totalAmount = (+tipTotal + +billAmount).toFixed(2);

  // message For Total Bill
  const messageForBill = document.querySelector(".messageForBill");

  messageForBill.textContent = `Thank you for using our tip calculator! Based on your inputs, the tip amount is $${tipAmount.toFixed(
    2
  )} each and the total tip is $${tipTotal.toFixed(
    2
  )}. Please remember to pay the total amount of $${totalAmount}, which includes the bill and the tip, to show appreciation for the service you received. We hope you had a great experience and look forward to seeing you again!`;
});

/*
 * *»•» ☾ TEMPERATURE CONVERSION ☽ «•«* *
 */

const tempConversionForm = document.querySelector(".temp-conversion");
const tempConversionError = document.querySelector(".tempConversionError");
const tempConversionResult = document.querySelector(".temp-conversion-result");

tempConversionForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const temperature = tempConversionForm.temperature.value;
  if (temperature === "") {
    tempConversionError.textContent = `Please enter a number for this field!`;
  } else {
    tempConversionError.textContent = "";
  }

  // Get the values
  const convertTempFrom = tempConversionForm.convertTempFrom.value;
  const convertTempTo = tempConversionForm.convertTempTo.value;

  let fahrenheit, celsius, kelvin;

  // fahrenheit to celsius and kelvin
  if (convertTempFrom === "F" && convertTempTo === "C") {
    celsius = ((temperature - 32) * 5) / 9;
    tempConversionResult.textContent = `${temperature}°F = ${celsius.toFixed(
      2
    )}°C`;
  } else if (convertTempFrom === "F" && convertTempTo === "K") {
    kelvin = ((temperature - 32) * 5) / 9 + 273.15;
    tempConversionResult.textContent = `${temperature}°F = ${kelvin.toFixed(
      2
    )}K`;
  }

  // celsius to fahrenheit and kelvin
  if (convertTempFrom === "C" && convertTempTo === "F") {
    fahrenheit = (temperature * 9) / 5 + 32;
    tempConversionResult.textContent = `${temperature}°C = ${fahrenheit.toFixed(
      2
    )}°F`;
  } else if (convertTempFrom === "C" && convertTempTo === "K") {
    kelvin = Number(temperature) + 273.15;
    tempConversionResult.textContent = `${temperature}°C = ${kelvin.toFixed(
      2
    )}K`;
  }

  // kelvin to fahrenheit and celsius
  if (convertTempFrom === "K" && convertTempTo === "F") {
    fahrenheit = ((temperature - 273.15) * 9) / 5 + 32;
    tempConversionResult.textContent = `${temperature}K = ${fahrenheit.toFixed(
      2
    )}°F`;
  } else if (convertTempFrom === "K" && convertTempTo === "C") {
    celsius = temperature - 273.15;
    tempConversionResult.textContent = `${temperature}K = ${celsius.toFixed(
      2
    )}°C`;
  }

  // Show the result
  document.querySelector(".temp-result").classList.remove("d-none");
});

/*
 * *»•» ☾ FUN TRIVIA QUIZ ☽ «•«* *
 */

const correctAnswers = ["C", "C", "B", "A", "C"];
const quizForm = document.querySelector("form.quiz");

quizForm.addEventListener("submit", (e) => {
  e.preventDefault();

  // Initialize score to 0
  let score = 0;

  // Get user answers
  const userAnswers = [
    quizForm.qn1.value,
    quizForm.qn2.value,
    quizForm.qn3.value,
    quizForm.qn4.value,
    quizForm.qn5.value
  ];

  userAnswers.forEach((answer, index) => {
    if (answer === correctAnswers[index]) {
      score += 20;
    }
  });

  document.querySelector("div.quiz-results").classList.remove("d-none");

  let output = 0;
  const animateScore = setInterval(() => {
    document.querySelector("h2.score").textContent = `${output}%`;
    if (output === score) {
      clearInterval(animateScore);
    } else {
      output++;
    }
  }, 20);

  // The div element you want to scroll to
  const scrollToResults = document.querySelector("div.quiz-section");

  // Get the y-coordinate of the top of the div element
  const divTop =
    scrollToResults.getBoundingClientRect().top + window.pageYOffset;

  // Scroll to the top of the div element
  window.scrollTo({ top: divTop, behavior: "smooth" });
});

/*
 * *»•» ☾ TASK MANAGER ☽ «•«* *
 */

const addForm = document.querySelector("form.add");
const todoLists = document.querySelector("ul.todos");

const generateTemplate = (todo) => {
  let html = `<li class="list-group-item d-flex justify-content-between align-items-center">
    ${todo}
    <span class="fa fa-trash text-danger delete"></span>
  </li>`;
  todoLists.innerHTML += html;
};

addForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const todo = addForm.add.value.trim();

  if (todo.length) {
    generateTemplate(todo);
    addForm.reset();
  }
});

// Delete todo item
todoLists.addEventListener("click", (e) => {
  if (e.target.classList.contains("delete")) {
    e.target.parentElement.remove();
  }
});

// Search todos
const filterTodos = (keyword) => {
  Array.from(todoLists.children)
    .filter((todo) => !todo.textContent.toLowerCase().includes(keyword))
    .forEach((todo) => todo.classList.add("d-none"));

  Array.from(todoLists.children)
    .filter((todo) => todo.textContent.toLowerCase().includes(keyword))
    .forEach((todo) => todo.classList.remove("d-none"));
};

const search = document.querySelector(".search input");

search.addEventListener("keyup", (e) => {
  const keyword = search.value.trim().toLowerCase();
  filterTodos(keyword);
});

const filter = document.querySelector(".filter");

filter.addEventListener("keyup", (e) => {
  const keyword = filter.value.trim().toLowerCase();
  filterTodos(keyword);
});

/*
 * *»•» ☾ WEATHER FORECAST ☽ «•«* *
 */

const key = "SVuIL8v61GYnfGQtlBLGmRMjDRBqZzlE";

// Get the weather information

/*
 * *»•» ☾ LOCAL STORAGE PRACTICE ☽ «•«* *
 */

// Store data in Local storage

// get data from Local storage

// updating data

// delete data from Local storage
