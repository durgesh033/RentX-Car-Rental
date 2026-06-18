import AOS from 'aos';
import "aos/dist/aos.css";
import { useEffect } from "react";
import Tilt from "react-parallax-tilt";
import './App.css';


function App() {

  useEffect(() => {
    AOS.init({
      duration : 1000
    });
  }, []);

  return (
    <div>
      <div className='orb orb1'></div>
      <div className='orb orb2'></div>
      <nav>
      <h2>RentX</h2>
      <div className='nav-buttons'>
        <button>Login</button>
        <button>Sign Up</button>
      </div>
      </nav>

      <section className="hero">
        <div className='hero-content'>
        <h1>Drive Beyond 
          <br />
          Ordinary
        </h1>
        <p>Luxury, Performance and Freedom at your fingertips</p>
                
        <button>Explore Cars</button>
        </div>
        <img
           src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=1200"
          alt="Car"
        />
      </section>

      <section className="stats" data-aos="zoom-in-up">
        <div className="stat-card">
          <h2>500+</h2>
          <p>Premium Cars</p>
        </div>
        <div className="stat-card">
          <h2>10K+</h2>
          <p>Happy Customers</p>
        </div>
        <div className="stat-card">
          <h2>50k+</h2>
          <p>Cities Covered</p>
        </div>
      </section>

      <section className='featured' data-aos = "fade-up">

        <div className='featured-header'>
          <p className='featured-tag'>PREMIUM COLLECTION</p>  
          <h2>Featured Vehicles</h2>
          <p className='featured-subtitle'>
            Explore our handpicked selection of luxury cars, performance and exotic vehicles, available for rent to elevate your driving experience.
          </p>
        </div>

        <div className='car-grid'>
            <div className="car-card" data-aos="zoom-in-up" data-aos-delay="100" >

              <img
                src="https://imgd.aeplcdn.com/664x374/n/cw/ec/49376/f8-tributo-exterior-right-rear-three-quarter.jpeg?q=80"
                alt="Ferrari F8"
              />

              <div className="car-overlay">

                <div className="car-header">
                  <div>
                    <small>FERRARI</small>
                    <h3>F8 Tributo</h3>
                  </div>

                  <span>♥</span>
                </div>

                <div className="car-specs">
                  <span>Automatic</span>
                  <span>Petrol</span>
                  <span>710 HP</span>
                </div>

                <div className="car-footer">
                  <div className="price">
                    <span>FROM</span>
                    <h4>₹5000/day</h4>
                  </div>

                  <button>Rent Now</button>
                </div>

              </div>

            </div>
            <div className="car-card" data-aos="zoom-in-up" data-aos-delay="300">

              <img
                src="https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/masterpieces/huracan_performante_spy/s/huracan_performante_spy_s_03.jpg"
                alt="Lamborgini Huracan"
              />

              <div className="car-overlay">

                <div className="car-header">
                  <div>
                    <small>LAMBORGINI</small>
                    <h3>Huracan</h3>
                  </div>

                  <span>♥</span>
                </div>

                <div className="car-specs">
                  <span>Automatic</span>
                  <span>Petrol</span>
                  <span>700 HP</span>
                </div>

                <div className="car-footer">
                  <div className="price">
                    <span>FROM</span>
                    <h4>₹6000/day</h4>
                  </div>

                  <button>Rent Now</button>
                </div>

              </div>

            </div>
            <div className="car-card" data-aos="zoom-in-up" data-aos-delay="500">

              <img
                src="https://hips.hearstapps.com/hmg-prod/images/2025-porsche-911-gt3-touring-005-a9200559-69529b961ef43.jpg?crop=0.571xw:0.482xh;0.168xw,0.360xh&resize=1200:*"
                alt="Porsche 911"
              />

              <div className="car-overlay">

                <div className="car-header">
                  <div>
                    <small>PORSCHE</small>
                    <h3>911 Carerra</h3>
                  </div>

                  <span>♥</span>
                </div>

                <div className="car-specs">
                  <span>Automatic</span>
                  <span>Petrol</span>
                  <span>610 HP</span>
                </div>

                <div className="car-footer">
                  <div className="price">
                    <span>FROM</span>
                    <h4>₹4000/day</h4>
                  </div>

                  <button>Rent Now</button>
                </div>

              </div>

            </div>
        </div>
      </section>

      <section className='why' data-aos="zoom-in">
        <h2>Why Choose RentX?</h2>
        <div className='why-grid'>
          <div className='why-card'>
            <h3>🚗 Premium Fleet</h3>
            <p>Access to the finest luxury vehicles in the market.</p>
          </div>

          <div className='why-card'> 
            <h3>💰 Competitive Pricing</h3>
            <p>Affordable rates without compromising on quality.</p>
          </div>

          <div className='why-card'>
            <h3>🛡️ Safety First</h3>
            <p>All vehicles are regularly maintained and insured.</p>
          </div>
        </div>
      </section>
      
      <section className='testimonials' data-aos="fade-right">
        <div className='testimonial-header'>
          <p>CUSTOMER REVIEWS</p>
          <h2>What Our Customers Say</h2>
        </div>

        <div className='testimonial-grid'>
          <div className='testimonial-card'>
            <div className='stars'>⭐⭐⭐⭐⭐</div>

            <p>Renting a Ferrari was effortless. The booking process was smooth and the car arrived in pristine condition</p>

            <div className='customer'>
              <div className='avatar'>
                R
              </div>
              <div className='customer-info'>
                <h4>Rahul Sharma</h4>
                <span>Mumbai</span>
              </div>
            </div>
          </div>

          <div className='testimonial-card'>
            <div className='stars'>⭐⭐⭐⭐⭐</div>

            <p>The best luxury car rental experience I've ever had. Transparent pricing and excellent support.</p>

            <div className='customer'>
              <div className='avatar'>
                P
              </div>
              <div className='customer-info'>
                <h4>Priya Patel</h4>
                <span>Bangalore</span>
              </div>
            </div>
          </div>

          <div className='testimonial-card'>
            <div className='stars'>⭐⭐⭐⭐⭐</div>

            <p>The best luxury car rental experience I've ever had. Transparent pricing and excellent support.</p>
            <div className='customer'>
              <div className='avatar'>
                A
              </div>
              <div className='customer-info'>
                <h4>Arjun Singh</h4>
                <span>Delhi</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      <footer data-aos="fade" data-aos-anchor-placement="top-bottom">
        <div className='footer-top'>
          <div className='footer-brand'>
            <h2>RentX</h2>

            <p>Drive Beyond Ordinary</p>
          </div>

          <div className='footer-links'>
            <div>
              <h4>Quick Links</h4>
              <p>Home</p>
              <p>Cars</p>
              <p>About</p>
              <p>Contact</p>
            </div>

            <div>
              <h4>Support</h4>

              <p>Help Center</p>
              <p>FAQs</p>
              <p>Terms</p>
              <p>Privacy </p>
            </div>
          </div>
        </div>

        <div className='footer-bottom'>
          <p>© 2026 RentX. All Rights Reserved.</p>
        </div>
      </footer>


    </div>
  );
}

export default App;