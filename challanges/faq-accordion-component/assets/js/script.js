"use strict";

// ? 1st way (Basic For Loop)
/*
var allAccordions = document.querySelectorAll(".accordion");
for (var i = 0; i < allAccordions.length; i++) {
  // ! hyshof daymn akher wahed l2no laf wa khls
  // var accordion = allAccordions[i];
  // ! use an immediately invoked function expression (IIFE). This creates a new scope for each i
  (function (index) {
    allAccordions[index].addEventListener("click", function () {
      var currentAccordion = allAccordions[index];
      currentAccordion.classList.toggle("active");
      var currentAccordionIcon =
        currentAccordion.querySelector(".accordion-icon");

      if (currentAccordion.classList.contains("active")) {
        currentAccordionIcon.src = "assets/imgs/icon-minus.svg";
      } else {
        currentAccordionIcon.src = "assets/imgs/icon-plus.svg";
      }

      for (var i = 0; i < allAccordions.length; i++) {
        if (allAccordions[i] !== currentAccordion) {
          allAccordions[i].classList.remove("active");
          var siblingIcon = allAccordions[i].querySelector(".accordion-icon");
          siblingIcon.src = "assets/imgs/icon-plus.svg";
        }
      }
    });
  })(i);
}
*/

// ? 2nd way (ForEach Loop)
/*
const allAccordions = document.querySelectorAll(".accordion");

allAccordions.forEach((accordion) => {
  accordion.addEventListener("click", () => {
    accordion.classList.toggle("active");

    const toggleIcon = accordion.querySelector(".accordion-icon");
    if (accordion.classList.contains("active")) {
      toggleIcon.src = "assets/imgs/icon-minus.svg";
    } else {
      toggleIcon.src = "assets/imgs/icon-plus.svg";
    }

    const siblings = Array.from(accordion.parentNode.children).filter(
      (sibling) => sibling !== accordion
    );
    siblings.forEach((sibling) => {
      sibling.classList.remove("active");
      const siblingIcon = sibling.querySelector(".accordion-icon");
      if (siblingIcon) {
        siblingIcon.src = "assets/imgs/icon-plus.svg";
      }
    });
  });
});
*/

// ? 3rd way (JQuery)
$(".accordion").click(function () {
  $(this).toggleClass("active");
  $(this).siblings(".accordion").removeClass("active");
  $(this)
    .siblings(".accordion")
    .find(".toggle-icon")
    .attr("src", "assets/imgs/icon-plus.svg");
  if ($(this).hasClass("active")) {
    $(this).find(".toggle-icon").attr("src", "assets/imgs/icon-minus.svg");
  } else {
    $(this).find(".toggle-icon").attr("src", "assets/imgs/icon-plus.svg");
  }
});
