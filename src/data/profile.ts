// 사이트에 들어가는 글은 대부분 이 파일 하나에서 고칩니다.
// 프로젝트만 src/content/projects/ 의 Markdown 파일에서 관리합니다.
// 값을 비워 두면('' 또는 []) 그 항목은 화면에 나오지 않거나 "준비 중"으로 표시됩니다.

export const profile = {
  name: '김재표',
  title: 'Game Programmer',
  tagline: '때리고, 피하고, 쓰러뜨리는 순간의 손맛을 코드로 설계하는 게임 프로그래머를 목표로 합니다.',
  // 첫 화면의 캐릭터 정보창(CLASS, SPEC 등). 자유롭게 바꾸세요.
  hud: [
    { label: 'CLASS', value: 'Game Programmer' },
    { label: 'SPEC', value: 'Combat Design' },
    { label: 'MAIN', value: 'C# · Unity 6' },
    { label: 'NOW', value: '솔로 게임 「자동조준 서바이버」 제작 중' },
  ],
  photo: 'profile.jpg', // public/ 폴더 안의 파일 이름
};

// 연락처: 공개해도 되는 값만 넣으세요. 비워 두면 버튼이 나오지 않습니다.
export const contact = {
  github: 'https://github.com/JaeFree',
  email: '', // 예: 'me@example.com'
  phone: '', // 예: '010-1234-5678'
};

export const about = {
  intro:
    '컴퓨터 비전(Python)과 임베디드(Arduino)를 연결해 실제로 동작하는 시스템을 만드는 것을 좋아합니다. ' +
    '팀 프로젝트에서는 주로 Arduino 제어 로직과 하드웨어 제작을 맡았고, MediaPipe 손 인식과 라즈베리파이 데이터 수집도 개발했습니다. ' +
    '하드웨어를 움직이며 익힌 "입력 → 판단 → 반응" 감각을 살려, 지금은 전투 시스템을 설계하는 게임 프로그래머를 목표로 C#과 Unity를 공부하고 있습니다.',
  // 나를 설명하는 키워드. 예: { title: '끈기', text: '원하는 결과가 나올 때까지 원인을 찾습니다.' }
  values: [] as { title: string; text: string }[],
};

// 자격증
// main: 크게 카드로 보여 줄 자격증 / others: 아래 표로 보여 줄 자격증
// status 예: '취득', '취득 예정', '필기 합격'
export const certifications = {
  main: [] as { name: string; issuer: string; status?: string; date?: string }[],
  others: [] as { date: string; name: string; issuer: string }[],
};

// 다루는 기술 및 툴
// level(1~5)을 넣으면 막대가 표시됩니다. 비워 두면 이름만 보입니다.
// 1 사용만 해봤음 · 2 간단한 기능 구현 · 3 프로젝트에 활용 · 4 능숙하게 다룸 · 5 깊이 이해함
type Skill = { name: string; level?: number };
export const skills: { group: string; items: Skill[] }[] = [
  { group: 'Languages', items: [{ name: 'Python' }, { name: 'C++ (Arduino)' }, { name: 'C#' }] },
  { group: 'Game Dev', items: [{ name: 'Unity 6' }] },
  {
    group: 'Vision · AI',
    items: [{ name: 'OpenCV' }, { name: 'MediaPipe' }, { name: 'YOLOv8' }, { name: 'face_recognition' }, { name: 'pyzbar' }],
  },
  {
    group: 'Hardware',
    items: [{ name: 'Arduino Uno / Mega' }, { name: 'Raspberry Pi' }, { name: '서보모터' }, { name: 'DHT11 · MQ135 · PIR 센서' }],
  },
  {
    group: 'Network · IoT',
    items: [{ name: 'MQTT (Mosquitto)' }, { name: 'UART 시리얼' }, { name: 'Bluetooth' }, { name: 'ThingsBoard' }],
  },
  { group: 'Data · Tools', items: [{ name: 'SQLite' }, { name: 'pytest' }, { name: 'Linux · systemd' }, { name: 'Git' }] },
];

// 해본 게임 리스트
// 예: { name: '리그 오브 레전드', genre: 'MOBA', period: '2018 ~ 현재', record: '최고 티어 다이아', note: '정글 주 포지션' }
export const games = [] as { name: string; genre?: string; period?: string; record?: string; note?: string }[];
