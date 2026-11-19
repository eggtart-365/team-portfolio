"use strict";

// 팀원 카드를 누르면 상세 창을 연다. 내용은 카드의 data- 속성에서 읽는다.
(function () {
  var modal = document.getElementById("modalBackdrop");
  var closeButton = document.getElementById("modalClose");
  var lastCard = null;

  function openModal(card) {
    lastCard = card;
    document.getElementById("modalCatalog").textContent = card.dataset.pass + " · " + card.dataset.code;
    document.getElementById("modalTitle").textContent = card.dataset.name;
    document.getElementById("modalSubtitle").textContent = card.dataset.role;
    document.getElementById("modalWork").textContent = card.dataset.work;
    document.getElementById("modalGithub").href = "https://github.com/" + card.dataset.github;
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

  closeButton.addEventListener("click", closeModal);

  modal.addEventListener("click", function (event) {
    if (event.target === modal) closeModal();
  });

  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape" && modal.classList.contains("open")) closeModal();
  });
})();
