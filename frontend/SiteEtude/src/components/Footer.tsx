import React from "react";

const Footer: React.FC = () => {
  

  return (
    <>
    <footer className="py-5">
    <div className="container-lg">
      <div className="row">
        <div className="col-lg-12 col-md-12 col-sm-12">
        <div className="footer-menu">
  {/* Logo de la page */}
  <div className="logo-section fw-bold" style={{color:'blue', fontSize:'20px'}}>
    <img src="src/assets/images/logonew.jpeg" width={240} height={70} alt="logo" />
    
  </div>

  {/* Section Contact et Adresse */}
  <div className="contact-address mt-3">
    <h5>Contactez-nous</h5>
    <p>
      <strong>Adresse :</strong> 123 Rue de l'Exemple, 75001 Paris, France
    </p>
    <p>
      <strong>Téléphone :</strong> +33 1 23 45 67 89
    </p>
    <p>
      <strong>Email :</strong> contact@example.com
    </p>
  </div>

  {/* Liens sociaux */}
  <div className="social-links mt-3">
    <ul className="d-flex list-unstyled gap-2">
      <li>
        <a href="#" className="btn btn-outline-light">
          <svg width={16} height={16}><use xlinkHref="#facebook" /></svg>
        </a>
      </li>
      <li>
        <a href="#" className="btn btn-outline-light">
          <svg width={16} height={16}><use xlinkHref="#twitter" /></svg>
        </a>
      </li>
      <li>
        <a href="#" className="btn btn-outline-light">
          <svg width={16} height={16}><use xlinkHref="#youtube" /></svg>
        </a>
      </li>
      <li>
        <a href="#" className="btn btn-outline-light">
          <svg width={16} height={16}><use xlinkHref="#instagram" /></svg>
        </a>
      </li>
      <li>
        <a href="#" className="btn btn-outline-light">
          <svg width={16} height={16}><use xlinkHref="#amazon" /></svg>
        </a>
      </li>
    </ul>
  </div>
</div>
        </div>
     
      </div>
    </div>
  </footer>
   <div id="footer-bottom">
   <div className="container-lg">
     <div className="row">
       <div className="col-md-6 copyright">
         <p>© 2025 Raily Dynamics Africa. All rights reserved.</p>
       </div>
       <div className="col-md-6 credit-link text-start text-md-end">
         <p> Développez par  <a href="https://github.com/lamine785260388" target="_blank">Mr Traore</a> </p>
       </div>
     </div>
   </div>
 </div>
 </>
  );
};

export default Footer;