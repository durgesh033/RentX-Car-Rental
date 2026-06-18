import './App.css';


function App() {
  return (
    <div>
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

      <section className="stats">
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

      <section className='featured'>

        <div className='featured-header'>
          <p className='featured-tag'>PREMIUM COLLECTION</p>  
          <h2>Featured Vehicles</h2>
          <p className='featured-subtitle'>
            Explore our handpicked selection of luxury cars, performance and exotic vehicles, available for rent to elevate your driving experience.
          </p>
        </div>

        <div className='car-grid'>
          <div className='car-card'>
            <img src="https://imgd.aeplcdn.com/664x374/n/cw/ec/49376/f8-tributo-exterior-right-rear-three-quarter.jpeg?q=80" alt="Car 1" />
            <div className='car-overlay'>
              <div className='car-header'>
                <div>
                  <small>FERRARI</small>
                  <h3>F8 Tributo</h3>
                </div>
                <span>♥</span>
              </div>

              <div className='car-specs'>
                <span>Automatic</span>
                <span>Petrol</span>
                <span>710 HP</span>
              </div>

              <div className='car-footer'>
                <div className='price'>
                  <span>FROM</span>
                  <h4>$500/day</h4>
                </div>
                <button>Rent Now</button>
              </div>
            </div>
          </div>
          <div className='car-card'>
            <img src="https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/masterpieces/huracan_performante_spy/s/huracan_performante_spy_s_03.jpg" alt="Car 2" />
            <div className='car-overlay'>
              <div className='car-header'>
                <div>
                  <small>LAMBORGINI</small>
                  <h3>Huracan</h3>
                </div>
                <span>♥</span>
              </div>

              <div className='car-specs'>
                <span>Automatic</span>
                <span>Petrol</span>
                <span>640 HP</span>
              </div>

              <div className='car-footer'>
                <div className='price'>
                  <span>FROM</span>
                  <h4>$450/day</h4>
                </div>
                <button>Rent Now</button>
              </div>
            </div>
          </div>
          <div className='car-card'>
            <img src="https://hips.hearstapps.com/hmg-prod/images/2025-porsche-911-gt3-touring-005-a9200559-69529b961ef43.jpg?crop=0.571xw:0.482xh;0.168xw,0.360xh&resize=1200:*" alt="Car 3" />
            <div className='car-overlay'>
              <div className='car-header'>
                <div>
                  <small>PORSCHE</small>
                  <h3>911 Carrera</h3>
                </div>
                <span>♥</span>
              </div>

              <div className='car-specs'>
                <span>Automatic</span>
                <span>Petrol</span>
                <span>701 HP</span>

              </div>

              <div className='car-footer'>
                <div className='price'>
                  <span>FROM</span>
                  <h4>$400/day</h4>
                </div>
                <button>Rent Now</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='why'>
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
      
      <section className='testimonials'>
        <div className='testimonial-header'>
          <p>CUSTOMER REVIEWS</p>
          <h2>What Our Customers Say</h2>
        </div>

        <div className='testimonial-grid'>
          <div className='testimonial-card'>
            <div className='stars'>⭐⭐⭐⭐⭐</div>

            <p>Renting a Ferrari was effortless. The booking process was smooth and the car arrived in pristine condition</p>

            <div className='customer'>
              <h4>Rahul Sharma</h4>
              <span>Mumbai</span>
            </div>
          </div>

          <div className='testimonial-card'>
            <div className='stars'>⭐⭐⭐⭐⭐</div>

            <p>The best luxury car rental experience I've ever had. Transparent pricing and excellent support.</p>

            <div className='customer'>
              <h4>Priya Patel</h4>
              <span>Bangalore</span>
            </div>
          </div>

          <div className='testimonial-card'>
            <div className='stars'>⭐⭐⭐⭐⭐</div>

            <p>Booked a Porsche for a weekend trip. Everything from pickup to return was perfectly managed.</p>
            <div className='customer'>
              <h4>Arjun Singh</h4>
              <span>Delhi</span>
            </div>
          </div>

        </div>
      </section>


    </div>
  );
}

export default App;