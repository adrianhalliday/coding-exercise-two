import Link from 'next/link'
import './Footer.scss'

const footerProps = {
  navItems: {
    '/about/': 'About',
    '/services/': 'Services',
    '/team/': 'Team',
    '/news/': 'News',
    '/contact/': 'Contact',
    '/careets/': 'Careers',
    '/privacy-policy/': 'Privacy',
    '/disclaimer/': 'Disclaimer',
    '/locations/': 'Looking for another clinic?',
  },
}

export default function Footer() {
  return (
    <footer className="footer theme--navy">
      <ul className="footer--nav">
        {Object.entries(footerProps.navItems).map(([path, label]) => {
          return (
            <li key={path}>
              <Link
                href={path}
                className="footer--link font--regular"
              >
                {label}
              </Link>
            </li>
          )
        })}
        
      </ul>
    </footer>
  )
}