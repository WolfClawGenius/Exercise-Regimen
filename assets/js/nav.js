(() => {
  const groups = [...document.querySelectorAll(".nav-group")];
  let closeTimer;

  const closeGroups = (except = null) => {
    groups.forEach((group) => {
      if (group !== except) group.removeAttribute("open");
    });
  };

  const scheduleClose = (group) => {
    window.clearTimeout(closeTimer);
    closeTimer = window.setTimeout(() => {
      if (!group.matches(":hover") && !group.contains(document.activeElement)) {
        group.removeAttribute("open");
      }
    }, 120);
  };

  groups.forEach((group) => {
    group.addEventListener("pointerenter", (event) => {
      if (event.pointerType !== "touch") {
        window.clearTimeout(closeTimer);
        closeGroups(group);
        group.setAttribute("open", "");
      }
    });

    group.addEventListener("pointerleave", () => scheduleClose(group));

    group.addEventListener("focusout", (event) => {
      if (!group.contains(event.relatedTarget)) scheduleClose(group);
    });
  });

  document.addEventListener("click", (event) => {
    if (!event.target.closest(".nav-group")) closeGroups();
  });
})();
