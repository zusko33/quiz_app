const mainElement = document.querySelector("main");
const showButton = document.querySelector(".show");
const hideButton = document.querySelector(".hide");
const bookmarkButton = document.querySelector(".mark");
const answer = document.querySelector('[data-js="answer-par"]');

showButton.addEventListener("click", () => {
  console.log("klik");
  answer.classList.remove("answer");
  answer.classList.add("answer-showed");
  showButton.classList.remove("show");
  showButton.classList.add("hide");
  showButton.innerHTML = "Hide Answer";
});
/*
hideButton.addEventListener("click", () => {
  answer.classList.remove("answer-showed");
  answer.classList.add("answer");
  hideButton.classList.remove("hide");
  hideButton.classList.add("show");
  hideButton.innerHTML = "Show Answer";
});
*/
