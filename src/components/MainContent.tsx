import '../styles/MainContent.css';
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react';
import ThreeCards from './ThreeCards';

function MainContent() {
    useEffect(() =>{
        AOS.init();
    }, [])
  return (
    <main className="main-content">
      <section className="hero">
        <div className="hero-text" data-aos="zoom-in" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="600">
          <h1>Buy or Sell Foreign Currency & Transfer Money</h1>
          <p>The smartest, safest, and most economical way of carrying eXcur.</p>
          <div className="hero-buttons">
            <button className="open-account-btn">Join Now</button>
          </div>
        </div>
      </section>

      <section className="marketplace">
        <div className="marketplace-text" data-aos="fade-right" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="600">
          <h2>The World's First and Largest Online Currency Exchange Marketplace</h2>
          <p>eXcur.com USA is the first e-commerce initiative in the retail foreign exchange and international money transfer space. We offer our customers a full suite of forex products consisting of currency notes, prepaid travel cards, traveler’s cheques, demand drafts, and wire transfers in an inexpensive and convenient way.</p>
          <p>Personal Travel, Business Travel, Education, Emigration, Employment, Medical, and Maintenance of close relatives staying abroad.</p>
          <div className="learn-more-btn-container">
            <button className="learn-more-btn">Learn More</button>
          </div>
        </div>
        <div className="marketplace-image" data-aos="fade-left" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="600">
          <img src="../src/assets/about.jpg" alt="Marketplace" />
        </div>
      </section>
      
      <section className='three-cards'>
        <ThreeCards/>
      </section>
    </main>
  );
}

export default MainContent;
