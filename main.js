//* execute script after page load
window.onload = function digital_fn() {
  // Hamburger menu
  //? toggle button
  let toggle = document.querySelector("#nav .toggle-btn");
  let collapse = document.querySelector("#nav .collapse");

  // ? callback function
  toggle.addEventListener("click", function (event) {
    collapse.classList.toggle("active");
  });

  // Recent Work grid
  // Mansonary JS
  let grid = document.querySelector(
    "#site-main .recent-work-area .images-flex"
  );

  let msnry = new Masonry(grid, {
    itemSelector: ".flex-items",
    gutter: 100,
    fitWidth: true,
  });
};
