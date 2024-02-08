"use strict";

$(".accordion").click(function () {
  // Toggle 'active' class on the clicked accordion
  $(this).toggleClass("active");

  // Remove 'active' class from sibling accordions
  $(this).siblings(".accordion").removeClass("active");
  $(this)
    .siblings(".accordion") // Select sibling accordions
    .find(".toggle-icon") // Find toggle icons within sibling accordions
    .attr("src", "assets/Images/icon-plus.svg"); // Change the src attribute to the plus icon

  // Toggle icon source based on accordion state
  if ($(this).hasClass("active")) {
    // If the accordion is active, change the icon to minus
    $(this).find(".toggle-icon").attr("src", "assets/Images/icon-minus.svg");
  } else {
    // If the accordion is not active, change the icon to plus
    $(this).find(".toggle-icon").attr("src", "assets/Images/icon-plus.svg");
  }
});