
import '../styles/MainContent.css';
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react';
import ThreeCards from './ThreeCards';
import { Link } from 'react-router-dom';
import Typewriter from './Typewriter';

function MainContent() {
    useEffect(() =>{
        AOS.init();
    }, [])
  return (
    <>
      <section className="hero">
        <div className="hero-text" data-aos="zoom-in" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="600">
          <h1>Fastest growing Financial Technology {"(FinTech)"} Community in Nigeria.</h1>
          <p style={{fontSize: 19}}>Trade all digital assets with LinX Excahange</p>
             <Typewriter text="eg. USDT BTC USDC etc"/>
          <p>Unlock your potential with our comprehensive online training. Gain the skills and knowledge to excel in your field with our flexible, engaging, and effective program. Start your journey to success today!</p>
          <div className="hero-buttons">
            <button className="open-account-btn">
                <Link to={"/banktransfer"} className='Linkers'>Join us Now</Link>
                </button>
          </div>
        </div>
      </section>

      <section className="marketplace">
        <div className="marketplace-text" data-aos="fade-right" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="600">
          <h2>The world's First and Fastest Growing Financial Community</h2>
          <p>LinX Corp. we specialize in empowering individuals to achieve financial freedom through comprehensive training programs. Our expert courses cover a wide range of financial topics, equipping our clients with the knowledge and skills needed to make informed financial decisions, optimize their investments, and secure their financial future.</p>
          <p>We are dedicated to helping our clients progress towards their financial goals with confidence and expertise.</p>
          <div className="learn-more-btn-container">
            {/* <button className="learn-more-btn">Learn More</button> */}
          </div>
        </div>
        <div className="marketplace-image" data-aos="fade-left" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="600">
          <img src="https://www.forextraders.com/wp-content/uploads/2020/07/USD-dips-downwards-but-GBP-is-on-the-rise.jpg" alt="Marketplace" />
        </div>
      </section>
      
      <section className='three-cards'>
        <ThreeCards/>
      </section>
    </>
  );
}

export default MainContent;
