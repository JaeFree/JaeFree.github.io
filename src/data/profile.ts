// 사이트에 들어가는 글은 대부분 이 파일 하나에서 고칩니다.
// 프로젝트만 src/content/projects/ 의 Markdown 파일에서 관리합니다.
// 값을 비워 두면('' 또는 []) 그 항목은 화면에 나오지 않거나 "준비 중"으로 표시됩니다.

export const profile = {
  name: '김재표',
  title: 'Game Client Programmer',
  tagline: '때리고, 피하고, 쓰러뜨리는 순간의 손맛을 클라이언트 코드로 구현하는 게임 프로그래머를 목표로 합니다.',
  // 첫 화면의 캐릭터 정보창(CLASS, SPEC 등). 자유롭게 바꾸세요.
  hud: [
    { label: 'CLASS', value: 'Client Programmer' },
    { label: 'SPEC', value: '전투 시스템 구현' },
    { label: 'MAIN', value: 'C# · Unity 6' },
    { label: 'NOW', value: '솔로 게임 「자동조준 서바이버」 제작 중' },
  ],
  photo: 'profile.jpg', // public/ 폴더 안의 파일 이름
};

// 연락처: 공개해도 되는 값만 넣으세요. 비워 두면 버튼이 나오지 않습니다.
export const contact = {
  github: 'https://github.com/JaeFree',
  email: 'rlawovy147@naver.com',
  phone: '010-8842-3745',
};

export const about = {
  intro:
    '게임을 즐기는 유저의 눈으로 보고, 만드는 개발자의 손으로 구현합니다. ' +
    '리그오브레전드 연습생 경험과 80개가 넘는 게임을 플레이한 감각을 전투 시스템 구현에 담는 클라이언트 프로그래머를 목표로 합니다.',
  // 나를 설명하는 키워드 (번호와 함께 표시됩니다)
  values: [
    {
      title: '협업',
      text: '지금까지의 프로젝트를 모두 팀으로 완성했습니다. 역할이 다른 팀원과 데이터 규격부터 맞추고, 각자 만든 부분이 하나의 시스템으로 돌아가게 하는 일을 맡아 왔습니다.',
    },
    {
      title: '유저의 시선',
      text: '리그오브레전드 연습생으로 짧은 판단과 반응이 승패를 가르는 순간을 겪었습니다. 다양한 장르를 플레이하며 "이 전투는 왜 재미있는가"를 유저의 입장에서 고민합니다.',
    },
    {
      title: '전투 구현',
      text: '타격감, 히트 판정, 쿨다운, 스킬 흐름처럼 손끝으로 느껴지는 요소를 클라이언트 코드로 구현하는 데 관심이 많습니다. 하드웨어 프로젝트에서 익힌 "입력 → 판단 → 반응" 흐름을 전투에 적용하고 있습니다.',
    },
    {
      title: '끝까지 동작하게',
      text: '문제가 생기면 로그와 테스트로 원인을 찾고, 실제로 돌아가는 결과물로 마무리합니다.',
    },
  ] as { title: string; text: string }[],
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
  { group: 'Languages', items: [{ name: 'Python' }, { name: 'C++ (Arduino · Unreal Engine)' }, { name: 'C#' }] },
  { group: 'Game Dev', items: [{ name: 'Unity 6' }, { name: 'Unreal Engine' }] },
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

// 많이 플레이한 주요 게임 (목록에서 밑줄로 강조됩니다. 이름은 아래 목록과 똑같이 적어야 합니다)
export const mainGames = ['리그오브레전드', '메이플스토리', '배틀그라운드', '낙원', '피파온라인3', '오버워치 1', '오버워치2', '발로란트', '로스트아크'];

// 해본 게임 리스트: 플랫폼 → 장르 → 게임 이름
// 장르 안의 게임은 화면에 가나다·ABC 순으로 자동 정렬됩니다.
export const games: { platform: string; genres: { genre: string; items: string[] }[] }[] = [
  {
    platform: 'PC',
    genres: [
      { genre: 'MOBA · AOS', items: ['리그오브레전드', '이터널 리턴'] },
      { genre: 'MMORPG · RPG', items: ['메이플스토리', '메이플스토리 M', '마비노기', '엘소드', '테일즈위버', '바람의나라', '로스트아크', '던전앤파이터', '파이널판타지14'] },
      { genre: 'FPS · TPS', items: ['서든어택', '카운터스트라이크온라인', 'Counter-Strike 2', '발로란트', '오버워치 1', '오버워치2', '레인보우식스시즈', '더 파이널스', 'Apex 레전드', 'Black Squad', 'Borderlands2', 'Far Cry5', 'Left 4 Dead 2'] },
      { genre: '배틀로얄 · 익스트랙션', items: ['배틀그라운드', 'H1Z1', 'Z1 Battle Royale', '낙원'] },
      { genre: '액션 · 대전', items: ['사이퍼즈', 'Skul: The Hero Slayer', 'Knockout City 트라이얼', 'Angvik'] },
      { genre: '생존 · 크래프팅', items: ['서브노티카', 'Project Zomboid', 'SCUM'] },
      { genre: '호러', items: ['The Outlast Trials', 'Friday the 13th: The Game', 'Deceit', 'Emily Wants To Play', 'Escape the Backrooms', 'Lethal Company'] },
      { genre: '파티 · 소셜 추리', items: ['Among Us', 'Goose Goose Duck', 'feign', 'LOCKDOWN Protocol'] },
      { genre: '협동 · 물리 퍼즐', items: ['WE WERE HERE', 'Human Fall Flat', 'Hand Simulator', 'Hand Simulator:Survival'] },
      { genre: '스포츠 · 레이싱', items: ['FC온라인', '피파온라인2', '피파온라인3', '마구마구', '카트라이더'] },
      { genre: '캐주얼 · 보드', items: ['버블파이터', '모두의 마블', 'Prominence Poker'] },
      { genre: '어드벤처 · 리듬 · 디펜스', items: ['데이브 더 다이버', '불과 얼음의 춤', 'Bloons TD Battles'] },
      { genre: '샌드박스 · 메타버스', items: ['메이플스토리 월드', '로블록스', 'VRChat'] },
    ],
  },
  {
    platform: '모바일',
    genres: [
      { genre: 'RPG · 전략', items: ['세븐나이츠', 'WOS: 화이트 아웃 서바이벌', '클래시 오브 클랜', '클래시 로얄'] },
      { genre: '러너 · 아케이드', items: ['쿠키런 오븐브레이크', 'Geometry Dash', '무한의 계단', 'Rider', '길건너 친구들'] },
      { genre: '퍼즐 · 두뇌', items: ['블록 블라스트', '마법의 정렬', 'Screwdom', '스도쿠', '오목의 달인'] },
      { genre: '스포츠 · 레이싱', items: ['컴투스 프로야구', '카트라이더 러쉬 플러스'] },
      { genre: '보드 · 캐주얼', items: ['피망 뉴맞고', '세포 특공대', 'Pokemon Go'] },
    ],
  },
];
