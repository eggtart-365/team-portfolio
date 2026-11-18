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
        '<a class="site-mark" href="index.html"' + markCurrent + ">Room 06</a>" +
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
      '<footer class="site-footer">' +
        '<div class="pad site-footer__bar">' +
        '<a class="site-mark" href="index.html">Room 06</a>' +
        '<nav class="site-nav" aria-label="하단"><ul>' + listHtml() + "</ul></nav>" +
        '<a class="repo" href="https://github.com/eggtart-365/team-portfolio" aria-label="저장소">' +
        '<svg viewBox="0 0 16 16" aria-hidden="true"><path fill="currentColor" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"/></svg>' +
        "</a></div>" +
        '<p class="pad site-footer__rights">© 2026 All rights reserved.</p>' +
        "</footer>"
    );
    footerMount.remove();
  }
})();
