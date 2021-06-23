import Head from 'next/head'
import { useTheme } from 'provider/ThemeProvider'
import { Container } from 'react-bootstrap'
import Navbar from './Navbar'

export default function PageLayout({ children, className }) {
  const { theme, ToggleTheme } = useTheme()
  return (
    <div className={theme.type}>
      <Head>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,400;0,700;0,900;1,600&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Container>
        <Navbar theme={theme} toggleTheme={ToggleTheme} />
        <div className={`page-wrapper ${className}`}>{children}</div>

        <footer className="page-footer">
          <div>
            <a href="#">courses</a>
            {' | '}
            <a href="#">github</a>
            {' | '}
            <a href="#">facebook</a>
          </div>
        </footer>
      </Container>
      <style jsx global>
        {`
          html,
          body {
            background: ${theme.background};
            color: ${theme.fontColor};
            transition: color 0.2s ease-out 0s, background 0.2s ease-out 0s;
          }
        `}
      </style>
    </div>
  )
}
