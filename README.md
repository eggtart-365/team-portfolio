# 우리 팀 포트폴리오 웹사이트

팀원 6명이 함께 만드는 팀 포트폴리오 웹사이트입니다. 팀 소개, 팀원별 역량, 프로젝트 결과물과 활동 기록을 공유하고, Git과 GitHub를 활용한 협업 과정을 경험합니다.

> 팀명은 ROOM 06이고, 역할은 안내서 항목과 팀원 희망을 기준으로 배정했습니다. 제출용 문서는 [프로젝트 기획서](docs/프로젝트-기획서.pdf), [역할 분담표](docs/역할-분담표.pdf)입니다. 공통 디자인과 메인 페이지는 저장소에 있고, 나머지 페이지의 내용은 담당자가 채웁니다.

## 프로젝트 정보

| 항목       | 내용                                                              |
| -------- | --------------------------------------------------------------- |
| 팀명       | ROOM 06                                                         |
| 팀장       | 김태현                                                             |
| 팀원       | 김하영, 박찬준, 우정우, 김선재, 김병찬                                        |
| 웹사이트 콘셉트 | 박물관 느낌의 팀원 소개 사이트                                               |
| 저장소      | [team-portfolio](https://github.com/eggtart-365/team-portfolio) |
| 배포 주소    | GitHub Pages 배포 후 추가                                            |

## 개발 환경

- HTML, CSS, JavaScript
- Git, GitHub, SourceTree
- GitHub Pages
- 데이터베이스와 백엔드 없이 정적 웹사이트로 구현

## 화면 구성 및 주요 기능

아래 경로는 기획서의 화면 구성과 같다. 페이지별 기능은 기획서 5장에 적었다.

| 페이지 또는 기능 | 경로(안) | 구현 내용 |
| --- | --- | --- |
| 메인 | `index.html` | 팀명, 프로젝트 소개, 주요 메뉴 |
| 팀 소개 | `about.html` | 팀의 목표, 구성 배경, 활동 방향 |
| 팀원 프로필 | `members.html` | 6명 전원의 소개, 관심 분야, 기술 또는 학습 목표 |
| 프로젝트 갤러리 | `projects.html` | 팀·개인 프로젝트 목록, 이미지, 상세 페이지 링크 |
| 프로젝트 상세 | 프로젝트별 페이지 | 개별 프로젝트 설명, 사용 기술, 결과물 링크 |
| 활동 기록 | `activities.html` | 회의 기록, 개발 과정, 활동 사진 또는 결과물 |
| FAQ | `faq.html` | 자주 묻는 질문과 답 |
| 연락처 및 문의 | `contact.html` | 공개 가능한 연락 방법과 문의 안내 |
| 공통 디자인 및 내비게이션 | 전체 페이지 | 공통 헤더·푸터, 페이지 이동 메뉴, 이미지·아이콘, 일관된 디자인 |

페이지별 담당은 아래 역할 분담을 따릅니다. 공통 헤더·푸터·메뉴·스타일은 디자인 시스템 담당이 만들고, 각 페이지 담당자는 그 위에 자기 화면을 구현합니다.

### 공통 구현 기준

- 모든 페이지를 메뉴와 링크로 연결합니다.
- PC와 모바일에서 텍스트와 이미지가 잘리지 않고 읽기 편하게 구성합니다.
- 외부 이미지와 코드를 사용할 때 출처와 라이선스를 확인하고 기록합니다.
- 비밀번호, 개인 연락처 등 공개하면 안 되는 정보는 게시하지 않습니다.
- 검색, 다크 모드, 애니메이션 등 추가 기능은 필수 기능 완성 후 결정합니다.

## 팀 구성 및 역할 분담

범위와 완료 기준은 역할 분담표와 Issue에 둡니다. 진행 중 역할은 팀 협의로 조정할 수 있습니다.

| 이름  | 구분  | GitHub                | 담당                                       |
| --- | --- | --------------------- | ---------------------------------------- |
| 김태현 | 팀장  | @eggtart-365          | 메인 페이지, 디자인 시스템(공통 헤더·푸터, 내비게이션, 공통 스타일) |
| 김하영 | 팀원  | @hiltha0              | 팀원 프로필, 프로젝트 상세 페이지                      |
| 박찬준 | 팀원  | @pastedesoterik       | FAQ, 연락처 및 문의, 이미지 및 아이콘 관리              |
| 우정우 | 팀원  | @jw0827               | 팀 소개 페이지, 웹 접근성 개선                       |
| 김선재 | 팀원  | @ktjswo               | 프로젝트 갤러리, 사용성 및 화면 테스트                   |
| 김병찬 | 팀원  | @gimbyeongchan882-jpg | 활동 기록 페이지, GitHub Pages 배포               |

모든 팀원은 맡은 기능을 직접 구현합니다. 반응형 화면 점검과 코드 리뷰는 함께 수행합니다.

## 진행 일정

안내서의 상세 주차별 일정에 따른 계획이며, 실제 날짜는 팀 회의 후 확정합니다.

| 기간 | 주요 작업 | 제출물 및 점검 사항 |
| --- | --- | --- |
| 1주차 | 팀 구성, 콘셉트 결정, 화면·기능 설계, 협업 환경 구성 | 프로젝트 기획서, 역할 분담표, 저장소 주소 |
| 2~3주차 | 기능 구현, PR 및 리뷰, 병합, 충돌 해결, 통합 테스트 | 팀원별 구현·커밋·PR·리뷰 기록 |
| 4주차 | 전체 테스트, 오류 수정, 배포, 문서 정리, 발표 | 웹사이트 URL, 저장소 URL, README, 발표 자료 |

## Contributing Rule

### 브랜치 전략

| 브랜치 | 용도 |
| --- | --- |
| `main` | Production 브랜치. GitHub Pages에 배포할 검증된 코드 관리 |
| `develop` | 개발 중인 기능이 병합되는 메인 개발 브랜치 |
| `feat/내용` | 각 팀원이 담당 기능을 개발하는 개인별 feature 브랜치 |

기본 병합 흐름은 `feat/내용 → develop → main`입니다.

- 최신 `develop`에서 기능 브랜치를 생성합니다.
- 브랜치 이름은 작업 내용을 알 수 있도록 작성합니다. 예: `feat/main-page`, `feat/members`, `feat/common-layout`.
- 같은 기능을 나누어 맡으면 작업 범위를 이름에 구분합니다. 예: `feat/members-layout`, `feat/members-data`.
- `main`과 `develop`에 직접 푸시하지 않고 Pull Request로 병합합니다.
- 기능 개발 PR의 대상은 `develop`, 배포 PR의 대상은 `main`으로 지정합니다.
- `develop`에서 통합 테스트를 마친 뒤 `main`으로 병합합니다.

### 작업 순서

1. 작업을 시작하기 전에 Issue에 구현 내용, 담당자, 완료 조건을 작성합니다.
2. 최신 `develop`에서 `feat/내용` 브랜치를 생성합니다.
3. 담당 기능을 직접 구현하고 의미 있는 단위로 커밋·푸시합니다.
4. `develop`을 대상으로 PR을 작성하고 관련 Issue 번호를 연결합니다.
5. 다른 팀원의 리뷰를 받고 필요한 수정을 반영한 뒤 병합합니다.
6. Issue의 완료 조건을 확인하고 완료 처리합니다.

팀장은 초기 Issue 정리를 주도하고, 각 팀원은 자신의 담당 기능 Issue를 직접 작성하거나 구체화합니다.

### 커밋 메시지

작업 내용을 알 수 있도록 `유형: 변경 내용` 형식으로 작성합니다.

```text
feat: 메인 페이지 레이아웃 구현
style: 모바일 화면 간격 수정
fix: 프로젝트 링크 오류 수정
docs: README 실행 방법 작성
```

### Pull Request 및 코드 리뷰

PR에는 다음 내용을 포함합니다.

- 변경한 기능과 수정한 파일
- 구현 결과 또는 화면 캡처
- 테스트 방법과 결과
- 관련 Issue 번호

모든 팀원은 최소 1개의 PR을 작성하고, 다른 팀원의 PR을 최소 1회 리뷰합니다. 리뷰가 완료된 후 병합하며, 개선 의견이나 확인한 내용을 구체적으로 남깁니다.

### 병합 충돌 기록

충돌이 발생하면 관련 팀원과 함께 변경 내용을 확인해 해결합니다. 충돌 상황, 해결 방법, 해결 결과와 관련 PR 링크를 활동 기록 또는 별도 작업 기록에 남깁니다.

## 디자인 시스템

공통 화면 규칙은 [AGENTS.md](AGENTS.md)에 있다. 페이지를 만들거나 AI에게 맡길 때 그 파일을 먼저 읽는다. 글꼴은 Pretendard GOV 하나다.

## 실행 및 배포

저장소를 내려받아 `index.html`을 브라우저로 엽니다. 글꼴과 메인 화면의 움직임은 인터넷에 연결되어 있을 때 불러옵니다.

- 배포 계획: `main` 브랜치의 검증된 코드를 GitHub Pages로 배포합니다.
- GitHub Pages 설정과 최초 배포 확인 후 실제 배포 주소를 이 문서에 추가합니다.

## 출처

| 자료 | 용도 | 라이선스 |
| --- | --- | --- |
| [Pretendard GOV](https://github.com/orioncactus/pretendard) | 글꼴 | SIL OFL 1.1 |
| [GSAP](https://gsap.com/community/standard-license/) | 메인 화면 움직임 | Standard License, 무료 |
| [건물 외관](https://images.unsplash.com/photo-1487958449943-2429e8be8625) | 메인 화면 | [Unsplash License](https://unsplash.com/license) |
| [복도](https://images.unsplash.com/photo-1497366216548-37526070297c) | 메인 화면 | [Unsplash License](https://unsplash.com/license) |
| [유리 복도](https://images.unsplash.com/photo-1497366754035-f200968a6e72) | 메인 화면 | [Unsplash License](https://unsplash.com/license) |
| [거실](https://images.unsplash.com/photo-1600607687939-ce8a6c25118c) | 메인 화면 | [Unsplash License](https://unsplash.com/license) |

화면 참고: [Immersive website portfolio for developer](https://www.behance.net/gallery/238189427/Immersive-website-portfolio-for-developer), [Personal Portfolio Website for Industrial Designer](https://www.behance.net/gallery/212841165/Personal-Portfolio-Website-for-Industrial-Designer). 사진은 저장소 `assets/images/`에 두었다.