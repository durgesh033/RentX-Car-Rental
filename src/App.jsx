import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect, useState } from 'react';
import './App.css';

const cars = [
  {
    brand: 'FERRARI', name: 'F8 Tributo', image: 'https://imgd.aeplcdn.com/664x374/n/cw/ec/49376/f8-tributo-exterior-right-rear-three-quarter.jpeg?q=80',
    specs: ['Automatic', 'Petrol', '710 HP'], price: 5000,
  },
  {
    brand: 'LAMBORGHINI', name: 'Huracan', image: 'https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/masterpieces/huracan_performante_spy/s/huracan_performante_spy_s_03.jpg',
    specs: ['Automatic', 'Petrol', '700 HP'], price: 6000,
  },
  {
    brand: 'PORSCHE', name: '911 Carrera', image: 'https://hips.hearstapps.com/hmg-prod/images/2025-porsche-911-gt3-touring-005-a9200559-69529b961ef43.jpg?crop=0.571xw:0.482xh;0.168xw,0.360xh&resize=1200:*',
    specs: ['Automatic', 'Petrol', '610 HP'], price: 4000,
  },
];

function App() {
  const [modal, setModal] = useState(null);
  const [selectedCar, setSelectedCar] = useState(null);
  const [favorites, setFavorites] = useState([]);
  const [toast, setToast] = useState('');
  const [pickupDate, setPickupDate] = useState('');
  const [returnDate, setReturnDate] = useState('');

  useEffect(() => {
    AOS.init({ duration: 700, once: true });
  }, []);

  const showToast = (message) => {
    setToast(message);
    setTimeout(() => setToast(''), 2600);
  };

  const openRent = (car) => {
    setSelectedCar(car);
    setPickupDate('');
    setReturnDate('');
    setModal('rent');
  };

  const today = new Date().toISOString().split('T')[0];

  const toggleFavorite = (name) => {
    setFavorites((current) => current.includes(name) ? current.filter((item) => item !== name) : [...current, name]);
    showToast(favorites.includes(name) ? 'Removed from favourites' : 'Added to favourites');
  };

  const submitForm = (event, message) => {
    event.preventDefault();
    setModal(null);
    showToast(message);
  };

  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <div>
      <div className="orb orb1" />
      <div className="orb orb2" />

      <nav>
        <button className="brand-button" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>RentX</button>
        <div className="nav-links">
          <button onClick={() => scrollTo('home')}>Home</button>
          <button onClick={() => scrollTo('cars')}>Cars</button>
          <button onClick={() => scrollTo('why')}>Why Us</button>
          <button onClick={() => scrollTo('contact')}>Contact</button>
        </div>
        <div className="nav-buttons">
          <button onClick={() => setModal('login')}>Login</button>
          <button className="signup-btn" onClick={() => setModal('signup')}>Sign Up</button>
        </div>
      </nav>

      <main>
        <section className="hero" id="home">
          <div className="hero-content">
            <span className="hero-kicker">PREMIUM CAR RENTALS</span>
            <h1>Drive Beyond <br />Ordinary</h1>
            <p>Luxury, performance and freedom at your fingertips.</p>
            <button className="hero-cta" onClick={() => scrollTo('cars')}>Explore Cars <span>→</span></button>
          </div>
          <img src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=1200" alt="Luxury sports car" />
        </section>

        <section className="stats" data-aos="zoom-in-up">
          <div className="stat-card"><h2>500+</h2><p>Premium Cars</p></div>
          <div className="stat-card"><h2>10K+</h2><p>Happy Customers</p></div>
          <div className="stat-card"><h2>50+</h2><p>Cities Covered</p></div>
        </section>

        <section className="featured" id="cars" data-aos="fade-up">
          <div className="featured-header">
            <p className="featured-tag">PREMIUM COLLECTION</p>
            <h2>Featured Vehicles</h2>
            <p className="featured-subtitle">Explore our handpicked selection of luxury, performance and exotic vehicles.</p>
          </div>

          <div className="car-grid">
            {cars.map((car, index) => (
              <div className="car-card" data-aos="zoom-in-up" data-aos-delay={index * 120} key={car.name}>
                <img src={car.image} alt={car.name} />
                <div className="car-overlay">
                  <div className="car-header">
                    <div><small>{car.brand}</small><h3>{car.name}</h3></div>
                    <button className={`favorite ${favorites.includes(car.name) ? 'active' : ''}`} onClick={() => toggleFavorite(car.name)} aria-label="Favourite">♥</button>
                  </div>
                  <div className="car-specs">{car.specs.map((spec) => <span key={spec}>{spec}</span>)}</div>
                  <div className="car-footer">
                    <div className="price"><span>FROM</span><h4>₹{car.price.toLocaleString('en-IN')}/day</h4></div>
                    <button className="rent-btn" onClick={() => openRent(car)}>Rent Now</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="why" id="why" data-aos="zoom-in">
          <h2>Why Choose RentX?</h2>
          <div className="why-grid">
            <div className="why-card"><h3>🚗 Premium Fleet</h3><p>Access to the finest luxury vehicles in the market.</p></div>
            <div className="why-card"><h3>💰 Competitive Pricing</h3><p>Affordable rates without compromising on quality.</p></div>
            <div className="why-card"><h3>🛡️ Safety First</h3><p>All vehicles are regularly maintained and insured.</p></div>
          </div>
        </section>

        <section className="inquiry-section" id="contact" data-aos="fade-up">
          <div><p className="featured-tag">NEED HELP?</p><h2>Have a question about a car?</h2><p>Our rental team can help with availability, pricing and special requirements.</p></div>
          <button onClick={() => setModal('inquiry')}>Send Inquiry <span>→</span></button>
        </section>

        <section className="testimonials" data-aos="fade-right">
          <div className="testimonial-header"><p>CUSTOMER REVIEWS</p><h2>What Our Customers Say</h2></div>
          <div className="testimonial-grid">
            <div className="testimonial-card"><div className="stars">★★★★★</div><p>Renting a Ferrari was effortless. The booking process was smooth and the car arrived in pristine condition.</p><div className="customer"><div className="avatar">R</div><div className="customer-info"><h4>Rahul Sharma</h4><span>Mumbai</span></div></div></div>
            <div className="testimonial-card"><div className="stars">★★★★★</div><p>The best luxury car rental experience I've had. Transparent pricing and excellent support.</p><div className="customer"><div className="avatar">P</div><div className="customer-info"><h4>Priya Patel</h4><span>Bangalore</span></div></div></div>
            <div className="testimonial-card"><div className="stars">★★★★★</div><p>Excellent cars, quick communication and a genuinely premium experience from start to finish.</p><div className="customer"><div className="avatar">A</div><div className="customer-info"><h4>Arjun Singh</h4><span>Delhi</span></div></div></div>
          </div>
        </section>
      </main>

      <footer>
        <div className="footer-top">
          <div className="footer-brand"><button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>RentX</button><p>Drive Beyond Ordinary</p></div>
          <div className="footer-links">
            <div><h4>Quick Links</h4><button onClick={() => scrollTo('home')}>Home</button><button onClick={() => scrollTo('cars')}>Cars</button><button onClick={() => scrollTo('why')}>About</button><button onClick={() => scrollTo('contact')}>Contact</button></div>
            <div><h4>Support</h4><button onClick={() => setModal('inquiry')}>Help Center</button><button onClick={() => setModal('inquiry')}>FAQs</button><button onClick={() => showToast('Terms & Conditions will be available in the full release.')}>Terms</button><button onClick={() => showToast('Privacy Policy will be available in the full release.')}>Privacy</button></div>
          </div>
        </div>
        <div className="footer-bottom"><p>© 2026 RentX. All Rights Reserved.</p><button onClick={() => setModal('inquiry')}>Contact Rental Team</button></div>
      </footer>

      {modal && (
        <div className="modal-backdrop" onMouseDown={(e) => e.target === e.currentTarget && setModal(null)}>
          <div className="modal" role="dialog" aria-modal="true">
            <button className="close-btn" onClick={() => setModal(null)}>×</button>
            {modal === 'rent' && selectedCar && (
              <form onSubmit={(e) => submitForm(e, `Booking request for ${selectedCar.name} submitted!`)}>
                <p className="modal-kicker">RESERVATION REQUEST</p><h2>Rent {selectedCar.name}</h2><p className="modal-note">₹{selectedCar.price.toLocaleString('en-IN')} per day · Subject to final confirmation</p>
                <label>Full Name<input required placeholder="Your name" /></label><label>Email<input required type="email" placeholder="you@example.com" /></label>
                <div className="form-row"><label>Pick-up Date<input required type="date" min={today} value={pickupDate} onChange={(e) => { setPickupDate(e.target.value); if (returnDate && e.target.value > returnDate) setReturnDate(''); }} /></label><label>Return Date<input required type="date" min={pickupDate || today} value={returnDate} onChange={(e) => setReturnDate(e.target.value)} disabled={!pickupDate} /></label></div>
                {pickupDate && returnDate && <p className="date-help">Rental period: {Math.max(1, Math.ceil((new Date(`${returnDate}T00:00:00`) - new Date(`${pickupDate}T00:00:00`)) / 86400000))} day(s)</p>}
                <label>Pick-up Location<select required><option value="">Select location</option><option>Bhubaneswar</option><option>Mumbai</option><option>Bangalore</option><option>Delhi</option></select></label>
                <button className="modal-submit">Request Booking</button>
              </form>
            )}
            {modal === 'login' && (
              <form onSubmit={(e) => submitForm(e, 'Welcome back! Login demo submitted successfully.')}>
                <p className="modal-kicker">WELCOME BACK</p><h2>Login to RentX</h2><label>Email<input required type="email" placeholder="you@example.com" /></label><label>Password<input required type="password" placeholder="••••••••" /></label><button className="modal-submit">Login</button><button type="button" className="text-btn" onClick={() => setModal('signup')}>New here? Create an account</button></form>
            )}
            {modal === 'signup' && (
              <form onSubmit={(e) => submitForm(e, 'Account created! Welcome to RentX.')}>
                <p className="modal-kicker">JOIN RENTX</p><h2>Create your account</h2><label>Full Name<input required placeholder="Your name" /></label><label>Email<input required type="email" placeholder="you@example.com" /></label><label>Password<input required type="password" placeholder="Create a password" /></label><button className="modal-submit">Create Account</button><button type="button" className="text-btn" onClick={() => setModal('login')}>Already have an account? Login</button></form>
            )}
            {modal === 'inquiry' && (
              <form onSubmit={(e) => submitForm(e, 'Thanks! Our rental team will contact you shortly.')}>
                <p className="modal-kicker">RENTAL SUPPORT</p><h2>Send an inquiry</h2><label>Full Name<input required placeholder="Your name" /></label><label>Email<input required type="email" placeholder="you@example.com" /></label><label>What can we help with?<select required><option value="">Choose a topic</option><option>Car availability</option><option>Pricing</option><option>Booking help</option><option>Special request</option></select></label><label>Message<textarea required rows="4" placeholder="Tell us what you need..."></textarea></label><button className="modal-submit">Send Inquiry</button></form>
            )}
          </div>
        </div>
      )}

      {toast && <div className="toast">✓ {toast}</div>}
    </div>
  );
}

export default App;
