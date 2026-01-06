const Hero = () => {
    return (
        <section className="hero" id="hero">
            <div className="container">
                <div className="hero-content animate-fade-in">
                    {/* <p className="hero-greeting">👋 안녕하세요, 저는</p> */}
                    <h1 className="hero-name">유광렬 (GwangRyul Yu)</h1>
                    <h2 className="hero-title">Computer Engineering, Samyook University</h2>
                    <p className="hero-subtitle">
                        <span className="highlight">Software Major</span> | 2000.10.09
                    </p>
                    <div className="hero-cta">
                        <a href="#projects" className="btn btn-primary">
                            프로젝트 보기
                        </a>
                        <a href="https://github.com/ryul00" target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
                            GitHub
                        </a>
                        <a href="/Portfolio.pdf" target="_blank" rel="noopener noreferrer" className="btn btn-portfolio">
                            Portfolio PDF 보기
                        </a>
                        <a href="#contact" className="btn btn-secondary">
                            연락하기
                        </a>
                    </div>
                </div>
                <div className="hero-decoration"></div>
            </div>
        </section>
    );
};

export default Hero;
