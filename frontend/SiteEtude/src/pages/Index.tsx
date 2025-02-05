import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import '../assets/css/main.css'
import Footer from "../components/Footer";
const Index: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const images = [
      "recent-photos-1.jpg",
      "recent-photos-2.jpg",
      "recent-photos-3.jpg",
      "recent-photos-4.jpg",
      "recent-photos-5.jpg",
      "recent-photos-6.jpg",
      "recent-photos-7.jpg",
      "recent-photos-8.jpg",
    ];
  
    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, 5000);
      return () => clearInterval(interval);
    }, [images.length]);
    
  return (
    <>
        <Header />
        <main className="main">
        <section id="hero" className="hero section dark-background">
    <div id="hero-carousel" className="carousel slide carousel-fade" data-bs-ride="carousel" data-bs-interval="5000">
      <div className="carousel-item active">
        <img src="src/assets/img/hero-carousel/hero-carousel-1.jpg" alt="" />
      </div>
      <div className="carousel-item">
        <img src="src/assets/img/hero-carousel/hero-carousel-2.jpg" alt="" />
      </div>
      <div className="carousel-item">
        <img src="src/assets/img/hero-carousel/hero-carousel-3.jpg" alt="" />
      </div>
      <a className="carousel-control-prev" href="#hero-carousel" role="button" data-bs-slide="prev">
        <span className="carousel-control-prev-icon bi bi-chevron-left" aria-hidden="true"></span>
      </a>
      <a className="carousel-control-next" href="#hero-carousel" role="button" data-bs-slide="next">
        <span className="carousel-control-next-icon bi bi-chevron-right" aria-hidden="true"></span>
      </a>
      <ol className="carousel-indicators"></ol>
    </div>
  </section>



        </main>
      <Footer />
    <a href="#" id="scroll-top" className="scroll-top d-flex align-items-center justify-content-center"><i className="bi bi-arrow-up-short"></i></a>
    </>
  );
};

export default Index;
