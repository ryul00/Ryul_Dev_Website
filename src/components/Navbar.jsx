import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const isDetailPage = location.pathname.startsWith('/project/');

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

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <Link to="/" className="nav-logo" onClick={() => window.scrollTo(0, 0)}>Ryul.dev</Link>

        {!isDetailPage && (
          <>
            <ul className={`nav-links ${isOpen ? 'open' : ''}`}>
              {navItems.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.href}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
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
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
