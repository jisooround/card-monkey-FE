<div align="center">
  <img src=https://user-images.githubusercontent.com/109419531/220899559-264b1129-1cb5-4f10-9521-ff9f5d5f051b.png width=500 />
  <h1>Card Monkey</h1>
  <h4>
    Toy Project 1조: 소재헌, 이혜란, 우지수, 공혜지
  </h4>
</div>

***

# 1. 프로젝트 소개 💁
### 프로젝트 설명
- 패스트캠퍼스의 핀테크 미니 프로젝트로 진행된 프로젝트입니다.
- 금융상품 중에서 카드를 상품으로 다루고, 추천해주는 서비스 입니다.
- 주된 기능으로는 로그인, 회원가입, 나의 카드(신청한 카드), 검색, 카드 추천, 관심상품이 있습니다.

### 개발 기간
- 1차: 2023.2.13 ~ 2023.2.24(총 12일)

### 링크 모음
<a href="https://card-monkey.netlify.app/">
  <img src="https://img.shields.io/badge/배포사이트-FF0000?style=for-the-badge&color=yellow" />
</a>&nbsp;&nbsp;
<a href="https://github.com/React-Team-Project/Youtube-Clone">
  <img src="https://img.shields.io/badge/팀레포-181717?style=for-the-badge&logo=github&logoColor=white" />
</a>&nbsp;&nbsp;
<a href="https://www.notion.so/Youtube-Clone-Project-2992e54002d1479181071cf8e0f3f51d">
  <img src="https://img.shields.io/badge/팀노션-fc9847?style=for-the-badge&logo=notion&logoColor=white" />
</a>

<br><br>

# 2. 팀원 소개 & 역할 분담 👥

|소재헌👑|이혜란|우지수|공혜지|
|:---:|:---:|:---:|:---:|
|<a href=><img src= width=160/></a>|<a href="https://github.com/hwisaac"><img src="https://avatars.githubusercontent.com/u/54179672?v=4" width=160/></a>|<a href="https://github.com/syoon0624"><img src="https://avatars.githubusercontent.com/u/77139957?v=4" width=160/></a>|<a href="https://github.com/hayden365"><img src="https://avatars.githubusercontent.com/u/109419531?v=4" width=160/></a>|
|메인 페이지<br>검색 페이지|초기 세팅<br>상세 페이지<br>리팩토링|사이드 바<br>추천 동영상|네비게이션 바<br>README(...)|

<br><br>

# 4. 기술 스택 ⚙️
<img src="https://img.shields.io/badge/html5-E34F26?style=for-the-badge&logo=html5&logoColor=white"> <img src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=black"> <img src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black"> <img src="https://img.shields.io/badge/typescript-3178C6?style=for-the-badge&logo=typescript&logoColor=white">
<br><img src="https://img.shields.io/badge/css-1572B6?style=for-the-badge&logo=css3&logoColor=white"> <img src="https://img.shields.io/badge/styledcomponents-DB7093?style=for-the-badge&logo=styledcomponents&logoColor=white"> <img src="https://img.shields.io/badge/node.js-339933?style=for-the-badge&logo=node.js&logoColor=white">  <img src="https://img.shields.io/badge/Axios-671ddf?style=for-the-badge&logo=Axios&logoColor=white"> <img src="https://img.shields.io/badge/git-F05032?style=for-the-badge&logo=git&logoColor=white">

<br><br>

# 5. 협업 방식 🤝
<img src="https://img.shields.io/badge/github-181717?style=for-the-badge&logo=github&logoColor=white"> <img src="https://img.shields.io/badge/notion-fc9847?style=for-the-badge&logo=notion&logoColor=white"> <img src="https://img.shields.io/badge/discord-5865F2?style=for-the-badge&logo=discord&logoColor=white"> <img src="https://img.shields.io/badge/slack-4A154B?style=for-the-badge&logo=slack&logoColor=white">
- **Github**
<br>팀 레포지토리를 만들었습니다.
<br>develop 브랜치와 각자의 이름으로 브랜치를 생성하고,
<br>작업이 끝나면 각자의 브랜치로 push 후 pull request를 남기면 팀장님이 merge 했습니다.
- **Notion**
<br>팀원별 진행 과정을 공유하고 회의록을 작성할 때 사용했습니다.
- **Discord**
<br>회의할 때 주로 사용했고, 설명이 필요한 부분들은 화면도 종종 공유했습니다.
- **Slack**
<br>간단한 질의/응답/요청 등을 위한 메신저, 혹은 pull request 알리미로 사용했습니다.

