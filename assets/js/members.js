"use strict";

// 팀원 카드를 누르면 상세 창을 연다. 티켓은 카드의 data- 속성, 서류는 프로필에서 읽는다.
(function () {
  var modal = document.getElementById("modalBackdrop");
  var closeButton = document.getElementById("modalClose");
  var dossier = document.getElementById("dossier");
  var dossierBody = document.getElementById("dossierBody");
  var lastCard = null;

  var profiles = {
    "kim-hayoung": {
      intro: "팀원 프로필 페이지와 프로젝트 상세 페이지를 맡은 김하영입니다.",
      interest: "웹 프론트엔드",
      skillsTitle: "사용해 본 기술 또는 배우고 싶은 기술",
      skills: "HTML, CSS, JavaScript",
      notes: [
        "다른 팀원이 먼저 병합한 코드와 제 코드가 충돌했을 때, 필요한 부분을 남기고 나머지를 정리해 직접 해결했습니다. 그리고 팀장님 리뷰를 통해서 오류를 해결하기도 하며, 직접 리뷰를 반영하는 과정을 배웠습니다."
      ]
    }
  };

  function paragraph(text, className) {
    var p = document.createElement("p");
    p.className = className;
    p.textContent = text;
    return p;
  }

  function addBlock(title, text) {
    var section = document.createElement("section");
    var heading = document.createElement("h3");
    section.className = "dossier-block";
    heading.className = "dossier-label";
    heading.textContent = title;
    section.appendChild(heading);
    section.appendChild(paragraph(text, "dossier-text"));
    dossierBody.appendChild(section);
  }

  function fillDossier(card) {
    var profile = profiles[card.closest(".badge-slot").id];

    document.getElementById("dossierName").textContent = card.dataset.name;
    dossierBody.replaceChildren();
    dossier.scrollTop = 0;
    if (!profile) return;

    if (profile.intro) dossierBody.appendChild(paragraph(profile.intro, "dossier-intro"));
    if (profile.interest) addBlock("관심 분야", profile.interest);
    if (profile.skills) addBlock(profile.skillsTitle, profile.skills);
    if (profile.notes) {
      profile.notes.forEach(function (note, index) {
        if (index === 0) addBlock("작업하면서 해결한 문제나 배운 점", note);
        else dossierBody.lastElementChild.appendChild(paragraph(note, "dossier-text"));
      });
    }
  }

  function openModal(card) {
    var number = card.dataset.pass.replace("PASS ", "");

    lastCard = card;
    fillDossier(card);
    document.getElementById("ticketLeftNo").textContent = "NO. " + number + " · ROOM 06";
    document.getElementById("ticketPassBadge").textContent = card.dataset.pass;
    document.getElementById("modalTitle").textContent = card.dataset.name;
    document.getElementById("modalSubtitle").textContent = card.dataset.role;
    document.getElementById("modalNote").textContent = "";
    document.getElementById("modalDept").textContent = "ROOM 06";
    document.getElementById("modalDuty").textContent = card.dataset.work;
    document.getElementById("modalYear").textContent = "2026";
    document.getElementById("stubCode").textContent = card.dataset.code;
    document.getElementById("modalGithub").href = "https://github.com/" + card.dataset.github;

    var qr = document.getElementById("modalQrImg");
    qr.src = "assets/images/qr-" + card.closest(".badge-slot").id + ".svg";
    qr.alt = card.dataset.name + " GitHub 프로필 QR 코드";

    modal.classList.add("open");
    closeButton.focus();
  }

  function closeModal() {
    modal.classList.remove("open");
    if (lastCard) lastCard.focus();
  }

  document.querySelectorAll(".id-card").forEach(function (card) {
    card.addEventListener("click", function () {
      openModal(card);
    });
    card.addEventListener("keydown", function (event) {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        openModal(card);
      }
    });
  });

  // 구분 버튼: 팀장 / 팀원만 골라 보기
  var filterButtons = document.querySelectorAll(".filter-btn");
  var slots = document.querySelectorAll(".badge-slot");
  var count = document.getElementById("exhibitCount");

  filterButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      var filter = button.dataset.filter;
      var shown = 0;

      filterButtons.forEach(function (other) {
        var active = other === button;
        other.classList.toggle("active", active);
        other.setAttribute("aria-pressed", active ? "true" : "false");
      });

      slots.forEach(function (slot) {
        var show = filter === "all" || slot.dataset.category === filter;
        slot.hidden = !show;
        if (show) shown += 1;
      });

      count.textContent = "DISPLAYING " + shown + " STAFF CARD" + (shown > 1 ? "S" : "");
    });
  });

  closeButton.addEventListener("click", closeModal);

  modal.addEventListener("click", function (event) {
    if (event.target === modal || event.target.classList.contains("modal-stage")) closeModal();
  });

  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape" && modal.classList.contains("open")) closeModal();
  });
})();
