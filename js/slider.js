const rows = document.querySelectorAll(".schools__row");

rows.forEach((row) => {
  let isDown = false;
  let startX = 0;
  let scrollLeft = 0;

  row.addEventListener("mousedown", (e) => {
    isDown = true;
    row.classList.add("dragging");

    startX = e.pageX - row.offsetLeft;
    scrollLeft = row.scrollLeft;
  });

  row.addEventListener("mouseleave", () => {
    isDown = false;
    row.classList.remove("dragging");
  });

  row.addEventListener("mouseup", () => {
    isDown = false;
    row.classList.remove("dragging");
  });

  row.addEventListener("mousemove", (e) => {
    if (!isDown) return;

    e.preventDefault();

    const x = e.pageX - row.offsetLeft;
    const walk = x - startX;     // 1:1 drag
    row.scrollLeft = scrollLeft - walk;
  });

  row.addEventListener(
    "wheel",
    (e) => {
      e.preventDefault();
      row.scrollLeft += e.deltaY;
    },
    { passive: false }
  );
});
