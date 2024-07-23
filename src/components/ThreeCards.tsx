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
                <h3>Business Comes First</h3>
                <p>We believe that the nature of the solutions and tools must be business-oriented rather than financial. We continuously make every effort to turn the complexities and ... </p>
                <a href="#">Read More..</a>
            </div>
            <div className="card" data-aos="zoom-in" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="600">
                <h3>Global Activity</h3>
                <p>We help clients from all over the world, in almost every industry. From our headquarters in Israel, along with four other offices around the world, our team works to advance the way ... </p>
                <a href="#">Read More..</a>
            </div>
            <div className="card" data-aos="zoom-in" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="600">
                <h3>Constantly Improving</h3>
                <p>LinksCorp is constantly improving. Each month we add new features, refine techniques and regularly find new solutions for new market conditions. Our teams of top-notch ... </p>
                <a href="#">Read More..</a>
            </div>
        </div>
    );
}

export default ThreeCards;
