import '../styles/ThreeCards.css';
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react';

function ThreeCards() {
    useEffect(() =>{
        AOS.init();
    }, [])
    return (
        <div className="three-cards-container">
            <div className="card" data-aos="zoom-in" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="600">
                <h3>Innovation</h3>
                <p>At LinX Corp, innovation is at the heart of everything we do. Each month, we introduce new features, refine our techniques, and discover cutting-edge solutions to adapt to evolving market conditions. Our teams of top-notch professionals are dedicated to pushing the boundaries of what's possible, ensuring we stay ahead in delivering exceptional value and groundbreaking advancements for our clients.</p>
            </div>
            <div className="card" data-aos="zoom-in" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="600">
                <h3>Global Activity</h3>
                <p>We help clients from all over the world, in almost every industry. From our headquarters in Nigeria, along with our officers around the world, our team works to advance the way </p>
            </div>
            <div className="card" data-aos="zoom-in" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="600">
                <h3>Constantly Improving</h3>
                <p>our clients come first. We believe that solutions and tools must be tailored to meet their specific business needs rather than solely focusing on financial metrics. We continuously strive to simplify complexities and deliver client-oriented innovations that drive their success and growth. </p>
            </div>
        </div>
    );
}

export default ThreeCards;
