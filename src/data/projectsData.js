export const projectsData = [
    {
        id: 'syu-likelion-12th-recruit',
        icon: '🦁',
        title: '삼육 멋사 12기 모집 페이지',
        description: '삼육 멋쟁이사자처럼 12기 아기사자(부원) 모집 페이지',
        role: '2024-1 멋사 12기 운영진 (백엔드)',
        links: [
            { label: 'GitHub', url: 'https://github.com/syu-likelionz-12th/12th_recruit_backend.git' }
        ]
    },
    {
        id: 'wad',
        icon: '💬',
        title: 'W.A.D (What are you doin?)',
        description: '개발 초보자를 위한 ChatGPT 기반 커뮤니티 사이트',
        role: '2024-1 교내 SW 경진대회 "못난이사자들" 팀 백엔드 참여',
        links: [
            { label: '서비스', url: 'https://wad-uglylion-e5cf0llq1-no4hs-projects.vercel.app/' },
            { label: 'GitHub', url: 'https://github.com/W-A-D/WAD_Back' }
        ],
        detail: {
            fullTitle: '2024 교내 SW 경진대회 우수상(3위) 수상작 <br> W.A.D (What are you doin?)',
            subtitle: '대학생과 개발 입문자들을 위한 AI기반 웹 프로젝트 정보 및 일정 공유 커뮤니티',
            members: [
                { name: '박정욱', github: 'jungwook02', roleIcon: 'spring', avatar: 'https://avatars.githubusercontent.com/u/105060201?v=4' },
                { name: '유광렬', github: 'ryeol00', roleIcon: 'spring', avatar: 'https://avatars.githubusercontent.com/u/129136966?v=4' },
                { name: '장준익', github: 'No4hh4oN', roleIcon: 'react', avatar: 'https://avatars.githubusercontent.com/u/155427247?v=4' },
                { name: '심희영', github: 'heeyoung00', roleIcon: 'react', avatar: 'https://avatars.githubusercontent.com/u/165233927?v=4' },
                { name: '이유나', github: '2-una', roleIcon: 'figma', avatar: 'https://avatars.githubusercontent.com/u/165164743?v=4' },
                { name: '김유나', github: 'dbskdbsk', roleIcon: 'figma', avatar: 'https://avatars.githubusercontent.com/u/165157663?v=4' }
            ],
            background: [
                '현재 대학생, 입문자들이 학교 수업외에 개발 프로젝트를 진행하는데 어려움을 겪는다는 문제점을 공감하게 되었고, 이를 해결하기 위해 <br>',
                '**기획/디자인, 백엔드, 프론트엔드 등 각 파트별로 프로젝트 정보를 공유하고, 개발 일정을 체계적으로 관리할 수 있는 커뮤니티 서비스**를 개발하고자 하였다.'
            ],
            techStack: {
                frontend: ['react', 'js'],
                backend: ['spring', 'java'],
                design: ['figma'],
                database: ['mysql', 'aws'],
                deployment: ['aws'],
                cooperation: ['git', 'github', 'discord']
            },
            roles: [
                { role: 'Backend', name: '유광렬', responsibilities: 'JWT 기반 회원가입/로그인, 일정/일반 게시판, 마이페이지 CRUD 기능 구현, 서버 배포' },
                { role: 'Backend', name: '박정욱', responsibilities: '아이디어 제시, 회원가입/로그인, 일반 게시판, 마이페이지 CRUD 기능 구현' },
                { role: 'Frontend', name: '장준익', responsibilities: '메인페이지 구현, 일정게시판 구현, 마이페이지 구현, GPT API 구현, 일정 게시판 서버 연결' },
                { role: 'Frontend', name: '심희영', responsibilities: '메인페이지 구현, 일반게시판 구현, 로그인/회원가입/로그아웃, 일반게시판 서버 연결' },
                { role: 'Product Design', name: '이유나', responsibilities: '메인페이지/일정게시판/마이페이지 디자인, 디자인 시스템/컴포넌트 제작' },
                { role: 'Product Design', name: '김유나', responsibilities: '로그인, 회원가입, 일반게시판, 일반 게시물 작성페이지 디자인' }
            ],
            schedule: [
                { category: '기획', task: '아이디어 회의 / “스택오버플로우”(유사 서비스) 분석 및 보완 / 아이디어 확정', date: '05.16 ~ 05.31' },
                { category: '디자인', task: '아이디어 구체화, 기술 스택 확정 및 ERD, 플로우 차트 작성', date: '06.01 ~ 06.24' },
                { category: '개발', task: '기획/디자인 : 컴포넌트 디자인 및 프론트엔드 구현 과정 피드백 <br> 프론트엔드 : 컴포넌트 구현 및 OpenAI 기능 구현, 배포 <br> 백엔드 : 회원가입/로그인 및 일정, 일반 게시판 기능 구현, 서버 배포', date: '06.28 ~ 08.25' },
                { category: '테스트', task: '백엔드 API 명세 작성 및 프론트와 데이터 연동하여 각종 기능 테스트 <br> (회원가입/로그인, 게시판 CRUD, 마이페이지)', date: '08.26 ~ 09.08' },
                { category: '배포 및 제출', task: '웹서비스 도메인 구매 및 서비스 최종 배포, 최종 보고서 작성, 시연 영상 촬영 및 제출', date: '09.09' }
            ],
            apiSpecs: [
                { label: 'Postman API 명세서 바로가기', url: 'https://documenter.getpostman.com/view/28467558/2sAXjGcZqr' }
            ],
            features: [
                { title: '메인 페이지', image: 'https://github.com/user-attachments/assets/abd91ae2-d3ab-45ee-ab90-93a9a8767921' },
                { title: '일반 게시판', image: 'https://github.com/user-attachments/assets/8f7c8f89-4513-4fd4-befe-96267b280126' },
                { title: '일정 게시글 작성 페이지', image: 'https://github.com/user-attachments/assets/c446aa81-ef8d-419a-81ce-bf31411b5ea3' },
                { title: 'AI채팅(OpenAI) 기능', image: 'https://github.com/user-attachments/assets/1cc32a2f-0e68-4d46-b42a-a387db5def92', fitImage: true }
            ],
            demoVideo: {
                thumbnail: 'https://github.com/user-attachments/assets/0ec2c07e-ec8e-412d-a255-5733ee124895',
                url: 'https://youtu.be/SQxkXWdHU7U?si=t_bbwSiZX9J2qhjM'
            }
        }
    },
    {
        id: 'byeol-chaek-bu-rok',
        icon: '📚',
        title: '별책부록',
        description: 'AI 도서 추천 및 독서대 서비스',
        role: '2024 멋쟁이사자처럼 간지톤(연합 해커톤) "상부삼조" 팀 백엔드 참여',
        links: [
            { label: 'GitHub', url: 'https://github.com/ryul00/3_Team_FE_final.git' }
        ],
        detail: {
            fullTitle: '2024 간지톤 대상 수상작 <br> 별책부록',
            subtitle: '현대인이 독서를 통해 정서적인 돌봄을 받고 힐링할 수 있는 서비스',
            members: [
                { name: '이나영', github: 'Bewheneverwhatiwant', roleIcon: 'next', avatar: 'https://avatars.githubusercontent.com/u/100694715?v=4' },
                { name: '황유빈', github: 'ppinppini', roleIcon: 'next', avatar: 'https://avatars.githubusercontent.com/u/97329194?v=4' },
                { name: '김가현', github: 'Kimgah', roleIcon: 'spring', avatar: 'https://avatars.githubusercontent.com/u/115142931?v=4' },
                { name: '원정아', github: 'jeongawon', roleIcon: 'spring', avatar: 'https://avatars.githubusercontent.com/u/165775691?v=4' },
                { name: '유광렬', github: 'ryeol00', roleIcon: 'spring', avatar: 'https://avatars.githubusercontent.com/u/129136966?v=4' }
            ],
            background: [
                '우리는 현재(2024 11~12월) 대한민국의 유행 중 하나인 "독서"를 활성화 하고, 우울감에 빠진 현대인들의 정서와 더불어 자극적인 콘텐츠에 따른 도파민 중독에 빠진 사람들을 "독서"를 통해 치유하고 힐링할 수 있게 하고자 해당 서비스를 기획하게 되었습니다.'
            ],
            techStack: {
                frontend: ['next', 'tailwindcss', 'ts'],
                backend: ['spring', 'java'],
                database: ['mysql', 'aws'],
                deployment: ['vercel', 'aws'],
                cooperation: ['git', 'github', 'figma', 'notion', 'discord']
            },
            roles: [
                { role: 'Frontend', name: '이나영', responsibilities: 'Next.js 기반 프론트엔드 개발' },
                { role: 'Frontend', name: '황유빈', responsibilities: 'Next.js 기반 프론트엔드 개발' },
                { role: 'Backend', name: '김가현', responsibilities: 'Spring Boot 기반 백엔드 API 개발' },
                { role: 'Backend', name: '원정아', responsibilities: 'Spring Boot 기반 백엔드 API 개발' },
                { role: 'Backend', name: '유광렬', responsibilities: 'Spring Boot 기반 백엔드 API 개발' }
            ],
            features: [
                { title: '로그인 페이지', image: '/gif/login.gif' },
                { title: '서재 조회', image: '/gif/getBook.gif' },
                { title: 'AI 책 추천', image: '/gif/ai-recommend.gif' },
                { title: '독서대 타이머', image: '/gif/timer.gif' },
                { title: '책갈피 추가 및 조회', image: '/gif/bookMarkAdd.gif' },
                { title: '독서대 백색소음', image: '/gif/asmr.gif' },
                { title: '또 읽을 책 추가', image: '/gif/star.gif' },
                { title: '반추하기', image: '/gif/review.gif' },
                { title: '가장 가까운 도서관 안내', image: '/gif/nearLibrary.gif' },
                { title: '근처 도서관 조회', image: '/gif/library.gif' },
                { title: '로그아웃 및 회원탈퇴', image: '/gif/logout.gif' }
            ],
            apiSpecs: [
                { label: '별책부록 API 명세서 바로가기', url: 'https://www.notion.so/api-1387efc1b2e181918e3afbcacca18b09?source=copy_link' }
            ],
            demoVideo: {
                thumbnail: 'https://img.youtube.com/vi/vCadzcZWhLM/0.jpg',
                url: 'https://www.youtube.com/watch?v=vCadzcZWhLM'
            },
            isMobileFeatures: true,
            useHoverEffect: true
        }
    },
    {
        id: 'p-eeting',
        icon: '🤝',
        title: 'P-eeting',
        description: '프리랜서 개발자와 기업 간 프로젝트 매칭 서비스',
        role: '2025-1 자바(Java) 풀스택 개발자 과정 1차 프로젝트 프론트엔드 참여',
        links: [
            { label: '서비스', url: 'https://peeting-5f69fb087-no4hs-projects.vercel.app/' }
        ]
    },
    {
        id: 'syu-likelion-13th-recruit',
        icon: '🦁',
        title: '삼육 멋사 13기 모집 페이지',
        description: '삼육대 멋쟁이사자처럼 13기 아기사자(부원) 모집 페이지',
        role: '2025-1 멋사 13기 운영진 (프론트엔드)',
        links: [
            { label: '서비스', url: 'https://syu-likelion.org/' }
        ]
    },
    {
        id: 'brain-game-smart-zoo',
        icon: '🎮',
        title: '종합 두뇌 게임 "똑똑하ZOO?"',
        description: '혼자서도, 둘이서도 즐길 수 있는 두뇌 게임 컨텐츠(두더지, 과일 퍼즐, 기억력 게임 등)',
        role: '풀스택 개발 : CocosCreator 기반 게임 UI 구현, Node.js 서버 구축, Socket.io 기반 실시간 이벤트 처리 등',
        links: [
            { label: 'Backend', url: 'https://github.com/ryul00/Backend_Repo.git' },
            { label: 'Frontend', url: 'https://github.com/ryul00/capstone_Front_Repo.git' }
        ],
        detail: {
            fullTitle: '2024-1 산학 협력 캡스톤 프로젝트 <br> 똑똑하ZOO? (11 팀)',
            subtitle: '소켓 기반 멀티플레이 호환 종합 두뇌게임 “똑똑하Zoo?”',
            members: [
                { name: '유광렬', github: 'ryeol00', roleIcon: 'nodejs', avatar: 'https://avatars.githubusercontent.com/u/129136966?v=4' },
                { name: '심희영', github: 'heeyoung00', roleIcon: 'https://cdn.worldvectorlogo.com/logos/cocos-creator-3.svg', avatar: 'https://avatars.githubusercontent.com/u/165233927?v=4' },
                { name: '송민기', github: 'pretty2753', roleIcon: 'https://cdn.worldvectorlogo.com/logos/cocos-creator-3.svg', avatar: 'https://avatars.githubusercontent.com/pretty2753?v=4' },
                { name: '장종혁', github: 'homilbat', roleIcon: 'https://cdn.worldvectorlogo.com/logos/cocos-creator-3.svg', avatar: 'https://avatars.githubusercontent.com/homilbat?v=4' },
                { name: '원예은', github: '', roleIcon: 'figma', avatar: '' },
                { name: '정재연', github: '', roleIcon: 'figma', avatar: '' }
            ],
            background: [
                '기존 2D 웹 게임에서 두뇌 집중력·기억력·순발력 등 강화 목적의 복합 기능을 갖춘 게임이 부족하다는 문제 인식에서 시작되었습니다.',
                '오락성 위주의 단순 게임에서 벗어나, **학습·집중력 향상 요소를 결합한 종합 두뇌 게임**으로 기획되었습니다.',
                '싱글 플레이뿐 아니라, **실시간 소켓 통신을 활용한 2인 멀티플레이**까지 확장하여 사용자 몰입도를 극대화하였습니다.'
            ],
            techStack: {
                frontend: ['https://cdn.worldvectorlogo.com/logos/cocos-creator-3.svg', 'ts'],
                backend: ['nodejs', 'js'],
                design: ['figma'],
                database: ['firebase'],
                deployment: ['aws', 'vercel'],
                cooperation: ['git', 'github', 'discord']
            },
            roles: [
                { role: 'FullStack', name: '유광렬', responsibilities: '싱글/멀티 두더지 게임 및 싱글 과일 퍼즐 구현, JWT 기반 로그인/토큰 발급, 방 생성/초대/입장 및 소켓 멀티플레이 로직(API) 구현, Node.js + Firebase 기반 점수 저장 API 구현, 서버 배포' },
                { role: 'Frontend', name: '심희영', responsibilities: '와이어프레임 설계, 싱글 블록 개수 세기 게임 구현, 싱글/멀티 기억력 게임 구현, 보고서 작성 및 회의 진행' },
                { role: 'Frontend', name: '송민기', responsibilities: '싱글/멀티 숫자 뒤집어 맞추기 게임 구현, 싱글 집중력 게임 구현' },
                { role: 'Frontend', name: '장종혁', responsibilities: '싱글 미로 게임 구현' },
                { role: 'Design', name: '원예은', responsibilities: '로그인, 메인 화면, 싱글 게임 디자인' },
                { role: 'Design', name: '정재연', responsibilities: '마이 페이지, 멀티 게임 디자인' }
            ],
            schedule: [
                { category: '기획', task: '아이디어 회의 / “유사 서비스(말랑말랑 두뇌 교실) 분석 및 보완 / 아이디어 확정', date: '03.16 ~ 03.31' },
                { category: '1차 디자인', task: '아이디어 구체화, 와이어프레임 설계, 디자인 인원과 공유, 싱글 게임 디자인 진행', date: '04.01 ~ 04.20' },
                { category: '1차 개발', task: '디자인 : 1차 완료 공유 / 프론트엔드 : 디자인에 맞춰 싱글 게임 프로토타입 개발 / 백엔드 : 서버 구축 및 데이터베이스 연결', date: '04.21 ~ 05.04' },
                { category: '1차 테스트', task: '백엔드 : EC2 서버(http) 배포 및 API 구현 / 프론트엔드 : 싱글 게임 구현 완료 / 전체 : 백/프론트 데이터 연결 후 싱글 게임 테스트 진행', date: '05.05 ~ 05.11' },
                { category: '2차 디자인', task: '멀티 플레이 디자인 완료', date: '04.21 ~ 05.11' },
                { category: '2차 개발', task: '디자인 : 2차 완료 공유 / 광렬 : 디자인에 맞춰 멀티 게임 프로토타입(두더지 게임만) 개발 / 광렬 : 소켓기반 멀티플레이 로직 개발', date: '05.12 ~ 05.24' },
                { category: '2차 테스트', task: '광렬 : 멀티 게임 프로토타입 타 팀원들에게 테스트 및 인수 인계 파일 작성', date: '05.25' },
                { category: '3차 개발', task: '프론트 엔드 : 디자인에 맞춰 멀티 게임 개발 / 백엔드 : 개발되는 게임로직에 맞춰 소켓 서버 코드 리팩토링', date: '05.26 ~ 06.08' },
                { category: '최종 테스트', task: '전체 : 프론트 깃 레포지토리 브랜치 통합 최종 테스트 진행, 코드 최종 리팩토링', date: '06.09 ~ 06.10' },
                { category: '배포 및 제출', task: '광렬 : 서비스 도메인 구매 및 최종 배포, 백엔드 https 설정 완료, 시연 영상 촬영 및 편집 / 희영 : 최종 보고서 및 영상 작성 후 제출', date: '06.11 ~ 06.15' }
            ],
            apiSpecs: [
                { title: '실시간 멀티플레이 로직', label: '코드 정리(Notion) 보러가기', url: 'https://www.notion.so/Node-js-2238231ecbf680e3adc8c52ebb059683?source=copy_link' }
            ],
            features: [
                { title: 'BrowserId 기반 로그인', image: 'https://github.com/user-attachments/assets/b32de221-f461-4899-8736-0fea09e121e3' },
                { title: '방 생성 및 초대', image: 'https://github.com/user-attachments/assets/63588963-df34-4b87-a00b-dd44cee34e0a' },
                { title: '연결 후 게임 선택', image: 'https://github.com/user-attachments/assets/aa1617ca-48c9-45e3-97dd-0d48a4b86040' }
            ],
            demoVideo: {
                thumbnail: 'https://github.com/user-attachments/assets/630890e7-9023-4505-8ee6-11b95046b47d',
                url: 'https://www.youtube.com/watch?v=odzztOYmLfA&t=23s'
            },
            useHoverEffect: true
        }
    },
    {
        id: 'chonsre',
        icon: '🏡',
        title: '촌스레 with 전남',
        description: '전라남도 중심 촌캉스를 위한 AI 기반 맞춤형 여행 코스 추천 서비스',
        role: '2025 관광 데이터 활용 공모전 "두유즈" 팀 백엔드 개발 담당',
        links: [
            { label: 'GitHub', url: 'https://github.com/ryul00/ChonsreBack.git' }
        ],
        detail: {
            fullTitle: '2025 관광 데이터 활용 공모전 출품작 <br> 촌스레 with 전남 (두유즈 팀)',
            subtitle: '전라남도 중심 촌캉스를 위한 AI 기반 맞춤형 여행 코스 추천 서비스',
            members: [
                { name: '유광렬', github: 'ryeol00', roleIcon: 'spring', avatar: 'https://avatars.githubusercontent.com/u/129136966?v=4' },
                { name: '장준익', github: 'No4hh4oN', roleIcon: 'react', avatar: 'https://avatars.githubusercontent.com/u/155427247?v=4' },
                { name: '심희영', github: 'heeyoung00', roleIcon: 'react', avatar: 'https://avatars.githubusercontent.com/u/165233927?v=4' },
                { name: '이유나', github: '2-una', roleIcon: 'figma', avatar: 'https://avatars.githubusercontent.com/u/165164743?v=4' },
                { name: '윤혜원', github: '', roleIcon: 'figma', avatar: '' }
            ],
            background: [
                '**도시민의 회복 욕구와 농촌 체험 관광 수요 증가** <br>' +
                '- 현대 도시민은 과도한 경쟁과 소음 속에서 **심리적 회복**을 갈망하며, 코로나19 이후 **근교·농촌 여행 수요**가 급증. <br>' +
                '- 농촌 여행은 **‘서해안 벨트’ 지역**이 각광 받고 있으며, 특히 **전라남도**는 농촌 여행 광역·시도별 언급량 **10,216건(1위)**으로 높은 언급량을 보임. <br>' +
                '- 청정 자연, 전통 가옥, 농촌 체험 자원 등을 풍부하게 보유해 도시민의 **힐링 요구를 충족시킬 수 있는 최적 지역**임. <br><br>',

                '**MZ세대 중심의 촌캉스 트렌드** <br>' +
                '- 최근 **‘촌캉스’ 열풍**은 단순 관광이 아닌 **정서적 힐링, 디지털 디톡스, SNS 공유 가치, 이색 경험** 등을 중시하는 **MZ세대 라이프스타일**을 반영. <br>' +
                '- MZ세대 여행자들은 숙소·체험·관광지를 개별적으로 검색해 조합해야 하는 번거로움보다, **맞춤형 큐레이션과 추천 코스 제공**에 높은 관심을 보이고 있음. <br><br>',

                '**MZ세대의 개인화 및 경험 중시 특성에 따른 맞춤형 큐레이션 필요성** <br>' +
                '- 여행은 **경험 중심적 소비**가 증가. 단순 관광이 아니라 **감성, 스토리, 공유 가치**를 중시. <br>' +
                '- **나만의 스타일**을 중시하고 **맞춤형 여행**을 선호하는 MZ세대 특성을 반영한 서비스 필요. <br>'
            ],

            techStack: {
                frontend: ['react', 'js'],
                backend: ['spring', 'java'],
                design: ['figma'],
                database: ['mysql', 'aws'],
                deployment: ['aws'],
                cooperation: ['git', 'github', 'discord']
            },
            roles: [
                { role: 'Backend', name: '유광렬', responsibilities: '사용자 관리(OAuth 2.0), BE API 개발 전반(관광데이터, Gpt API), HTTPS 서버 구축 & CICD(AWS), API 명세(PostMan) 등' },
                { role: 'Frontend', name: '장준익', responsibilities: '메인화면, AI 촌캉스 코스 추천 및 저장 화면 등 FE 구현(관광데이터, KakaoMap), FE 빌드 파일 배포(Vercel)' },
                { role: 'Frontend', name: '심희영', responsibilities: '마이페이지, 촌캉스 템플릿 코스 관리 등 FE 구현(관광데이터, Gpt API)' },
                { role: 'Product Design', name: '이유나', responsibilities: '메인화면, AI 촌캉스 코스 추천 및 저장 화면 디자인, 디자인 시스템/컴포넌트 제작, 발표 자료 제작(Figma)' },
                { role: 'Product Design', name: '윤혜원', responsibilities: '마이페이지, 템플릿 촌캉스 코스 관리 디자인, 디자인 시스템/컴포넌트 제작, 발표 자료 제작(Figma)' }
            ],
            publicData: [
                { category: '한국관광공사 OpenAPI (TourAPI)', content: '한국관광공사_국문 관광정보 서비스_GW' },
                { category: '기타 활용 데이터', content: '- 해양수산부_여행지 정보\n- 전라남도·전라남도 농촌체험 마을별 관광 데이터 – [파일데이터]' }
            ],
            apiSpecs: [
                { label: 'Chonsre API 명세서 바로가기', url: 'https://documenter.getpostman.com/view/28467558/2sB3B8sZ8c' }
            ],
            features: [
                { title: '로그인 & 메인화면', image: 'https://github.com/user-attachments/assets/bdf276a3-c6dc-429c-ad0a-c5b6a33e4463' },
                { title: '코스 상세조회', image: 'https://github.com/user-attachments/assets/4dc79d23-5cdd-4523-bc5a-c67cf4b66e5f' },
                { title: 'AI 코스 생성', image: 'https://github.com/user-attachments/assets/78bb9a59-3187-45f6-9088-80c6537116e8' },
                { title: '코스 수정 및 저장', image: 'https://github.com/user-attachments/assets/477dcb19-c11a-44ea-b727-55a259acdfe2' },
                { title: '템플릿 코스 관리', image: 'https://github.com/user-attachments/assets/32d51568-9efb-4322-b4d6-899de6e70eb6' },
                { title: '마이페이지(저장된 코스 관리 및 후기 작성)', image: 'https://github.com/user-attachments/assets/ff4ca525-6052-4f28-9934-feae441cd2a8' }
            ],
            demoVideo: {
                thumbnail: 'https://github.com/user-attachments/assets/6e89e72f-3cd9-42e4-bf12-9e750435ffcb',
                url: 'https://www.youtube.com/watch?v=jFaDGj07epY'
            },
            useHoverEffect: true
        }
    },
    {
        id: 'metabuild-pms',
        icon: '📋',
        title: '메타빌드 사내 PMS 프로젝트',
        description: '회사에서 진행되고 있는 사업지별 사업수행관리 체계화 및 업무 효율성 향상 목적',
        role: '계약 기관 및 담당자 관리 & 사업별 이슈/장애 관리 & PDF계약서 파싱 및 자동 매핑 & 웹 크롤링 기반 데이터 정제 등',
        links: []
    },
    {
        id: 'metabuild-renewal',
        icon: '🔄',
        title: '메타빌드 공식 홈페이지 리뉴얼',
        description: '기존의 노후화된 홈페이지를 대체 할 리뉴얼된 홈페이지와 관리자 페이지 개발',
        role: '관리자 페이지 DB 구성 & "Mesim" 제품 설명 메뉴 개발 & 수상/인증/특허 메뉴 개발 & 자료실 메뉴 개발',
        links: [
            { label: '서비스', url: 'https://www.metabuild.co.kr/renewal/' }
        ]
    },
];
