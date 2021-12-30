window.addEventListener("load", () => {
  // get current year
  const year = new Date().getFullYear();
  const yearTitle = document.querySelector(".year");
  yearTitle.innerHTML = year;
});
