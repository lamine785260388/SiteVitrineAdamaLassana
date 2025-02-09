import React from "react";

const Header: React.FC = () => {
 

  return (
      
    <header>
    <div className="container-fluid">
      <div className="row py-3 border-bottom">
        <div className="col-sm-4 col-lg-2 text-center text-sm-start d-flex gap-3 justify-content-center justify-content-md-start">
          <div className="d-flex align-items-center my-3 my-sm-0">
            <a href="index.html">
              <img src="src/assets/images/logo.jpg" alt="logo" className="img-fluid" height={60} width={60}/>
            </a>
          </div>
          <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
            <svg width={24} height={24} viewBox="0 0 24 24"><use xlinkHref="#menu" /></svg>
          </button>
        </div>
        <div className="col-sm-4 offset-sm-2 offset-md-0 col-lg-4">
          <div className="search-bar row bg-light p-2 rounded-4">
         
            <div className="col-6 col-md-6">
              <form id="search-form" className="text-center" action="index.html" method="post">
              <select className="form-select border-0 bg-transparent">
                <option>Français</option>
                <option>Anglais</option>
                
              </select>
              </form>
            </div>
            <div className="col-1">
            <img src="https://upload.wikimedia.org/wikipedia/en/c/c3/Flag_of_France.svg" alt="Drapeau français" width={24} height={24} />

            </div>
          </div>
        </div>
        <div className="col-lg-4">
          <ul className="navbar-nav list-unstyled d-flex flex-row gap-3 gap-lg-5 justify-content-center flex-wrap align-items-center mb-0 fw-bold text-uppercase text-dark">
            <li className="nav-item active">
              <a href="index.html" className="nav-link">Accueil</a>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle pe-3" role="button" id="pages" data-bs-toggle="dropdown" aria-expanded="false">Menu</a>
              <ul className="dropdown-menu border-0 p-3 rounded-0 shadow" aria-labelledby="pages">
                <li><a href="index.html" className="dropdown-item">Accueil </a></li>
                <li><a href="index.html" className="dropdown-item">Présentation </a></li>
                <li><a href="index.html" className="dropdown-item">Compétences </a></li>
                <li><a href="index.html" className="dropdown-item">Outils </a></li>
                <li><a href="index.html" className="dropdown-item">Traveaux Vrd et aménagement</a></li>
                <li><a href="index.html" className="dropdown-item">Contact </a></li>
              </ul>
            </li>
          </ul>
        </div>
        <div className="col-sm-8 col-lg-2 d-flex gap-5 align-items-center justify-content-center justify-content-sm-end">
          <ul className="d-flex justify-content-end list-unstyled m-0">
            <li>
              <a href="#" className="p-2 mx-1">
                <svg width={24} height={24}><use xlinkHref="#user" /></svg>
              </a>
            </li>
            <li>
              <a href="#" className="p-2 mx-1">
                <svg width={24} height={24}><use xlinkHref="#wishlist" /></svg>
              </a>
            </li>
            <li>
              <a href="#" className="p-2 mx-1" data-bs-toggle="offcanvas" data-bs-target="#offcanvasCart" aria-controls="offcanvasCart">
                <svg width={24} height={24}><use xlinkHref="#shopping-bag" /></svg>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </header>

  );
};

export default Header;