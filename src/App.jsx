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
    </div>
  );
}

export default App;