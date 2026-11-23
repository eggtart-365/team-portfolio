"use strict";

// 팀원 카드를 누르면 상세 창을 연다. 티켓은 카드의 data- 속성, 서류는 프로필에서 읽는다.
(function () {
  var modal = document.getElementById("modalBackdrop");
  var closeButton = document.getElementById("modalClose");
  var dossier = document.getElementById("dossier");
  var dossierBody = document.getElementById("dossierBody");
  var lastCard = null;

  var profiles = {
    "kim-taehyun": {
      intro: "WebGL과 실시간 데이터 처리를 좋아하는 Fullstack 개발자 김태현입니다!",
      interest: "Embeded System, Infrastructure, AX, Product Design",
      skillsTitle: "사용해 본 기술",
      skills: [
        { label: "Languages", value: "Java · TypeScript · JavaScript · Python · Go · C" },
        { label: "Frontend", value: "React · Next.js · React Router · TailwindCSS · styled-components" },
        { label: "Backend", value: "Spring Boot · NestJS · Express · Elysia · FastAPI" },
        { label: "Database", value: "PostgreSQL · MySQL · InfluxDB · MySQL" },
        { label: "Tools & Hardware", value: "Git · GitHub · Docker · Arduino(+ ESP32)" }
      ],
      learn: "Collaborative & interactive applications, Low-level protocols such as CAN / I2C",
      notes: [
        "팀장으로서 프로젝트가 빠르고 효율적이며 일관적인 방향으로 갈 수 있도록 구성하는 과정이 가장 어려웠습니다.",
        "팀원들을 위해 메인 페이지 및 디자인 시스템을 구성하고 이슈를 생성 및 분배하여 효율적인 분업이 가능하도록 구성하였습니다.",
        "6명이서 동시에 진행하는 프로젝트 상 Conflict가 발생하기 마련인데 Contributing Rule 설정 및 카카오톡을 통한 지속적인 소통을 통해 해당 이슈를 최소화 하였습니다."
      ]
    },
    "kim-hayoung": {
      intro: "팀원 프로필 페이지와 프로젝트 상세 페이지를 맡은 김하영입니다.",
      interest: "웹 프론트엔드",
      skillsTitle: "사용해 본 기술 또는 배우고 싶은 기술",
      skills: "HTML, CSS, JavaScript",
      notes: [
        "다른 팀원이 먼저 병합한 코드와 제 코드가 충돌했을 때, 필요한 부분을 남기고 나머지를 정리해 직접 해결했습니다. 그리고 팀장님 리뷰를 통해서 오류를 해결하기도 하며, 직접 리뷰를 반영하는 과정을 배웠습니다."
      ]
    },
    "kim-seonjae": {
      intro: "새로운 것을 배우고 직접 해보는 것을 좋아합니다.",
      interest: "웹 개발과 웹사이트 디자인",
      skillsTitle: "사용해 본 기술 또는 배우고 싶은 기술",
      skills: "Git, GitHub를 사용해 봤고 HTML, CSS, JavaScript를 더 배우고 싶습니다.",
      notes: [
        "프로젝트 페이지를 수정하면서 GitHub에서 커밋과 PR을 하는 방법을 배웠고, 파일명 관리의 중요성도 알게 됐습니다."
      ]
    },
    "kim-byeongchan": {
      intro: "Github를 이용하여 팀의 기록과 배포를 맡은 김병찬입니다.",
      interest: "웹 개발",
      skillsTitle: "사용해 본 기술 또는 배우고 싶은 기술",
      skills: [
        { label: "사용", value: "HTML, Git, GitHub, SourceTree, GitHub Pages" },
        { label: "배우고 싶은 것", value: "CSS, JavaScript" }
      ],
      notes: [
        "처음에는 Git을 전혀 몰랐지만,이슈 확인 → 브랜치 생성 → 커밋 → PR → 리뷰 → 병합 과정을 직접 해 보며 협업 흐름을 익혔습니다.",
        "PR에 Closes #8을 적었는데 이슈가 자동으로 연결되지 않아 찾아보니 자동 연결은 기본 브랜치(main)로 가는 PR에서만 동작해서 develop 대상 PR은 직접 연결해야 한다는 것을 알게 됐습니다.",
        "또 활동 기록의 각 항목에 관련 PR 링크를 추가해 기록만 보고도 실제 작업 내용을 확인할 수 있게 개선하는 작업을 했습니다."
      ]
    }
  };

  function paragraph(text, className) {
    var p = document.createElement("p");
    p.className = className;
    p.textContent = text;
    return p;
  }

  function addBlock(title, nodes) {
    var section = document.createElement("section");
    var heading = document.createElement("h3");
    section.className = "dossier-block";
    heading.className = "dossier-label";
    heading.textContent = title;
    section.appendChild(heading);
    nodes.forEach(function (node) {
      section.appendChild(node);
    });
    dossierBody.appendChild(section);
  }

  function skillNodes(skills) {
    if (typeof skills === "string") return [paragraph(skills, "dossier-text")];
    return skills.map(function (item) {
      var line = document.createElement("p");
      var label = document.createElement("span");
      line.className = "dossier-line";
      label.textContent = item.label;
      line.appendChild(label);
      line.appendChild(document.createTextNode(item.value));
      return line;
    });
  }

  function fillDossier(card) {
    var profile = profiles[card.closest(".badge-slot").id];

    document.getElementById("dossierName").textContent = card.dataset.name;
    dossierBody.replaceChildren();
    dossier.scrollTop = 0;
    if (!profile) return;

    if (profile.intro) dossierBody.appendChild(paragraph(profile.intro, "dossier-intro"));
    if (profile.interest) addBlock("관심 분야", [paragraph(profile.interest, "dossier-text")]);
    if (profile.skills && profile.skills.length) addBlock(profile.skillsTitle, skillNodes(profile.skills));
    if (profile.learn) addBlock("배우고 싶은 기술", [paragraph(profile.learn, "dossier-text")]);
    if (profile.notes && profile.notes.length) {
      addBlock("작업하면서 해결한 문제나 배운 점", profile.notes.map(function (note) {
        return paragraph(note, "dossier-text");
      }));
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
