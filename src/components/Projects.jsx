import { Link } from 'react-router-dom';
import { projectsData } from '../data/projectsData';

const Projects = () => {
    return (
        <section id="projects">
            <div className="container">
                <h2 className="section-title">
                    <span>Projects</span>
                    <span className="section-hint">일부 프로젝트는 카드를 클릭하면 상세 내용을 볼 수 있습니다</span>
                </h2>
                <div className="projects-grid">
                    {[...projectsData]
                        .sort((a, b) => {
                            const aHasDetail = ['chonsre', 'brain-game-smart-zoo', 'wad', 'byeol-chaek-bu-rok'].includes(a.id);
                            const bHasDetail = ['chonsre', 'brain-game-smart-zoo', 'wad', 'byeol-chaek-bu-rok'].includes(b.id);
                            return bHasDetail - aHasDetail;
                        })
                        .map((project, idx) => {
                            const hasDetail = ['chonsre', 'brain-game-smart-zoo', 'wad', 'byeol-chaek-bu-rok'].includes(project.id);
                            const CardContent = (
                                <>
                                    <div className="project-header">
                                        <span className="project-icon">{project.icon}</span>
                                        <h3 className="project-title">{project.title}</h3>
                                    </div>
                                    <p className="project-description">{project.description}</p>
                                    <div className="project-role">
                                        {project.role.split(/[,&]/).map((part, i) => (
                                            <div key={i}>{part.trim()}</div>
                                        ))}
                                    </div>
                                    {project.links.length > 0 && (
                                        <div className="project-links">
                                            {project.links.map((link, linkIdx) => (
                                                <div
                                                    key={linkIdx}
                                                    className="project-link"
                                                    onClick={(e) => {
                                                        e.preventDefault();
                                                        e.stopPropagation();
                                                        window.open(link.url, '_blank');
                                                    }}
                                                >
                                                    {link.label}
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                </>
                            );

                            return hasDetail ? (
                                <Link to={`/project/${project.id}`} key={idx} className="project-card">
                                    {CardContent}
                                </Link>
                            ) : (
                                <div key={idx} className="project-card not-clickable">
                                    {CardContent}
                                </div>
                            );
                        })}
                </div>
            </div>
        </section>
    );
};

export default Projects;
