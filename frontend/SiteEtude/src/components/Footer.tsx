import React, { useState } from "react";

const Footer: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <footer id="footer" className="footer dark-background">
  <div className="container text-center">
    <h3 className="sitename">Me &amp; Family</h3>
    <p>Et aut eum quis fuga eos sunt ipsa nihil. Labore corporis magni eligendi fuga maxime saepe commodi placeat.</p>
    <div className="social-links d-flex justify-content-center">
      <a href="#"><i className="bi bi-twitter-x" /></a>
      <a href="#"><i className="bi bi-facebook" /></a>
      <a href="#"><i className="bi bi-instagram" /></a>
      <a href="#"><i className="bi bi-skype" /></a>
      <a href="#"><i className="bi bi-linkedin" /></a>
    </div>
    <div className="container mt-3">
      <div className="copyright">
        <span>Copyright</span> <strong className="px-1 sitename">Me &amp; Family</strong> <span>All Rights Reserved</span>
      </div>
      <div className="credits">
        Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>
      </div>
    </div>
  </div>
</footer>

  );
};

export default Footer;