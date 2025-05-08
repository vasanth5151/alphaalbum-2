import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Heropage from './components/Heropage';
import AlbumsGallery from './components/AlbumsGallery';
import PhotoGallery from './components/PhotoGallery';
import WeddingGallery from './components/WeddingGallery';
import UnlimitedAlbumsSection from './components/UnlimitedAlbumsSection';
import VideoHero from './components/VideoHero';
import Explore from './components/pages/Explore';
import AlbumsPage from './components/pages/AlbumsPage';
import ContactPage from './components/pages/ContactPage';


function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        
        <Routes>
          {/* Home Route */}
          <Route path="/" element={
            <>
              <Heropage />
              <AlbumsGallery />
              <PhotoGallery />
              <WeddingGallery />
              <UnlimitedAlbumsSection />
              <VideoHero />
            </>
          } />
          
          {/* Explore Page Route */}
          <Route path="/explore" element={<Explore />} />
          <Route path="/albums" element={<AlbumsPage />} />
          <Route path="/contact" element={<ContactPage />} />
        
        </Routes>
        
        <Footer />
      </div>
    </Router>
  );
}

export default App;