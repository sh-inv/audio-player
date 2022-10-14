# **프로젝트 소개 - 오디오 재생 프로그램 만들기**

## 배포 주소
### 📒 https://whimsical-snickerdoodle-2f1ebb.netlify.app/

<br>
<br>

## 프로젝트 설명

- 오디오를 녹음하고, 재생하는 등 오디오 파일을 관리하는 프로그램입니다.
- 상단 메뉴바를 통해서 오디오, 녹음 메뉴로 이동가능합니다.
- 오디오 플레이 리스트와 사운드바는 오디오, 녹음 메뉴 둘 다 공통으로 사용합니다.
- UI는 자유롭게 작업하되 반응형을 구현했습니다.
- 오디오 플레이 리스트에서 음악을 선택하면 플레이 컨텐츠 항목에서 파형이 생셩되고 사운드바에서 조절할 수 있습니다.
- 하단에 오디오 파일 다운로드 버튼을 클릭하면 mp3 파일 형식으로 다운로드 됩니다.
- 녹음메뉴에서 마이크 아이콘을 누르면 녹음이 시작됩니다. 이때 녹음 가능 시간을 선택할 수 있습니다.
- 하단에 음성녹음 다운로드 버튼을 클릭하면 다운로드 됩니다.

<br>
<br>

## **언어**

> JavaScript
> React.js

## **라이브러리**

> styled-components

> styled-reset

> react-dom

> react-router-dom

> axios

> react-compound-timer

> react-h5-audio-player

> wavesurfer.js

<br>
<br>

## 프로젝트 설치 및 실행 방법

1. Node.js를 설치해주세요.
```
https://nodejs.org/
```

2. 레포지토리를 클론 후 폴더로 이동 해주세요.
```
git clone https://github.com/sh-inv/audio-player
cd audio-player
```

3. dependencies를 설치해주세요.
```
npm install
```

4. 명령어를 통해 server를 실행해주세요. (build vite 사용)
```
npm run dev
```

<br>
<br>

## 기능 소개

### ✅ 오디오 녹음 화면 구현
오디오 녹음이 가능하며 녹음 중에 녹음 시간을 표시합니다.

<img src="https://user-images.githubusercontent.com/94745558/195707539-659b145e-79b8-47a4-9197-3ee01e3aa91a.gif" width="50%" height="100%"/>

<br>
<br>

### ✅ 오디오 녹음 파일 최대시간 지정
input 값을 받아 최대 녹음 가능 시간을 control합니다.

<img src="https://user-images.githubusercontent.com/94745558/195709912-87ad8934-3605-4435-9367-ed5b82da4efe.gif" width="50%" height="100%"/>

<br>
<br>

### ✅ 오디오 녹음 파일 재생 구현
저장된 녹음 파일의 재생 시간을 control합니다

<img src="https://user-images.githubusercontent.com/94745558/195708154-624c2f46-e8da-4709-bf31-3486ec8c02ae.gif" width="50%" height="100%"/>

<br>
<br>

### ✅ 오디오 녹음 파일 다운로드 구현
저장된 녹음 파일을 다운로드 합니다.

<img src="https://user-images.githubusercontent.com/94745558/195709196-bd7aaa4d-bf44-4fa4-acef-66d217f7c35e.gif" width="50%" height="100%"/>

<br>
<br>

### ✅ 오디오 재생 화면 구현
오디오 재생 기능이 가능하며 오디오가 재생된 시간과 오디오 파형을 표시합니다.

<img src="https://user-images.githubusercontent.com/94745558/195710062-83a95770-f15f-4bb5-ab61-8ab81fdb4f7b.gif" width="50%" height="100%"/>

<br>
<br>

### ✅ 오디오 파형 구현
현재 선택된 오디오 파일의 파형을 표시합니다.

<img src="https://user-images.githubusercontent.com/94745558/195710537-7987e298-8c31-41cb-86a4-8a0a8b6cbf5c.gif" width="50%" height="100%"/>

<br>
<br>

### ✅ 오디오 파일 다운로드
현재 선택된 오디오 파일을 다운로드 합니다.

<img src="https://user-images.githubusercontent.com/94745558/195710904-ea9dc1b1-a2cf-4064-b19f-6675044a6391.gif" width="50%" height="100%"/>

