"use strict";

// 팀원 카드를 누르면 상세 창을 연다. 내용은 카드의 data- 속성에서 읽는다.
(function () {
  var modal = document.getElementById("modalBackdrop");
  var closeButton = document.getElementById("modalClose");
  var lastCard = null;

  function openModal(card) {
    var number = card.dataset.pass.replace("PASS ", "");

    lastCard = card;
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
    if (event.target === modal) closeModal();
  });

  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape" && modal.classList.contains("open")) closeModal();
  });
})();
