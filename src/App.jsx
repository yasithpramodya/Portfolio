import Navbar from './components/Navbar';
import Lightning from './Lightning';
import About from './pages/About';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import Servises from './pages/Servises';
import Waves from './animation/Waves';
import SplashCursor from './animation/Spasher';
function App() {
  return (
    
    <div style={{ position: "relative", minHeight: "100vh", overflowX: "hidden" }}>
      
      {/* Lightning Background */}
      <div style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: -1,
        display:'flex',
      }}>
        <Waves
  lineColor="#ffffff1a"
  backgroundColor="rgb(0, 0, 0)"
  waveSpeedX={0.02}
  waveSpeedY={0.01}
  waveAmpX={40}
  waveAmpY={20}
  friction={0.9}
  tension={0.01}
  maxCursorMove={120}
  xGap={12}
  yGap={36}
/>
      </div>

      {/* Page Content */}
      <Navbar />

      <section id="home" className="h-screen flex items-center justify-center">
        <h1 className="text-4xl"><Home /></h1>
      </section>

      <section id="about" className="h-screen flex items-center justify-center">
        <h1 className="text-4xl"><About /></h1>
      </section>

      <section id="services" className="h-screen flex items-center justify-center">
        <h1 className="text-4xl"><Servises /></h1>
      </section>

      <section id="portfolio" className="h-screen flex items-center justify-center">
        <h1 className="text-4xl"><Portfolio /></h1>
      </section>

      <section id="contact" className="h-screen flex items-center justify-center">
        <h1 className="text-4xl"><Contact /></h1>
      </section>
    </div>
  );
}

export default App;
