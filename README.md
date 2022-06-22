# Responsive Header (반응형 헤더)
미디어 쿼리를 이용하여 반응형 헤더를 만들어보았습니다.
<br><br>

<https://user-images.githubusercontent.com/49368863/175055469-7fe42555-50df-4343-a3eb-bec7c3b70abd.mp4>

## Features
- 웹사이트 로고 및 이름
- 메뉴
- 검색창


## Challenges
1. 메뉴 박스의 padding 때문에 width: 100% 가 페이지를 넘어가게 되었다.
> - overflow 를 hidden 으로 설정하는 방법도 있지만 몇몇 스타일(e.g. border-radius)이 보이지 않기 때문에 best solution 은 아니었다...
> - Solution: box-sizing: border-box
2. 작은 화면에서 우측 상단의 toggle 버튼 JavaScript로 구현하기.
> - Solution: Web API 중 querySelector, addEventListener, toggle 을 이용했다.
