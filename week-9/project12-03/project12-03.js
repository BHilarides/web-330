"use strict";
/*    JavaScript 7th Edition
      Chapter 12
      Project 12-03

      Project to show a recipe with expanding/contracting content
      Author: Ben Hilarides
      Date:   7.28.25

      Filename: project12-03.js
*/

// Run once the page is loaded and ready
$( () => {
  $("article > h2").click( e => {
    $("article > h2").next().hide();

    let heading = $(e.currentTarget);
    let list = heading.next();
    let headingImage = heading.children("img");

    list.slideToggle(600);

    let iconSrc = headingImage.attr("src");

    if (iconSrc === "plus.png") {
      headingImage.attr("src", "minus.png");
    } else {
      headingImage.attr("src", "plus.png");
    }
  });
});
