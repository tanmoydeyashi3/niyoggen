'use client';

import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { brand, navLinks } from '@/data/siteData';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [activeHash, setActiveHash] = useState('');

  useEffect(() => {
    const hash = window.location.hash;

    if (hash) {
      window.history.replaceState(null, '', window.location.pathname);

      const sectionId = hash.replace('#', '');

      requestAnimationFrame(() => {
        setTimeout(() => {
          const section = document.querySelector(`[data-section="${sectionId}"]`);
          if (section) {
            section.scrollIntoView({ behavior: 'smooth', block: 'start' });
            setActiveHash(hash);
          }
        }, 100);
      });
    }

    const sections = document.querySelectorAll('[data-section]');

    const observer = new IntersectionObserver(
      (entries) => {
        const active = entries.find((entry) => entry.isIntersecting);
        if (active) {
          setActiveHash(`#${active.target.dataset.section}`);
        }
      },
      {
        threshold: 0.35,
        rootMargin: '-100px 0px -50% 0px',
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const handleNavClick = (e, link) => {
    e.preventDefault();

    const sectionId = link.href.replace('#', '');
    const section = document.querySelector(`[data-section="${sectionId}"]`);

    if (section) {
      section.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });

      setActiveHash(link.href);
      window.history.pushState(null, '', link.href);
    }

    setOpen(false);
  };

  return (
    <header className="nav-shell">
      <nav className="container nav">
        <Link href="/" className="logo" onClick={() => setOpen(false)}>
          <img src="/niyoggen-logo.svg" alt="NiyogGen Logo" />
        </Link>

        <button className="menu-btn" onClick={() => setOpen(!open)} aria-label="Toggle navigation">
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>

        <div className={`nav-links ${open ? 'open' : ''}`}>
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleNavClick(e, link)}
              className={activeHash === link.href ? 'active' : ''}
            >
              {link.label}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
}