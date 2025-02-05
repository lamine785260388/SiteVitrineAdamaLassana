import React from "react";

const Header: React.FC = () => {
  return (
    <header id="header" className="header d-flex align-items-center sticky-top">
      <div className="container-fluid container-xl position-relative d-flex align-items-center justify-content-between">
        <a href="index.html" className="logo d-flex align-items-center">
          {/* Uncomment the line below if you also wish to use an image logo */}
          {/* <img src="assets/img/logo.png" alt="" /> */}
          <h1 className="sitename">Me &amp; Family</h1>
        </a>

        <nav id="navmenu" className="navmenu">
          <ul>
            <li><a href="#hero" className="active">Qui sommes nous</a></li>
            <li><a href="our-story.html">Ausculations</a></li>
            <li><a href="events.html">Topographie</a></li>
            <li><a href="gallery.html">Bur. Etudes Ferroviaires</a></li>
            <li><a href="blog.html">Scan 3D- BIM</a></li>
            <li className="dropdown">
              <a href="#">
                <span>Dropdown</span> 
                <i className="bi bi-chevron-down toggle-dropdown"></i>
              </a>
              <ul>
                <li><a href="#">Dropdown 1</a></li>
                <li className="dropdown">
                  <a href="#">
                    <span>Deep Dropdown</span> 
                    <i className="bi bi-chevron-down toggle-dropdown"></i>
                  </a>
                  <ul>
                    <li><a href="#">Deep Dropdown 1</a></li>
                    <li><a href="#">Deep Dropdown 2</a></li>
                    <li><a href="#">Deep Dropdown 3</a></li>
                    <li><a href="#">Deep Dropdown 4</a></li>
                    <li><a href="#">Deep Dropdown 5</a></li>
                  </ul>
                </li>
                <li><a href="#">Dropdown 2</a></li>
                <li><a href="#">Dropdown 3</a></li>
                <li><a href="#">Dropdown 4</a></li>
              </ul>
            </li>
            <li><a href="contact.html">Contact</a></li>
          </ul>
          <i className="mobile-nav-toggle d-xl-none bi bi-list"></i>
        </nav>
      </div>
    </header>
  );
};

export default Header;