<br>
<br>

### ✅ 오디오 녹음 화면 반응형

<img src="https://user-images.githubusercontent.com/94745558/195711375-aec713e7-4312-41a3-b7a1-ed4c917f4844.gif" width="150%" height="100%"/>

<br>
<br>

### ✅ 오디오 재생 화면 반응형

<img src="https://user-images.githubusercontent.com/94745558/195711322-ea500172-e1df-4018-9dad-ae9b53f5aa3e.gif" width="150%" height="100%"/>

<br>
<br>

## 역할 분담 및 코드 설명

### [구현] - 오디오 파형 및 재생 파일 다운로드 구현, 반응형 구현
1. 오디오 파형 구현 :
- wavesurfer.js 라이브러리 사용하여 오디오 파형 구현
- 오디오 플레이바와 재생시간과 기능을 동기화
- 오디오가 재생되는 시간에 맞춰서 오디오 파형을 표시
- 오디오가 일시정지, 재생, 건너뛰기, 스크롤 등의 이벤트가 발생시 실시간으로 파형을 표시

2. 재생 파일 다운로드 구현 :
- 오디오 리스트 중에서 하나를 선택하고 파일 확장자를 input 값으로 입력받은 후 파일을 다운로드

2. 반응형 구현 :
- 890px을 기준으로 음성 녹음 화면과 음성 재생 화면의 반응형 구현

<br>

### [유상호] - 음성 녹음 및 녹음 파일 다운로드
1. 음성 녹음
- RECORD 페이지의 마이크를 클릭하면 음성 녹음 시작
- 음성 녹음 중에는 마이크 빨간색으로 변경 및 타이머 작동
- 녹음 가능 시간을 따로 설정 할 수 있음(지정한 시간이 되면 자동으로 녹음 중단)
- 녹음 중에 마이크를 한번 더 클릭시 녹음 중단

2. 음성 녹음 저장
- 녹음이 중단되면 '녹음 가능 시간' 하단에 '녹음 다운로드 & List 추가' 버튼 생성
- '녹음 다운로드 & List 추가' 버튼 클릭시 local 저장소에 저장 및 상단 'Audio List'에 음원 추가(음원 클릭시 재생 가능)

<br>

### [이고운] - 오디오 플레이 리스트 및 사운드 바 구현

- 구현한 기능 : react-h5-audio-player 라이브러리 사용하여 사운드 바 구현 및 오디오 플레이 리스트 생성

- 설명 :

1. 사운드 바 구현 :

- components/AudioPlay 컴포넌트 안에 사운드 바 구현, 플레이어는 react-h5-audio-player 라이브러리 사용
- tracknumber 변경으로 기본 화면에서 다음 곡 혹은 이전곡으로 넘어가는 버튼 생성함.
- 헤더에는 현재 재생 중인 곡 이름이 뜨도록 가져옴.

2. 오디오 리스트 구현 :

- AudioList 컴포넌트 안에 리스트 구현
- json파일로 mock데이터로 음성파일 경로를 저장해서 axios로 가져옴.
- 오디오 리스트는 녹음 메뉴쪽에서도 재활용 할 것이라 메인에서 받아오고 props로 넘겨줌.
- 이때 넘겨준 오디오 리스트를 map을 사용하여 리스트 형식으로 가져옴.
- 생성된 오디오 리스트에서 곡을 클릭하면 tracknumber에 id값을 저장해줌. 여기서 저장된 id값이랑 tracklist의 id가 같으면 그 정보가 track이라는 상태값에 담기는데 props로 넘긴 이 상태값을 사운드 바에서 src를 주소를 사용해 음악을 재생함.

<br>
<br>

# 팀원소개

### ✅ 프론트엔드 구현

- 깃허브 https://github.com/Goohyun3436
- 블로그 https://velog.io/@3436rngus

### ✅ 프론트엔드 유상호

- 깃허브 https://github.com/sh-inv
- 블로그 

### ✅ 프론트엔드 이고운

- 깃허브 https://github.com/KOWOONLEE
- 블로그 https://velog.io/@kkk5689

## **팀 노션**

📝[2주차 프론트 1팀](https://www.notion.so/wecode/1-0836f4996a4e4c90b48508414ee81018)
