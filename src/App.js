import './App.css'
import Header from "./components/Header/Header";
import Welcome from "./components/Welcome/Welcome";
import VirtualTour from './components/VirtualTour/VirtualTour';
import PictureExplore from './components/PictureExplore/PictureExplore';
import Paralax from './components/Paralax/Paralax';
import VideoJourney from './components/VideoJourney/VideoJourney';
import ArtGallery from './components/ArtGallery/ArtGallery';
import BuyTickets from './components/BuyTickets/BuyTickets';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Welcome />
      <VirtualTour />
      <PictureExplore />
      <Paralax />
      <VideoJourney />
      <ArtGallery />
      <BuyTickets />
      <Footer />
    </div>
  );
}

export default App;