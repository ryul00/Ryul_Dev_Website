import { useParams, Link } from 'react-router-dom';
import { useEffect } from 'react';
import { projectsData } from '../data/projectsData';

const ProjectDetail = () => {
    const { id } = useParams();
    const project = projectsData.find(p => p.id === id);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    if (!project) {
        return (
            <div className="container" style={{ padding: '150px 20px', textAlign: 'center' }}>
                <h2 className="section-title"><span>Project Not Found</span></h2>
                <Link to="/" className="btn btn-primary">Back to Home</Link>
            </div>
        );
    }

    const { detail } = project;

    return (
        <div className="project-detail-page">
            <div className="container">
                <div className="detail-header animate-fade-in">
                    <Link to="/" className="back-link">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M19 12H5M12 19l-7-7 7-7" />
                        </svg>
                        Back to Portfolio
                    </Link>
                    <h1 className="detail-title" dangerouslySetInnerHTML={{ __html: detail?.fullTitle || project.title }} />
                    <p className="detail-subtitle">{detail?.subtitle || project.description}</p>
                </div>

                {detail && (
                    <div className="detail-content animate-fade-in" style={{ animationDelay: '0.2s' }}>
                        <hr className="detail-divider" />

                        {/* Members Section */}
                        <section className="detail-section">
                            <h2 className="section-subtitle">프로젝트 멤버</h2>
                            <div className="members-grid">
                                {detail.members && detail.members.map((member, i) => {
                                    const roleInfo = detail.roles.find(r => r.name === member.name);
                                    return (
                                        <div key={i} className="member-card">
                                            <div className="member-avatar-container">
                                                {member.avatar ? (
                                                    <img src={member.avatar} alt={member.name} />
                                                ) : (
                                                    <div className="member-avatar-placeholder">👤</div>
                                                )}
                                            </div>
                                            <div className="member-info">
                                                <h3 className="member-name">
                                                    {member.github ? (
                                                        <a href={`https://github.com/${member.github}`} target="_blank" rel="noopener noreferrer">
                                                            {member.name}
                                                        </a>
                                                    ) : member.name}
                                                </h3>
                                                <div className="member-role-badge">
                                                    <img src={`https://skillicons.dev/icons?i=${member.roleIcon}`} alt={member.roleIcon} width="20" />
                                                    {roleInfo?.role || 'Member'}
                                                </div>
                                                {roleInfo && (
                                                    <p className="member-responsibilities">
                                                        {roleInfo.responsibilities}
                                                    </p>
                                                )}
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </section>

                        <hr className="detail-divider" />

                        {/* Service Background */}
                        <section className="detail-section">
                            <h2 className="section-subtitle">서비스 배경</h2>
                            <div className="glass-card">
                                <ul className="detail-list">
                                    {detail.background.map((item, i) => (
                                        <li
                                            key={i}
                                            dangerouslySetInnerHTML={{
                                                __html: item.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
                                            }}
                                        />
                                    ))}
                                </ul>
                            </div>
                        </section>

                        <hr className="detail-divider" />

                        {/* Tech Stack Section */}
                        <section className="detail-section">
                            <h2 className="section-subtitle">사용 기술</h2>
                            <div className="tech-stack-container">
                                {Object.entries(detail.techStack).map(([category, icons], i) => (
                                    <div key={i} className="tech-group">
                                        <h3>{category}</h3>
                                        <div className="tech-tags">
                                            {icons.map((icon, idx) => (
                                                <div key={idx} className="tech-tag">
                                                    {icon.startsWith('http') ? (
                                                        <img src={icon} alt="tech icon" width="24" />
                                                    ) : (
                                                        <img src={`https://skillicons.dev/icons?i=${icon}`} alt={icon} width="24" />
                                                    )}
                                                    <span>{icon.startsWith('http') ? (category === 'frontend' && icon.includes('cocos') ? 'COCOS' : 'TECH') : icon.toUpperCase()}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>

                        <hr className="detail-divider" />

                        {/* Public Data & API Section */}
                        <section className="detail-section">
                            <h2 className="section-subtitle">활용 데이터 및 명세</h2>
                            <div className="data-grid">
                                {detail.publicData && detail.publicData.map((d, i) => (
                                    <div key={i} className="data-card">
                                        <h3>{d.category}</h3>
                                        <p>{d.content}</p>
                                    </div>
                                ))}
                                {detail.apiSpecs && detail.apiSpecs.map((spec, i) => (
                                    <div key={i} className="data-card">
                                        <h3>{spec.title || 'API 명세서'}</h3>
                                        <a href={spec.url} target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{ marginTop: '10px' }}>
                                            {spec.label || '명세서 보기'}
                                        </a>
                                    </div>
                                ))}
                            </div>
                        </section>

                        <hr className="detail-divider" />

                        {/* Schedule Section */}
                        {detail.schedule && (
                            <>
                                <section className="detail-section">
                                    <h2 className="section-subtitle">프로젝트 일정</h2>
                                    <div className="schedule-container">
                                        <table className="schedule-table">
                                            <thead>
                                                <tr>
                                                    <th>구분</th>
                                                    <th>상세 내용</th>
                                                    <th>기간</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {detail.schedule.map((s, i) => (
                                                    <tr key={i}>
                                                        <td className="category">{s.category}</td>
                                                        <td className="task" dangerouslySetInnerHTML={{ __html: s.task }} />
                                                        <td className="date">{s.date}</td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                </section>
                                <hr className="detail-divider" />
                            </>
                        )}

                        <hr className="detail-divider" />

                        {/* Features Section */}
                        <section className="detail-section">
                            <h2 className="section-subtitle">주요 기능</h2>
                            <div className={`features-grid ${detail.isMobileFeatures ? 'is-mobile' : ''} ${detail.useHoverEffect ? 'has-hover-effect' : ''}`}>
                                {detail.features && detail.features.map((f, i) => (
                                    <div key={i} className="feature-item">
                                        <h3>{f.title}</h3>
                                        <div className={`feature-image-container ${f.fitImage ? 'fit-image' : ''}`}>
                                            <img src={f.image} alt={f.title} />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>

                        <hr className="detail-divider" />

                        {/* Video Section */}
                        <section className="detail-section">
                            <h2 className="section-subtitle">
                                프로젝트 시연 영상
                                <span className="section-hint"> 클릭하면 영상링크로 이동합니다.</span>
                            </h2>
                            <div className="video-section-content">
                                <a href={detail.demoVideo?.url} target="_blank" rel="noopener noreferrer" className="video-player-card">
                                    <img src={detail.demoVideo?.thumbnail} alt="Video Thumbnail" className="video-thumbnail" />
                                </a>
                            </div>
                        </section>
                    </div>
                )}

                {/* If no detail is provided yet */}
                {!detail && (
                    <div className="detail-placeholder glass-card animate-fade-in">
                        <p>상세 정보를 준비 중입니다.</p>
                        <Link to="/" className="btn btn-primary">홈으로 돌아가기</Link>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ProjectDetail;
