# 프로젝트 목표

- 슬라이더 구현
- 슬라이더 상태 전역에서 관리하기
- ~~나갔다 들어와도 상태 유지하기~~
- 서버로부터 데이터 받아와서 화면에 출력하기
- 서버 상태 관리하기

# 프로젝트 세팅(4.7)

- 프로젝트 생성 : npx create-react-app [프로젝트명] -- template typescript
- 패키지 설치 : styled-components, styled-reset
- 글로벌 CSS : createGlobalStyle, reset

# 슬라이더 구현(4.7)

- 패키지 설치 : react-slick, slick-carousel
- 슬라이더 생성 : Slider
- 타입 적용 : declare, interface, React.CSSProperties, React.MouseEventHandle<HTMLDivElement>

# 슬라이더 상태 전역에서 관리하기(4.8)

- 패키지 설치 : recoil
- atom 생성 : atom
- atom 구독 : useRecoilState

# 나갔다 들어와도 상태 유지하기(4.8)

> 슬라이더 화살표 버튼에 이벤트를 달아 상태를 로컬 스토리지에 저장하고 싶었으나, 화살표 버튼에 이벤트를 다는 방법을 찾지 못했음.

# 서버로부터 데이터 받아와서 화면에 출력하기(4.9)

- 패키지 설치 : json-server, axios
- 서버 열기 : yarn json-server --watch db.json --port 4000
- state 생성 : useState
- 데이터 가져오기 : axios.get, useEffect
- 화면에 출력 : optional chaining
