// Alert on image click (optional feature)
document.querySelectorAll("figure").forEach(fig => {
  fig.addEventListener("click", () => {
    const caption = fig.querySelector("figcaption").innerText;
    alert(`You clicked on: ${caption}`);
  });
});
