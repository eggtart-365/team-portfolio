"use strict";

(function () {
  var page = document.body.getAttribute("data-page") || "";

  var items = [
    { id: "about", href: "about.html", label: "소개" },
    { id: "members", href: "members.html", label: "팀원" },
    { id: "projects", href: "projects.html", label: "작업" },
    { id: "activities", href: "activities.html", label: "기록" },
    { id: "faq", href: "faq.html", label: "질문" },
    { id: "contact", href: "contact.html", label: "연락" }
  ];

  function listHtml() {
    return items
      .map(function (item) {
        var current = item.id === page ? ' aria-current="page"' : "";
        return '<li><a href="' + item.href + '"' + current + ">" + item.label + "</a></li>";
      })
      .join("");
  }

  var markCurrent = page === "home" ? ' aria-current="page"' : "";

  var headerMount = document.querySelector('[data-mount="header"]');
  if (headerMount) {
    headerMount.insertAdjacentHTML(
      "beforebegin",
      '<a class="skip-link" href="#main">본문</a>' +
        '<header class="site-header">' +
        '<div class="pad site-header__bar">' +
        '<a class="site-mark" href="index.html"' + markCurrent + ">ROOM 06</a>" +
        '<button class="nav-toggle" type="button" aria-expanded="false" aria-controls="site-nav"><span class="nav-toggle__label">메뉴</span></button>' +
        '<nav class="site-nav" id="site-nav" aria-label="메뉴"><ul>' + listHtml() + "</ul></nav>" +
        "</div></header>"
    );
    headerMount.remove();

    var header = document.querySelector(".site-header");
    var toggle = header.querySelector(".nav-toggle");
    var nav = header.querySelector(".site-nav");

    function setOpen(open) {
      header.classList.toggle("is-open", open);
      document.body.classList.toggle("nav-open", open);
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
      toggle.querySelector(".nav-toggle__label").textContent = open ? "닫기" : "메뉴";
    }

    toggle.addEventListener("click", function () {
      setOpen(toggle.getAttribute("aria-expanded") !== "true");
    });

    nav.addEventListener("click", function (event) {
      if (event.target.closest("a")) setOpen(false);
    });

    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape" && header.classList.contains("is-open")) {
        setOpen(false);
        toggle.focus();
      }
    });
  }

  var footerMount = document.querySelector('[data-mount="footer"]');
  if (footerMount) {
    footerMount.insertAdjacentHTML(
      "beforebegin",
      '<footer class="site-footer"><div class="pad site-footer__bar">' +
        '<a class="site-mark" href="index.html">ROOM 06</a>' +
        '<nav class="site-nav" aria-label="하단"><ul>' + listHtml() + "</ul></nav>" +
        '<a href="https://github.com/eggtart-365/team-portfolio">저장소</a>' +
        "</div></footer>"
    );
    footerMount.remove();
  }
})();
