"use client"

import React, { useMemo, useState } from 'react'
import Link from 'next/link'
import Button from '@/fragments/Button/Button'
import Logo from '@/fragments/Logo'
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
            <div className="header--menu">
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
            theme="primary"
            size="medium"
            icon="calendar"
            link={headerProps.button.link}
            target={headerProps.button.target}
            className="header--button"
          />
        </div>
      </aside>
      <div ref={triggerEl} style={{ height: '1px', position: 'absolute', top: '20svh' }} />
    </>
  )
}
