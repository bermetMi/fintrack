export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer__inner">
        <p className="footer__copy">© {year} FinTrack – Lernprojekt</p>
        <p className="footer__hint">Beträge werden in Cent gespeichert</p>
      </div>
    </footer>
  );
}
