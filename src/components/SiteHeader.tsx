import { useEffect, useState } from 'react';

const items = [
  { href: '#experience', label: 'Experience' },
  { href: '#work', label: 'Projects' },
  { href: '#about', label: 'Hobbies' },
  { href: '#contact', label: 'Contact' },
];

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`site-header ${scrolled ? 'is-scrolled' : ''}`}>
      <div className="container header-inner">
        <a href="#top" className="brand">
          <span className="brand-mark">AD</span>
          <span className="brand-name">Arthur Delerue</span>
        </a>
        <nav className="site-nav" aria-label="Primary">
          {items.map((it) => (
            <a key={it.href} href={it.href}>
              {it.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
