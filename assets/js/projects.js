"use strict";

(function () {
  var projects = window.ROOM06_PROJECTS || [];
  var names = window.ROOM06_MEMBER_NAMES || {};
  var list = document.getElementById("projectGrid");

  if (!list) return;

  list.replaceChildren();

  projects.forEach(function (project) {
    var item = document.createElement("li");
    item.id = project.id;

    var link = document.createElement("a");
    link.className = "project-card";
    link.href = project.href;
    if (project.external) {
      link.target = "_blank";
      link.rel = "noopener noreferrer";
    }

    var title = document.createElement("h2");
    title.className = "project-card__title";
    title.textContent = project.title;

    var desc = document.createElement("p");
    desc.className = "project-card__desc";
    desc.textContent = project.desc;

    var members = document.createElement("p");
    members.className = "project-card__names";
    members.textContent = (project.members || [])
      .map(function (id) {
        return names[id] || id;
      })
      .join(", ");

    link.appendChild(title);
    link.appendChild(desc);
    link.appendChild(members);
    item.appendChild(link);
    list.appendChild(item);
  });

  var hash = window.location.hash.replace(/^#/, "");
  if (hash) {
    var target = document.getElementById(hash);
    if (target) target.scrollIntoView();
  }
})();
