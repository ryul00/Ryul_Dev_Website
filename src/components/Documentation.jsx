const Documentation = () => {
    const documents = [
        {
            icon: '📋',
            title: 'API 명세서',
            description: '프로젝트별 API 엔드포인트 및 명세 문서',
            items: [
                { label: 'WAD API 명세서', url: 'https://documenter.getpostman.com/view/28467558/2sAXjGcZqr' },
                { label: '별책부록 API 명세서', url: 'https://www.notion.so/api-1387efc1b2e181918e3afbcacca18b09?source=copy_link' },
                { label: '촌스레 API 명세서', url: 'https://documenter.getpostman.com/view/28467558/2sB3B8sZ8c' },
            ]
        },
        {
            icon: '📝',
            title: 'Notion 문서',
            description: '주요 개발 로직 및 소스 코드 문서화',
            items: [
                { label: 'Spring 기반 백엔드 API 개발 정리', url: 'https://www.notion.so/Spring-2238231ecbf680f891c2c343b9d7d280?source=copy_link' },
                { label: '멀티플레이 게임 로직 BE/FE 정리(Node.js&CocosCreator)', url: 'https://www.notion.so/Node-js-2238231ecbf680e3adc8c52ebb059683?source=copy_link' },
                { label: 'AWS EC2 서버 구축', url: 'https://www.notion.so/Node-js-Firebase-2048231ecbf680a59400fdb43d604ca3?source=copy_link' },
            ]
        },
        {
            icon: '📓',
            title: 'ICT인턴십 업무일지',
            description: 'ICT 인턴십 기간 중 업무 기록(대외비 제외)',
            items: [
                { label: '초기 수행 내용(현행 시스템 분석 등)', url: 'https://www.notion.so/9-1-2-2e08231ecbf680c8a641e9d8c7674e37?source=copy_link' },
                { label: '관련 기관 관리 메뉴 개발', url: 'https://www.notion.so/09-3-4-2a08231ecbf68023ba31d8a93737a629?source=copy_link' },
                { label: '기관 담당자 관리 메뉴 개발', url: 'https://www.notion.so/09-3-4-27f8231ecbf680c4951ed8fe02ba589a?source=copy_link' },
                { label: '홈페이지 리뉴얼 프로젝트 관련', url: 'https://www.notion.so/12-2dc8231ecbf680d78865cbde2e427809?source=copy_link' },
            ]
        }


    ];

    return (
        <section id="docs">
            <div className="container">
                <h2 className="section-title">
                    <span>Documentation</span>
                </h2>
                <div className="docs-grid">
                    {documents.map((doc, idx) => (
                        <div key={idx} className="doc-card">
                            <div className="doc-header">
                                <span className="doc-icon">{doc.icon}</span>
                                <h3 className="doc-title">{doc.title}</h3>
                            </div>
                            <p className="doc-description">{doc.description}</p>
                            <div className="doc-links">
                                {doc.items.map((item, itemIdx) => (
                                    <a
                                        key={itemIdx}
                                        href={item.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="doc-link"
                                    >
                                        {item.label}
                                    </a>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Documentation;
