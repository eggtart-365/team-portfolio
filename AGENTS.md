# ROOM 06

페이지를 만들기 전에 이 파일을 읽는다. 화면 문구로 규칙을 설명하지 않는다.

정적 HTML, CSS, JavaScript만 쓴다. npm, React, Bootstrap, Tailwind를 넣지 않는다. 색은 `tokens.css` 변수만 쓴다. 글꼴은 Pretendard GOV 하나다. 다른 글꼴, 인라인 스타일, 카드, 그림자, 그라데이션, 번호 라벨, 영문 장식을 추가하지 않는다.

헤더와 푸터는 `assets/js/layout.js`가 그린다. HTML에 메뉴를 다시 쓰지 않는다. 페이지는 저장소 루트에 둔다.

## 하지 말 것

- "이 페이지는 ~입니다", "담당 ○○○", "이 자리에 작성" 같은 안내 문장을 화면에 넣지 않는다.
- 점선 상자, 작품 라벨, eyebrow, 버튼 두 개짜리 히어로를 만들지 않는다.
- 메인 외의 페이지에 문단을 채우기 전에는 제목만 둔다.
- 전화번호, 학번, 비밀번호, 공개하기로 하지 않은 이메일을 적지 않는다.
- 모션 라이브러리를 더 넣지 않는다. 메인 등장만 `assets/js/motion.js`에 있다.

## 페이지

| 파일 | 담당 |
| --- | --- |
| `index.html` | 김태현. 첫 화면과 이름 목록 |
| `about.html` | 우정우 |
| `members.html` | 김하영. 아래 id는 유지 |
| `projects.html` | 김선재. 상세는 김하영, 파일명 `project-이름.html`, `data-page="projects"` |
| `activities.html` | 김병찬 |
| `faq.html` | 박찬준 |
| `contact.html` | 박찬준 |

앵커: `kim-taehyun` `kim-hayoung` `park-chanjun` `woo-jungwoo` `kim-seonjae` `kim-byeongchan`

## 골격

```html
<!DOCTYPE html>
<html lang="ko">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>페이지 · ROOM 06</title>
    <meta name="theme-color" content="#f2f2ef">
    <link rel="icon" href="assets/favicon.svg" type="image/svg+xml">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable-gov-dynamic-subset.min.css">
    <link rel="stylesheet" href="assets/css/tokens.css">
    <link rel="stylesheet" href="assets/css/base.css">
    <link rel="stylesheet" href="assets/css/components.css">
  </head>
  <body data-page="about">
    <div data-mount="header"></div>
    <main id="main" class="page pad" tabindex="-1">
      <h1>소개</h1>
      <div class="prose">
        <p>본문.</p>
      </div>
    </main>
    <div data-mount="footer"></div>
    <script src="assets/js/layout.js"></script>
  </body>
</html>
```

`data-page`는 `home` `about` `members` `projects` `activities` `faq` `contact` 중 하나다. 제목 `h1`은 페이지당 하나.

이름 목록은 메인의 줄과 같다. 오른쪽 작은 글은 직책만 쓴다. 담당 페이지 이름을 넣지 않는다. 메인 화면의 이름 줄에는 오른쪽 글을 두지 않는다.

```html
<a class="index-list__row" href="members.html#kim-taehyun">
  <span class="index-list__title">김태현</span>
</a>
```

`.reel`은 `index.html`만 쓴다. 사진 아래에 설명 문장을 붙이지 않고, 그 사진이 팀의 작업인 것처럼 적지 않는다.

작업도 같은 줄이다. 이미지가 있으면 줄 아래 `figure.frame`에 두고, `alt`를 쓴다. 파일은 `assets/images/`. 외부 주소를 바로 걸지 않는다.

```html
<div class="faq">
  <details class="faq__item">
    <summary>질문</summary>
    <div class="faq__a">답.</div>
  </details>
</div>
```

```html
<form class="form">
  <div class="field">
    <label class="label" for="name">이름</label>
    <input class="input" id="name" name="name" type="text" autocomplete="name">
  </div>
  <button class="button" type="button">보내기</button>
</form>
```

서버가 없다. 폼을 백엔드에 연결하지 않는다.

색은 `--bg` `--ink` `--muted` `--line`만 쓴다. 본문은 `.prose` 너비를 넘기지 않는다.

커밋은 `feat: 팀 소개 본문 작성`처럼 한 줄이다. Co-authored-by를 붙이지 않는다.
