import Link from 'next/link'

const navItems = {
  '/': {
    name: 'home',
  },
}

export function Header() {
  return (
    <aside className="header">
      <div className="header--container">
        <div className="header--logo"></div>
        <nav
          className="header--nav"
          id="nav"
        >
          <div className="header--menu">
            {Object.entries(navItems).map(([path, { name }]) => {
              return (
                <Link
                  key={path}
                  href={path}
                  className="header--link"
                >
                  {name}
                </Link>
              )
            })}
          </div>
        </nav>
        <div className="header--button button primary"></div>
      </div>
    </aside>
  )
}
