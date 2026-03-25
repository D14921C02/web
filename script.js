const btn = document.getElementById("showHobby");
const hobby = document.getElementById("hobby");

btn.addEventListener("click", () => {
  if (hobby.style.display === "none") {
    hobby.style.display = "block";
    btn.textContent = "收起興趣";
  } else {
    hobby.style.display = "none";
    btn.textContent = "點我看我的興趣";
  }
});