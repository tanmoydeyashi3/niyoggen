import Link from 'next/link';
import { brand, navLinks } from '@/data/siteData';

export default function Footer() {
  return (
    <footer id="footer" className="footer">
      <div className="container footer-grid">
        <div>
          <Link href="/" className="logo footer-logo">
            <img src="/niyoggen-dark-logo.svg" alt="NiyogGen Logo" />
          </Link>
          <p>{brand.tagline}</p>
        </div>
        <div>
          <h4>Page sections</h4>
          <div className="footer-links">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href}>{link.label}</Link>
            ))}
          </div>
        </div>
        <div>
          <h4>Contact</h4>
          <p>{brand.email}</p>
          <p>{brand.phone}</p>
          <p>{brand.location}</p>
        </div>
      </div>
      <div className="container copyright">© {new Date().getFullYear()} NiyogGen. Built for career momentum.</div>
    </footer>
  );
}
