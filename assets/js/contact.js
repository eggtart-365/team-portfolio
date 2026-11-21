"use strict";

(function () {
  var form = document.querySelector("[data-contact-form]");
  if (!form) return;

  var to = form.getAttribute("data-to");

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    var name = form.querySelector("#name").value.trim();
    var message = form.querySelector("#message").value.trim();

    var subject = "ROOM 06 문의 - " + name;
    var body = message + "\n\n" + name;

    window.location.href =
      "mailto:" + to +
      "?subject=" + encodeURIComponent(subject) +
      "&body=" + encodeURIComponent(body);
  });
})();
