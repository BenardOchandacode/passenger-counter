let count = 0;
let saveEl = document.getElementById("save-el");
let countEl = document.getElementById("count-el");
console.log(countEl);

function increment() {
  count += 1;
  document.getElementById("count-el").textContent = count;
}

function decrement() {
  if (count > 0) {
    count -= 1;
    document.getElementById("count-el").textContent = count;
  } else {
    count = 0;
  }
}
function save() {
  let countStr = count + "-";
  saveEl.textContent += countStr;
  count = 0;
  countEl.textContent = count;
}
function reset() {
  saveEl.textContent = "Previous entries : ";
  countEl.textContent = 0;
}
