var heading = document.querySelector("currentDay");
var currentTime = moment();
let currentHour = moment().hour();
currentDay.textContent = currentTime.format("dddd, MMMM, Do,");

let inputELS = document.querySelectorAll("input");
let todos;
if (localStorage.getItem("todos") == null) {
  todos = {};
} else {
  todos = JSON.parse(localStorage.getItem("todos"));
}

console.log(todos);
for (i = 0; i < inputELS.length; i++) {
  let inputEl = inputELS[i];
  let inputID = inputEl.getAttribute("id");
  console.log(inputID);
  console.log(todos[inputID]);

  if (todos[inputID]) {
    inputEl.value = todos[inputID];
  }
  if (currentHour > inputID) {
    inputEl.setAttribute('class', 'col border border-primary past')
  } else if (currentHour == inputID) {
    inputEl.setAttribute('class', 'col border border-primary present')
  } else {
    inputEl.setAttribute('class', 'col border border-primary future')
  }
};

$(".row").on("click", "button", function (event) {
  const btEl = event.currentTarget;
  const time = btEl.getAttribute("name");

  let inputEL = document.getElementById(time);

  if (inputEL.value == '') {
    delete todos[time];
  } else {
    todos[time] = inputEL.value;
  }
  console.log(todos);
  localStorage.setItem("todos", JSON.stringify(todos));
});



