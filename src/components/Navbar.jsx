import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { projectsData } from '../data/projectsData';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const { pathname } = location;
  const isDetailPage = pathname.startsWith('/project/');
  const projectId = isDetailPage ? pathname.split('/project/')[1] : null;
  const project = isDetailPage ? projectsData.find(p => p.id === projectId) : null;
  const detail = project?.detail;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'About', href: '/#about' },
    { name: 'Stacks', href: '/#stacks' },
    { name: 'Activities', href: '/#activities' },
    { name: 'Projects', href: '/#projects' },
    { name: 'Docs', href: '/#docs' },
    { name: 'Awards', href: '/#awards' },
    { name: 'Contact', href: '/#contact' },
  ];

  const detailNavItems = detail ? [
    { name: '팀원', href: '#members', show: !!detail.members },
    { name: '소개', href: '#background', show: !!detail.background },
    { name: '기술', href: '#stacks', show: !!detail.techStack },
    { name: '명세', href: '#data', show: !!(detail.publicData || detail.apiSpecs) },
    { name: '일정', href: '#schedule', show: !!detail.schedule },
    { name: '기능', href: '#features', show: !!detail.features },
    { name: '영상', href: '#video', show: !!detail.demoVideo },
  ].filter(item => item.show) : [];

  const currentNavItems = isDetailPage ? detailNavItems : navItems;

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <Link to="/" className="nav-logo" onClick={() => window.scrollTo(0, 0)}>Ryul.dev</Link>

        <ul className={`nav-links ${isOpen ? 'open' : ''}`}>
          {currentNavItems.map((item) => (
            <li key={item.name}>
              {isDetailPage ? (
                <a
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </a>
              ) : (
                <Link
                  to={item.href}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              )}
            </li>
          ))}
        </ul>

        <div
          className="nav-toggle"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
