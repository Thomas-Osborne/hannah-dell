export default function Footer() {
  const scrollToTop = () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        <div>
          <p>Created by Tom Osborne, 2025.</p>
          <button onClick={scrollToTop} className="back-to-top">
              Back to Top
          </button>
        </div>
      </div>
    </footer>
  );
};