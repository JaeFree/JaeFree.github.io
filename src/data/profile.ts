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
    { label: 'NOW', value: '솔로 게임 「Escape From Space」 제작 중' },
  ],
  photo: 'profile.jpg', // public/ 폴더 안의 파일 이름
};

// 연락처: 공개해도 되는 값만 넣으세요. 비워 두면 버튼이 나오지 않습니다.
export const contact = {
  github: 'https://github.com/JaeFree',
  email: 'rlawovy147@naver.com',
  phone: '',
};

export const about = {
  intro:
    '게임을 즐기는 유저의 눈으로 보고, 만드는 개발자의 손으로 구현합니다. ' +
    '리그오브레전드 연습생 경험과 91개의 게임을 플레이한 감각을 바탕으로, 전투 시스템을 구현하는 클라이언트 프로그래머를 목표로 합니다. ' +
    '지금은 Unity로 1인 탑다운 슈터 「Escape From Space」를 만들고 있습니다.',
  // 나를 설명하는 키워드 (번호와 함께 표시됩니다)
  values: [
    {
      title: '유저·선수·개발자, 세 가지 시선',
      text: '어릴 때부터 게임을 좋아해 91개의 게임을 플레이하며, 일반 유저가 어디서 재미를 느끼는지 익혔습니다. 2019년 아현고에서 리그오브레전드 연습생(서포터, 최고 티어 그랜드마스터)으로 활동하며 선수의 눈으로 게임을 깊이 분석하는 법을 배웠습니다. 개발자로서는 플레이어가 어느 순간에 긴장하고 쾌감을 느낄지를 먼저 생각합니다.',
    },
    {
      title: '전투 구현',
      text: '플레이어가 느낄 긴장과 쾌감에 맞춰 적의 패턴을 구상합니다. 「Escape From Space」에서는 강한 공격 전에 예고를 보여 주고, 공격 뒤에는 반격할 틈을 남겼습니다. 구르기 무적 회피, 사거리에 따라 달라지는 무기 역할, 처치 순간의 히트스톱도 직접 정해 적용했습니다. 플레이해 보며 수치를 조정해 손끝으로 느껴지는 전투를 만듭니다.',
    },
    {
      title: '협업',
      text: '팀 프로젝트 4개를 완성했습니다. 역할이 다른 팀원과 데이터 규격부터 맞추고, 각자 만든 부분이 하나의 시스템으로 돌아가게 하는 일을 맡아 왔습니다.',
    },
    {
      title: 'AI와 함께 만들기',
      text: 'MediaPipe, YOLOv8, face_recognition 같은 AI 모델을 여러 프로젝트에 붙여 써 왔습니다. 인식은 AI 모델에 맡기고, 그 결과를 하드웨어 제어와 시스템 로직으로 연결했습니다. 개발할 때는 Claude Code와 단계를 나눠 설계하고, 테스트로 결과를 확인합니다.',
    },
    {
      title: '끝까지 동작하게',
      text: '문제가 생기면 로그와 테스트로 원인을 찾습니다. 바코드 재고 프로젝트에서는 테스트 182개와 연결 끊김 시험으로 스캔 기록이 빠짐없이 저장되는지 확인했습니다.',
    },
  ] as { title: string; text: string }[],
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
export const mainGames = ['리그오브레전드', '메이플스토리', '배틀그라운드', '낙원', '피파온라인3', '오버워치 1', '오버워치2', '발로란트', '로스트아크', 'Escape From Tarkov'];

// 해본 게임 리스트: 플랫폼 → 장르 → 게임 이름
// 장르 안의 게임은 화면에 가나다·ABC 순으로 자동 정렬됩니다.
export const games: { platform: string; genres: { genre: string; items: string[] }[] }[] = [
  {
    platform: 'PC',
    genres: [
      { genre: 'MOBA · AOS', items: ['리그오브레전드', '이터널 리턴'] },
      { genre: 'MMORPG · RPG', items: ['메이플스토리', '메이플스토리 M', '마비노기', '엘소드', '테일즈위버', '바람의나라', '로스트아크', '던전앤파이터', '파이널판타지14', '귀혼'] },
      { genre: 'FPS · TPS', items: ['서든어택', '카운터스트라이크온라인', 'Counter-Strike 2', '발로란트', '오버워치 1', '오버워치2', '레인보우식스시즈', '더 파이널스', 'Apex 레전드', 'Black Squad', 'Borderlands2', 'Far Cry5', 'Left 4 Dead 2', '팀포트리스2'] },
      { genre: '배틀로얄 · 익스트랙션', items: ['배틀그라운드', 'H1Z1', 'Z1 Battle Royale', '낙원', 'Escape From Tarkov', 'Escape from Duckov'] },
      { genre: '액션 · 대전', items: ['사이퍼즈', 'Skul: The Hero Slayer', 'Knockout City 트라이얼', 'Angvik', '야채부락리'] },
      { genre: '생존 · 크래프팅', items: ['서브노티카', 'Project Zomboid', 'SCUM'] },
      { genre: '호러', items: ['The Outlast Trials', 'Friday the 13th: The Game', 'Deceit', 'Emily Wants To Play', 'Escape the Backrooms', 'Lethal Company'] },
      { genre: '파티 · 소셜 추리', items: ['Among Us', 'Goose Goose Duck', 'feign', 'LOCKDOWN Protocol'] },
      { genre: '협동 · 물리 퍼즐', items: ['WE WERE HERE', 'Human Fall Flat', 'Hand Simulator', 'Hand Simulator:Survival'] },
      { genre: '스포츠 · 레이싱', items: ['FC온라인', '피파온라인2', '피파온라인3', '마구마구', '카트라이더'] },
      { genre: '캐주얼 · 보드', items: ['버블파이터', '모두의 마블', 'Prominence Poker', '캐치마인드', '윷놀이'] },
      { genre: '어드벤처 · 리듬 · 디펜스', items: ['데이브 더 다이버', '불과 얼음의 춤', 'Bloons TD Battles', '러브비트'] },
      { genre: '샌드박스 · 메타버스', items: ['메이플스토리 월드', '로블록스', 'VRChat'] },
    ],
  },
  {
    platform: '모바일',
    genres: [
      { genre: 'RPG · 전략', items: ['세븐나이츠', 'WOS: 화이트 아웃 서바이벌', '클래시 오브 클랜', '클래시 로얄'] },
      { genre: '러너 · 아케이드', items: ['쿠키런 오븐브레이크', 'Geometry Dash', '무한의 계단', 'Rider', '길건너 친구들'] },
      { genre: '퍼즐 · 두뇌', items: ['블록 블라스트', '마법의 정렬', 'Screwdom', '스도쿠', '오목의 달인'] },
      { genre: '스포츠 · 레이싱', items: ['컴투스 프로야구', '카트라이더 러쉬 플러스', '다함께 차차차'] },
      { genre: '보드 · 캐주얼', items: ['피망 뉴맞고', '세포 특공대', 'Pokemon Go'] },
    ],
  },
];
