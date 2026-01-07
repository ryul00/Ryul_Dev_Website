const Activities = () => {
    const activities = [
        {
            period: '2023.03 - 2023.12',
            title: 'LikeLion 11th',
            role: '백엔드 부원',
            description: '파이썬 기초 ~ django를 이용한 실습 진행, 연합 해커톤 참가 등'
        },
        {
            period: '2023.12 - 2024.12',
            title: 'LikeLion 12th',
            role: '부회장 / 백엔드 운영진',
            description: '모집 페이지 프로젝트, 부원 모집 및 면접 진행, Java/Spring 세션 진행, 연합 해커톤 팀장 참여 등'
        },
        {
            period: '2024.12 ~ 2025.12',
            title: 'LikeLion 13th',
            role: '프론트엔드 운영진',
            description: '모집 페이지 프로젝트, 부원 모집 및 면접 진행, React 개발 및 Vercel 빌드 배포 세션 진행, 연합 해커톤 팀장 참여 등',
            links: [
                { label: '세션자료', url: 'https://1st-front-session-repo.vercel.app/' }
            ]
        },
        {
            period: '2024.12 ~ 2025.09',
            title: '2025-1 영상의학 AI API연동 프로젝트 기반 자바(Java) 풀스택 개발자 과정',
            role: '교육생',
            description: 'Java/Oracle/React 학습 & 1~3차 프로젝트 진행'
        },
        {
            period: '2025.09 ~ 2025.12',
            title: '2025-2 ICT인턴십 메타빌드(사업정보팀)',
            role: '인턴',
            description: '사내 PMS 프로젝트 BE/FE(Spring/Vue.js) 개발 & 메타빌드 공식 홈페이지 리뉴얼 프로젝트 BE/FE(Spring/React.ts) 개발'
        },
    ];

    return (
        <section id="activities">
            <div className="container">
                <h2 className="section-title">
                    <span>Activities</span>
                </h2>
                <div className="timeline">
                    {activities.map((activity, idx) => (
                        <div key={idx} className="timeline-item">
                            <span className="timeline-date">{activity.period}</span>
                            <h3 className="timeline-title">{activity.title}</h3>
                            <p className="timeline-role">{activity.role}</p>
                            <div className="timeline-description">
                                {activity.description.split(/[,&]/).map((part, i) => (
                                    <div key={i}>{part.trim()}</div>
                                ))}
                            </div>
                            {activity.links && activity.links.length > 0 && (
                                <div className="activity-links">
                                    {activity.links.map((link, linkIdx) => (
                                        <a
                                            key={linkIdx}
                                            href={link.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="activity-link"
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

export default Activities;
