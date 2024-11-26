const myForm = document.getElementById("my_form");

myForm.onsubmit = (event) => {
  event.preventDefault();
};

function press(e) {
  let btn = e.target;
  let foo = btn.querySelector(".loader");
  show(btn, foo);
  setTimeout(() => {
    btn.classList.toggle("press");
    btn.style.padding = "0.5rem 2rem";
    foo.classList.toggle("loading");
    foo.classList.toggle("hidden");
    btn.disabled = false;
  }, 2000);
}
function show(btn, foo) {
  btn.classList.toggle("press");
  btn.style.padding = "0.5rem 1rem";
  foo.classList.toggle("loading");
  foo.classList.toggle("hidden");
  btn.disabled = true;
}
