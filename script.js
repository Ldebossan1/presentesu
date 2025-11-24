window.addEventListener("load", () => {
  const grid = document.getElementById("photoGrid");
  const imgs = grid.querySelectorAll("img");

  function resizeImage(img) {
    const rowHeight = parseInt(
      window.getComputedStyle(grid).getPropertyValue("grid-auto-rows")
    );
    const rowGap = parseInt(
      window.getComputedStyle(grid).getPropertyValue("gap")
    );
    const height = img.getBoundingClientRect().height;

    const rowSpan = Math.ceil((height + rowGap) / (rowHeight + rowGap));
    img.style.gridRowEnd = `span ${rowSpan}`;
  }

  imgs.forEach((img) => {
    if (img.complete) {
      resizeImage(img);
    } else {
      img.addEventListener("load", () => {
        resizeImage(img);
      });
    }
  });

  window.addEventListener("resize", () => {
    imgs.forEach((img) => {
      resizeImage(img);
    });
  });
});
