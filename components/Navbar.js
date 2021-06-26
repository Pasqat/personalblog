import Link from 'next/link';
import { Navbar, Nav } from 'react-bootstrap';

import ThemeToggle from 'components/ThemeToggle';

const BlogNavbar = ({ theme, toggleTheme }) => {
  return (
    <Navbar
      variant={theme.type}
      className="pm-navbar pm-nav-base"
      bg="transparent"
      expand="lg"
    >
      <Navbar.Brand className="pm-navbar-brand">
        <Link href="/">
          <a style={{ color: theme.fontColor }}>
            Pm
            <span
              style={{
                fontSize: '20px',
                textTransform: 'none',
                fontWeight: '400',
              }}
            >
              blog
            </span>
          </a>
        </Link>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <ThemeToggle onChange={toggleTheme} />
          <Nav.Link
            href="/"
            as={() => (
              <Link href="/">
                <a className="pm-navbar-item pm-navbar-link">Home</a>
              </Link>
            )}
          />
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default BlogNavbar;
