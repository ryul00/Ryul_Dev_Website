const Awards = () => {
    const awards = [
        {
            date: '2024.05',
            event: '2024 교내 SW경진대회',
            project: 'WAD(What are you doing?)',
            award: '우수상(3위)',
        },
        {
            date: '2024.11',
            event: 'LikeLion 12th 파이톤(연합 해커톤)',
            project: '별책부록',
            award: '대상',
        },
        {
            date: '2025.08',
            event: '2025 교내 SW경진대회',
            project: '잡담',
            award: '우수상(3위)',
        },
    ];

    return (
        <section id="awards">
            <div className="container">
                <h2 className="section-title">
                    <span>Awards</span>
                </h2>
                <div className="awards-grid">
                    {awards.map((award, idx) => (
                        <div key={idx} className="award-card">
                            <div className="award-icon">{award.icon}</div>
                            <div className="award-content">
                                <h3 className="award-title">{award.date}</h3>
                                <p className="award-project">{award.project}</p>
                                <p className="award-event">{award.event}</p>
                            </div>
                            <span className="award-badge">{award.award}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Awards;
