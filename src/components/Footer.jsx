const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="container">
                <p className="footer-text">
                    © {currentYear} <span>GwangRyul Yu</span>. Built with React
                </p>
            </div>
        </footer>
    );
};

export default Footer;
