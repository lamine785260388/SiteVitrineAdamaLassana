import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
const Story: React.FC = () => {
    
    
  return (
    <>
    <Header />
   <main className="main">
  {/* Page Title */}
  <div className="page-title light-background">
    <div className="container d-lg-flex justify-content-between align-items-center">
      <h1 className="mb-2 mb-lg-0">Our Story</h1>
      <nav className="breadcrumbs">
        <ol>
          <li><a href="index.html">Home</a></li>
          <li className="current">Our Story</li>
        </ol>
      </nav>
    </div>
  </div>{/* End Page Title */}
  {/* About Section */}
  <section id="about" className="about section">
    <div className="container" data-aos="fade-up" data-aos-delay={100}>
      <div className="row gy-4">
        <div className="col-lg-6">
          <img src="src/assets/img/about.jpg" className="img-fluid"  />
        </div>
        <div className="col-lg-6 content">
          <h3>Voluptatem dignissimos provident</h3>
          <p className="fst-italic">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
            magna aliqua.
          </p>
          <ul>
            <li><i className="bi bi-check2-all" /> <span>Ullamco laboris nisi ut aliquip ex ea commodo consequat.</span></li>
            <li><i className="bi bi-check2-all" /> <span>Duis aute irure dolor in reprehenderit in voluptate velit.</span></li>
            <li><i className="bi bi-check2-all" /> <span>Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate trideta storacalaperda mastiro dolore eu fugiat nulla pariatur.</span></li>
          </ul>
          <p>
            Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
            velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident
          </p>
        </div>
      </div>
    </div>
  </section>{/* /About Section */}
  {/* Featured Members Section */}
  <section id="featured-members" className="featured-members section">
    <div className="container">
      <div className="row gy-4 align-items-center features-item">
        <div className="col-md-5 d-flex align-items-center" data-aos="zoom-out" data-aos-delay={100}>
          <img src="assets/img/featured-members-1.jpg" className="img-fluid"  />
        </div>
        <div className="col-md-7" data-aos="fade-up" data-aos-delay={100}>
          <h3>Voluptatem dignissimos provident quasi corporis voluptates sit assumenda.</h3>
          <p className="fst-italic">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
            magna aliqua.
          </p>
          <ul>
            <li><i className="bi bi-check" /><span> Ullamco laboris nisi ut aliquip ex ea commodo consequat.</span></li>
            <li><i className="bi bi-check" /> <span>Duis aute irure dolor in reprehenderit in voluptate velit.</span></li>
            <li><i className="bi bi-check" /> <span>Ullam est qui quos consequatur eos accusamus.</span></li>
          </ul>
        </div>
      </div>{/* Features Item */}
      <div className="row gy-4 align-items-center features-item">
        <div className="col-md-5 order-1 order-md-2 d-flex align-items-center" data-aos="zoom-out" data-aos-delay={200}>
          <img src="assets/img/featured-members-2.jpg" className=" img-fluid"  />
        </div>
        <div className="col-md-7 order-2 order-md-1" data-aos="fade-up" data-aos-delay={200}>
          <h3>Corporis temporibus maiores provident</h3>
          <p className="fst-italic">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
            magna aliqua.
          </p>
          <p>
            Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
            velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum
          </p>
        </div>
      </div>{/* Features Item */}
      <div className="row gy-4 align-items-center features-item">
        <div className="col-md-5 d-flex align-items-center" data-aos="zoom-out">
          <img src="assets/img/featured-members-3.jpg" className="img-fluid"  />
        </div>
        <div className="col-md-7" data-aos="fade-up">
          <h3>Sunt consequatur ad ut est nulla consectetur reiciendis animi voluptas</h3>
          <p>Cupiditate placeat cupiditate placeat est ipsam culpa. Delectus quia minima quod. Sunt saepe odit aut quia voluptatem hic voluptas dolor doloremque.</p>
          <ul>
            <li><i className="bi bi-check" /> <span>Ullamco laboris nisi ut aliquip ex ea commodo consequat.</span></li>
            <li><i className="bi bi-check" /><span> Duis aute irure dolor in reprehenderit in voluptate velit.</span></li>
            <li><i className="bi bi-check" /> <span>Facilis ut et voluptatem aperiam. Autem soluta ad fugiat</span>.</li>
          </ul>
        </div>
      </div>{/* Features Item */}
      <div className="row gy-4 align-items-center features-item">
        <div className="col-md-5 order-1 order-md-2 d-flex align-items-center" data-aos="zoom-out">
          <img src="assets/img/featured-members-4.jpg" className="img-fluid"  />
        </div>
        <div className="col-md-7 order-2 order-md-1" data-aos="fade-up">
          <h3>Quas et necessitatibus eaque impedit ipsum animi consequatur incidunt in</h3>
          <p className="fst-italic">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
            magna aliqua.
          </p>
          <p>
            Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
            velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum
          </p>
        </div>
      </div>{/* Features Item */}
    </div>
  </section>{/* /Featured Members Section */}
  {/* Members Section */}
  <section id="members" className="members section">
    <div className="container">
      <div className="row">
        <div className="col-lg-4 col-md-6 d-flex" data-aos="fade-up" data-aos-delay={100}>
          <div className="member">
            <img src="assets/img/member-1.jpg" className="img-fluid"  />
            <div className="member-content">
              <h4>Wer White</h4>
              <span>Mom</span>
              <p>
                Magni qui quod omnis unde et eos fuga et exercitationem. Odio veritatis perspiciatis quaerat qui aut aut aut
              </p>
              <div className="social">
                <a ><i className="bi bi-twitter-x" /></a>
                <a ><i className="bi bi-facebook" /></a>
                <a ><i className="bi bi-instagram" /></a>
                <a ><i className="bi bi-linkedin" /></a>
              </div>
            </div>
          </div>
        </div>{/* End Team Member */}
        <div className="col-lg-4 col-md-6 d-flex" data-aos="fade-up" data-aos-delay={200}>
          <div className="member">
            <img src="assets/img/member-2.jpg" className="img-fluid"  />
            <div className="member-content">
              <h4>Sarah Jhinson</h4>
              <span>Dad</span>
              <p>
                Repellat fugiat adipisci nemo illum nesciunt voluptas repellendus. In architecto rerum rerum temporibus
              </p>
              <div className="social">
                <a ><i className="bi bi-twitter-x" /></a>
                <a ><i className="bi bi-facebook" /></a>
                <a ><i className="bi bi-instagram" /></a>
                <a ><i className="bi bi-linkedin" /></a>
              </div>
            </div>
          </div>
        </div>{/* End Team Member */}
        <div className="col-lg-4 col-md-6 d-flex" data-aos="fade-up" data-aos-delay={300}>
          <div className="member">
            <img src="assets/img/member-3.jpg" className="img-fluid"  />
            <div className="member-content">
              <h4>William Anderson</h4>
              <span>Sister</span>
              <p>
                Voluptas necessitatibus occaecati quia. Earum totam consequuntur qui porro et laborum toro des clara
              </p>
              <div className="social">
                <a ><i className="bi bi-twitter-x" /></a>
                <a ><i className="bi bi-facebook" /></a>
                <a ><i className="bi bi-instagram" /></a>
                <a ><i className="bi bi-linkedin" /></a>
              </div>
            </div>
          </div>
        </div>{/* End Team Member */}
      </div>
    </div>
  </section>{/* /Members Section */}
</main>

  <Footer />
<a href="#" id="scroll-top" className="scroll-top d-flex align-items-center justify-content-center"><i className="bi bi-arrow-up-short"></i></a>
</>
  );
};

export default Story;
