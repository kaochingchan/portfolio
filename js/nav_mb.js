//控制手機版選單
document.addEventListener("DOMContentLoaded", () => {
  const burger = document.getElementById("burger");
  const navText = document.getElementById("nav_mb_text");

  burger.addEventListener("click", () => {
    if (navText.style.display === "flex") {
      navText.style.opacity = "0";
      setTimeout(() => {
        navText.style.display = "none";
      }, 500); // 0.5s matches the CSS transition duration
    } else {
      navText.style.display = "flex";
      setTimeout(() => {
        navText.style.opacity = "1";
      }, 10); // slight delay to ensure display change is processed
    }
  });
});
