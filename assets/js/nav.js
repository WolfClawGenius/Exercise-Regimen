document.addEventListener("click", (event) => {
  if (event.target.closest(".nav-group")) {
    return;
  }

  document.querySelectorAll(".nav-group[open]").forEach((group) => {
    group.removeAttribute("open");
  });
});
