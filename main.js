// BURGER
const burger = document.querySelector(".burger");
const menu = document.querySelector(".menu");

burger.addEventListener("click", (e) => {
  e.currentTarget.classList.toggle("burger_open");
  menu.classList.toggle("menu_open");
});
// ACCORDION-ANIMATION
const accordion = document.querySelector(".accordion");
const accordionItems = document.querySelectorAll(".item-question");

accordionItems.forEach((el) => {
  el.addEventListener("click", (e) => {
    const target = e.currentTarget;
    if (target.classList.contains("item-question_open")) {
      target.classList.remove("item-question_open");
      const answer = target.querySelector(".item-question__answer");
      answer.style.height = "0";
    } else {
      accordionItems.forEach((el) => {
        el.classList.remove("item-question_open");
        const answer = el.querySelector(".item-question__answer");
        answer.style.height = "0";
      });

      target.classList.add("item-question_open");
      const answer = target.querySelector(".item-question__answer");
      answer.style.height = answer.scrollHeight + "px";
    }
  });
});
