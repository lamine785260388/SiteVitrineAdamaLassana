import React, { useEffect, useState } from "react";

import Header from "../components/Header";
import Footer from "../components/Footer";
const Contact: React.FC = () => {
  const [language, setLanguage] = useState("Français");

  // Récupérer la langue depuis sessionStorage au chargement de la page
  useEffect(() => {
    const savedLanguage = sessionStorage.getItem("language");
    if (savedLanguage) {
      setLanguage(savedLanguage);
    }
}, []);

return (
    <>
      <Header />
   
<section id="contact" className="py-5 bg-light">
  <div className="container-lg">
    <div className="row justify-content-center">
      <div className="col-lg-8 text-center mb-5">
        <h2 className="section-title mb-3">Contactez Notre Équipe</h2>
        <p className="lead">Vous avez un projet ferroviaire ? Parlons-en !</p>
      </div>
    </div>

    <div className="row g-4 justify-content-center">
      <div className="col-md-6">
        <div className="card shadow-sm border-0 p-4 h-100">
          <form action="https://formspree.io/f/[VOTRE_ID]" method="POST">
            <div className="mb-3">
              <label htmlFor="name" className="form-label">Nom complet</label>
              <input 
                type="text" 
                className="form-control" 
                id="name" 
                name="name"
                placeholder="Jean Dupont" 
                required
              />
            </div>
            
            <div className="row g-3 mb-3">
              <div className="col-md-6">
                <label htmlFor="email" className="form-label">Email</label>
                <input 
                  type="email" 
                  className="form-control" 
                  id="email" 
                  name="email"
                  placeholder="contact@entreprise.africa" 
                  required
                />
              </div>
              <div className="col-md-6">
                <label htmlFor="phone" className="form-label">Téléphone</label>
                <input 
                  type="tel" 
                  className="form-control" 
                  id="phone" 
                  name="phone"
                  placeholder="+225 07 00 000 000" 
                />
              </div>
            </div>

            <div className="mb-3">
              <label htmlFor="subject" className="form-label">Sujet</label>
              <select className="form-select" id="subject" name="subject" required>
                <option value="">Choisir un sujet</option>
                <option>Demande de devis</option>
                <option>Support technique</option>
                <option>Partenariat</option>
                <option>Autre question</option>
              </select>
            </div>

            <div className="mb-4">
              <label htmlFor="message" className="form-label">Message</label>
              <textarea 
                className="form-control" 
                id="message" 
                name="message"
                rows={4} 
                placeholder="Décrivez votre projet ferroviaire..." 
                required
              ></textarea>
            </div>

            <button type="submit" className="btn btn-primary w-100">
              Envoyer le message
            </button>
          </form>
        </div>
      </div>

      <div className="col-md-4">
        <div className="card shadow-sm border-0 p-4 h-100">
          <div className="contact-info">
            <h4 className="mb-4">Coordonnées</h4>
            
            <div className="d-flex gap-3 mb-4">
              <div className="icon-holder text-primary">
                <svg width="24" height="24"><use xlinkHref="#location"/></svg>
              </div>
              <div>
                <h6>Siège social</h6>
                <p className="mb-0">Tour CCIA, Plateau<br/>Abidjan, Côte d'Ivoire</p>
              </div>
            </div>

            <div className="d-flex gap-3 mb-4">
              <div className="icon-holder text-primary">
                <svg width="24" height="24"><use xlinkHref="#phone"/></svg>
              </div>
              <div>
                <h6>Téléphone</h6>
                <p className="mb-0">+225 27 20 000 000<br/>Lun-Ven: 8h-18h</p>
              </div>
            </div>

            <div className="d-flex gap-3 mb-4">
              <div className="icon-holder text-primary">
                <svg width="24" height="24"><use xlinkHref="#email"/></svg>
              </div>
              <div>
                <h6>Email</h6>
                <p className="mb-0">contact@raildynamics.africa<br/>support@raildynamics.africa</p>
              </div>
            </div>

            <div className="social-links mt-4">
              <h6>Suivez-nous</h6>
              <div className="d-flex gap-3">
                <a href="#" className="text-decoration-none">
                  <svg width="20" height="20"><use xlinkHref="#linkedin"/></svg>
                </a>
                <a href="#" className="text-decoration-none">
                  <svg width="20" height="20"><use xlinkHref="#twitter"/></svg>
                </a>
                <a href="#" className="text-decoration-none">
                  <svg width="20" height="20"><use xlinkHref="#facebook"/></svg>
                </a>
                <a href="#" className="text-decoration-none">
                  <svg width="20" height="20"><use xlinkHref="#youtube"/></svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  
    <div className="row mt-5">
      <div className="col-12">
        <div className="ratio ratio-16x9 border rounded-3 overflow-hidden">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d252895.8578372012!2d-4.091161499999999!3d5.3599517!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfc1eb7f6b5b3c7d%3A0x78659a0b839a3f0e!2sAbidjan!5e0!3m2!1sfr!2sci!4v1717043863828!5m2!1sfr!2sci" 
            style={{border:0}}
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  </div>
</section>
      <Footer />
    </>
);
};
export default Contact;

