const mainElement = document.querySelector("main");
const showButtons = document.querySelectorAll(".show");
const hideButtons = document.querySelectorAll(".hide");
const bookmarkButton = document.querySelector(".mark");
const answer = document.querySelector("[data-js='answer-par']");
const card = document.querySelector(".question-card");

showButtons.forEach(function (showButton) {
  showButton.addEventListener("click", (e) => {
    e.preventDefault();
    console.log("klik");
    answer.classList.add("answer-showed");
    showButton.remove();
    // now create element hide button;
    // try to do this for all paragraphs;
  });
});

hideButtons.forEach(function (hideButton) {
  hideButton.addEventListener("click", (e) => {
    e.preventDefault();
    console.log("klik");
    answer.classList.add("answer");
    hideButton.classList.remove("hide");
    hideButton.classList.add("show");
    hideButton.innerHTML = "Show Answer";
  });
});