<br><br>

# 6. 구현 내용 🛠︎
<details>
<summary>헤더</summary>

1. 왼쪽
   - 로고 클릭: 메인 페이지로 이동
   - 메뉴 클릭: 시 사이드 바 크기 조절
2. 중앙
   - 검색
      - Enter와 🔍︎ 클릭으로 동작
      - 검색: 검색 페이지로 "메인주소+search?q=검색어"로 링크 변경 / 검색어 없을 경우 미동작
      - 검색창 focus: 창 크기 변화 및 아이콘 추가
      - 검색어 입력: 🗙 버튼 생성, 클릭 시 검색어 모두 삭제 
   - 툴팁: 검색, 음성검색
3. 오른쪽
   - 툴팁: 영상 제작, 알림, 사용자
4. 반응형 CSS
   - width 674px 이하
      - 🔍︎ 한 번 클릭: 검색창 열림
      - ⬅ 클릭: 검색창 닫힘
</details>

<details>
<summary>사이드 바</summary>

1. UI
   - 기본형: 아이콘 + 메뉴 이름
   - 축약형: 아이콘
</details>

<details>
<summary>메인 페이지</summary>

1. API
   - 검색(search)
      - 'beautiful' 키워드로 영상 데이터 요청
   - 특정 동영상(video)
      - 위 검색 API 응답의 videoId 값으로 상세 데이터 요청
2. 영상 썸네일
3. 영상 정보
   - 조회수 표기 단위
      - K(Kilo): 1천 이상
      - M(Million): 1백만 이상
      - B(Billion): 10억 이상
   - 업로드 후 지난 시간
      - 영상 업로드 날짜와 오늘 날짜를 비교하여 지난 시간 표기
      - date-fns 모듈 사용
   - 영상길이
      - ISO_8601 duration을 함수를 사용해 표준시각으로 보이게 함
   - CSS 
      - 사이드바가 펼쳐졌는지 여부를 boolean으로 받아서 그에 따라 px을 조정.

</details>

<details>
<summary>검색 페이지</summary>

1. API
   - 검색(search)
      - URL주소의 q값으로 데이터 요청. useLocation과 URLSearchParams 사용
   - 특정 동영상(video)
      - 위 검색 API 응답에서 video id 종류가 video인 경우 요청
   - 특정 채널(channel)
      - 위 검색 API 응답에서 video id 종류가 channel인 경우 요청
2. 검색 리스트
   - 검색 결과 채널과 영상에 따라서 if문으로 다른 컴포넌트로 구현
   - 메인 페이지의 동영상 컴포넌트를 재활용하여 사용
</details>

<details>
<summary>상세 페이지</summary>

1. API
   - 특정 동영상(video)
      - URL주소에서 videoId로 요청
   - 연관 동영상(related)
      - 메인 동영상 videoId 값으로 관련 영상 데이터 요청
   - 댓글 데이터(comment)
      - 메인 동영상 videoId 값으로 댓글 데이터 요청
2. 메인 동영상(왼쪽)
   - 영상 설명란
      - 기본: height 값이 100px로 설명 일부만 노출
      - 클릭: height 값이 auto로 모든 내용 노출
   - 댓글
      - 답글 클릭: 대댓글용 input 박스 생성
      - 댓글 더 보기: 추가 댓글 20개 로딩
3. 관련 동영상(오른쪽)
   - 캐싱: 쿼리키['related', videoId]로 캐싱
5. 반응형 CSS
   - width 1140px 이하
      - 관련 동영상 상단: 썸네일 / 하단: 영상 정보
   - width 830px 이하
      - 상단: 메인 동영상
      - 하단: 관련 동영상
</details>
