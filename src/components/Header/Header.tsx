"use client"

import React, { useMemo, useState } from 'react'
import Link from 'next/link'
import Icon from '@/fragments/Icon'
import Button from '@/fragments/Button'
import Logo from '@/fragments/Logo'
import { baseUrl } from '@/app/sitemap'
import { scrollActiveRef } from '@/hooks/scrollActiveRef'
import './Header.scss'

const headerProps = {
  transparent: true,
  navItems: {
    '/about/': 'About',
    '/services/': 'Services',
    '/team/': 'Team',
    '/news/': 'News',
    '/contact/': 'Contact',
  },
  button: {
    label: "Book a session",
    link: "/online-booking",
    target: null,
  }
}

export function Header() {
  const [menuOpen,setMenuOpen] = useState(false);
  const handleMenuOpen = ()=> {
    setMenuOpen(!menuOpen);
  }

  const { scrollActive, triggerEl } = scrollActiveRef();
  const scrollActiveClass = useMemo(() => {
    return scrollActive ? 'scroll-active' : null;
  }, [scrollActive]);

  return (
    <>
      <aside className={`header ${headerProps.transparent ? 'transparent':''} ${scrollActiveClass}`}>
        <div className="header--container">
          <div className="header--logo">
            <Logo />
          </div>
          <nav
            className="header--nav"
            id="nav"
          >
            <div
              className="header--menu-mobile--trigger font--regular"
              onClick={handleMenuOpen}
            >
              <Icon
                type="Menu"
                width={22}
                height={22}
              />
              <span>Menu</span>
            </div>

            <div className="header--menu-desktop">
              {Object.entries(headerProps.navItems).map(([path, label]) => {
                return (
                  <Link
                    key={path}
                    href={path}
                    className="header--link font--regular"
                  >
                    {label}
                  </Link>
                )
              })}
            </div>
          </nav>

          <Button
            label={headerProps.button.label}
            theme="lime-green"
            variant="primary"
            size="medium"
            icon="Calendar"
            link={new URL(headerProps.button.link, baseUrl)}
            target={headerProps.button.target}
            className="header--button desktop"
          />
          
          <Button
            label={headerProps.button.label}
            theme="lime-green"
            variant="primary"
            size="medium"
            link={new URL(headerProps.button.link, baseUrl)}
            target={headerProps.button.target}
            className="header--button mobile"
          />
        </div>

        <div
          className={`header--menu-mobile ${menuOpen ? 'active' : ''}`}
        >
          {Object.entries(headerProps.navItems).map(([path, label]) => {
              return (
                <Link
                  key={path}
                  href={path}
                  className="header--menu-mobile--link font--bold"
                >
                    {label}
                </Link>
              )
            })}
        </div>
      </aside>
      <div ref={triggerEl} style={{ height: '1px', position: 'absolute', top: '20svh' }} />
    </>
  )
}
