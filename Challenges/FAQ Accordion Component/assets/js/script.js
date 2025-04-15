"use strict";

// ? 1st way (Basic For Loop)
/*
var allAccordions = document.querySelectorAll(".accordion");

for (let i = 0; i < allAccordions.length; i++) {
  // ! hyshof daymn akher wahed l2no laf wa khls
  // var accordion = allAccordions[i];
  allAccordions[i].addEventListener("click", function () {
    var currentAccordion = allAccordions[i];
    currentAccordion.classList.toggle("active");
    var currentAccordionIcon =
      currentAccordion.querySelector(".accordion-icon");

    if (currentAccordion.classList.contains("active")) {
      currentAccordionIcon.src = "assets/Images/icon-minus.svg";
    } else {
      currentAccordionIcon.src = "assets/Images/icon-plus.svg";
    }

    for (let i = 0; i < allAccordions.length; i++) {
      if (allAccordions[i] !== currentAccordion) {
        allAccordions[i].classList.remove("active");
        var anyIcon = allAccordions[i].querySelector(".accordion-icon");
        anyIcon.src = "assets/Images/icon-plus.svg";
      }
    }
  });
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
      toggleIcon.src = "assets/Images/icon-minus.svg";
    } else {
      toggleIcon.src = "assets/Images/icon-plus.svg";
    }

    const siblings = Array.from(accordion.parentNode.children).filter(
      (sibling) => sibling !== accordion
    );
    siblings.forEach((sibling) => {
      sibling.classList.remove("active");
      const siblingIcon = sibling.querySelector(".accordion-icon");
      if (siblingIcon) {
        siblingIcon.src = "assets/Images/icon-plus.svg";
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
    .attr("src", "assets/Images/icon-plus.svg");
  if ($(this).hasClass("active")) {
    $(this).find(".toggle-icon").attr("src", "assets/Images/icon-minus.svg");
  } else {
    $(this).find(".toggle-icon").attr("src", "assets/Images/icon-plus.svg");
  }
});
