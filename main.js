//* execute script after page load
window.onload = function digital_fn() {
  //? toggle button
  let toggle = document.querySelector("#nav .toggle-btn");
  let collapse = document.querySelector("#nav .collapse");

  // ? callback function
  toggle.addEventListener("click", function (event) {
    collapse.classList.toggle("active");
  });
};
