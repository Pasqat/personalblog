import Link from 'next/link';
import { Navbar, Nav } from 'react-bootstrap';

import ThemeToggle from 'components/ThemeToggle';

const BlogNavbar = ({ theme, toggleTheme }) => {
  return (
    <Navbar
      variant={theme.type}
      className="fj-navbar fj-nav-base"
      bg="transparent"
      expand="lg"
    >
      <Navbar.Brand className="fj-navbar-brand">
        <Link href="/">
          <a style={{ color: theme.fontColor }}>
            Pasquale
            <span
              style={{
                fontSize: '20px',
                textTransform: 'none',
                fontWeight: '400',
              }}
            >
              Matarrese.io
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
                <a className="fj-navbar-item fj-navbar-link">Home</a>
              </Link>
            )}
          />
          <Nav.Link
            href="/about"
            as={() => (
              <Link href="/about">
                <a className="fj-navbar-item fj-navbar-link">About</a>
              </Link>
            )}
          />
          <Nav.Link
            href="/works"
            as={() => (
              <Link href="/works">
                <a className="fj-navbar-item fj-navbar-link">Works</a>
              </Link>
            )}
          />
          <Nav.Link
            href="/contacts"
            as={() => (
              <Link href="/contacts">
                <a className="fj-navbar-item fj-navbar-link">Contacts</a>
              </Link>
            )}
          />
          <Nav.Link
            href="/blogs"
            as={() => (
              <Link href="/blogs">
                <a className="fj-navbar-item fj-navbar-link">Blogs</a>
              </Link>
            )}
          />
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default BlogNavbar;
