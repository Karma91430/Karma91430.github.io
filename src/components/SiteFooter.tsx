export function SiteFooter() {
  const year = new Date().getFullYear();
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <p>© {year} Arthur Delerue. Crafted in Paris.</p>
        <p className="footer-secondary">Last revision — May 2026.</p>
      </div>
    </footer>
  );
}
