const Projects = () => {
    const projects = [
        {
            icon: '🦁',
            title: '삼육 멋사 12기 모집 페이지',
            description: '삼육 멋쟁이사자처럼 12기 아기사자(부원) 모집 페이지',
            role: '2024-1 멋사 12기 운영진 (백엔드)',
            links: [
                { label: 'GitHub', url: 'https://github.com/syu-likelionz-12th/12th_recruit_backend.git' }
            ]
        },
        {
            icon: '💬',
            title: 'W.A.D (What are you doin?)',
            description: '개발 초보자를 위한 ChatGPT 기반 커뮤니티 사이트',
            role: '2024-1 교내 SW 경진대회 "못난이사자들" 팀 백엔드 참여',
            links: [
                { label: '서비스', url: 'https://wad-uglylion-e5cf0llq1-no4hs-projects.vercel.app/' },
                { label: 'GitHub', url: 'https://github.com/W-A-D/WAD_Back' }
            ]
        },
        {
            icon: '📚',
            title: '별책부록',
            description: 'AI 도서 추천 및 독서대 서비스',
            role: '2024 멋쟁이사자처럼 간지톤(연합 해커톤) "상부삼조" 팀 백엔드 참여',
            links: [
                { label: 'GitHub', url: 'https://github.com/ryul00/3_Team_FE_final.git' }
            ]
        },
        {
            icon: '🤝',
            title: 'P-eeting',
            description: '프리랜서 개발자와 기업 간 프로젝트 매칭 서비스',
            role: '2025-1 자바(Java) 풀스택 개발자 과정 1차 프로젝트 프론트엔드 참여',
            links: [
                { label: '서비스', url: 'https://peeting-5f69fb087-no4hs-projects.vercel.app/' }
            ]
        },
        {
            icon: '🦁',
            title: '삼육 멋사 13기 모집 페이지',
            description: '삼육대 멋쟁이사자처럼 13기 아기사자(부원) 모집 페이지',
            role: '2025-1 멋사 13기 운영진 (프론트엔드)',
            links: [
                { label: '서비스', url: 'https://syu-likelion.org/' }
            ]
        },
        {
            icon: '🎮',
            title: '종합 두뇌 게임 "똑똑하ZOO?"',
            description: '혼자서도, 둘이서도 즐길 수 있는 두뇌 게임 컨텐츠(두더지, 과일 퍼즐, 기억력 게임 등)',
            role: '풀스택 개발 : CocosCreator 기반 게임 UI 구현, Node.js 서버 구축, Socket.io 기반 실시간 이벤트 처리 등',
            links: [
                { label: 'Backend', url: 'https://github.com/ryul00/Backend_Repo.git' },
                { label: 'Frontend', url: 'https://github.com/ryul00/capstone_Front_Repo.git' }
            ]
        },
        {
            icon: '🏡',
            title: '촌스레 with 전남',
            description: '전라남도 중심 촌캉스를 위한 AI 기반 맞춤형 여행 코스 추천 서비스',
            role: '2025 관광 데이터 활용 공모전 "두유즈" 팀 백엔드 개발 담당',
            links: [
                { label: 'GitHub', url: 'https://github.com/ryul00/ChonsreBack.git' }
            ]
        },
        {
            icon: '📋',
            title: '메타빌드 사내 PMS 프로젝트',
            description: '회사에서 진행되고 있는 사업지별 사업수행관리 체계화 및 업무 효율성 향상 목적',
            role: '계약 기관 및 담당자 관리 & 사업별 이슈/장애 관리 & PDF계약서 파싱 및 자동 매핑 & 웹 크롤링 기반 데이터 정제 등',
            links: []
        },
        {
            icon: '🔄',
            title: '메타빌드 공식 홈페이지 리뉴얼',
            description: '기존의 노후화된 홈페이지를 대체 할 리뉴얼된 홈페이지와 관리자 페이지 개발',
            role: '관리자 페이지 DB 구성 & "Mesim" 제품 설명 메뉴 개발 & 수상/인증/특허 메뉴 개발 & 자료실 메뉴 개발',
            links: [
                { label: '서비스', url: 'https://www.metabuild.co.kr/renewal/' }
            ]
        },
    ];

    return (
        <section id="projects">
            <div className="container">
                <h2 className="section-title">
                    <span>Projects</span>
                </h2>
                <div className="projects-grid">
                    {projects.map((project, idx) => (
                        <div key={idx} className="project-card">
                            <div className="project-header">
                                <span className="project-icon">{project.icon}</span>
                                <h3 className="project-title">{project.title}</h3>
                            </div>
                            <p className="project-description">{project.description}</p>
                            <span className="project-role">{project.role}</span>
                            {project.links.length > 0 && (
                                <div className="project-links">
                                    {project.links.map((link, linkIdx) => (
                                        <a
                                            key={linkIdx}
                                            href={link.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="project-link"
                                        >
                                            {link.label}
                                        </a>
                                    ))}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
