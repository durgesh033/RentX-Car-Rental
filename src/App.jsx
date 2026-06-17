import './App.css';


function App() {
  return (
    <div>
      <nav className='contianer'>
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

        <h2>Featured Vehicles</h2>

        <div className='car-grid'>
          <div className='car-card'>
            <img src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=600" alt="Car 1" />
            <div className='car info'>
            <h3>Ferrari F8</h3>
            <p>$500/day</p>
            <button>Rent Now</button>
          </div>
          </div>
          <div className='car-card'>
            <img src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=600" alt="Car 2" />
            <div className='car info'>
            <h3>Lamborghini Huracan</h3>
            <p>$450/day</p>
            <button>Rent Now</button>
          </div>
          </div>
          <div className='car-card'>
            <img src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=600" alt="Car 3" />
            <div className='car info'>
            <h3>Porsche 911</h3>
            <p>$400/day</p>
            <button>Rent Now</button>
          </div>
          </div>
        </div>
      </section>


    </div>
  );
}

export default App;