import logo from './logo.svg';
import './App.css';
import Header from './components/header';
import SectionTwo from './components/sectionTwo';
import Slider from './components/Slider';
import SectionMiddle from './components/sectionMiddle';
import Touch from './components/Touch';
import Footer from './components/Footer';


function App() {
  
  const slides = [
    {
      id: 1,
      title: 'Product Managment',
      subtitle: '',
      description: 'two year of experience in building, scaling and selling products via looking after end to end lifecycle',
      image: 'image1Product.png',
    },
    {
      id: 2,
      title: 'Web3',
      subtitle: '',
      description: 'Being a crypto trader since 2K21, have gained substantial exposure in the web3 sphere ranging from DAOs, NFTs and Defi protocols.',
      image: 'image1Crypto.png',
    },
    {
      id: 3,
      title: 'Memer',
      subtitle: '',
      description: 'Generally have a memer sense 🚀🚀🚀',
      image: 'image1Builder.png',
    },
    {
      id: 4,
      title: 'Defi-enthusiast',
      subtitle: '',
      description: ' Being an avid defi enthusiast, have gained substantial exposure in various defi protocols spanning across multiple blockchains as an investor and community manager as well',
      image: 'image1Sass.png',
    },
    {
      id: 5,
      title: 'Product sales',
      subtitle: 'slide',
      description: 'During my stint as a product manager, I have been involved in product sales  as well where I have gained decent exposure about the product sales cycle',
      image: 'image1Crypto.png',
    },
    {
      id: 6,
      title: 'Third',
      subtitle: 'slide',
      description: 'Praesent ac sem eget est.',
      image: 'image1Memer.png',
    },
  ];
  return (
    <div className="App" className="bg-[#1E1E1E]">
    <div style={{background:`url(Ellipse1.png) no-repeat top left, #1E1E1E`}} className="space-y-10">
    <Header/>
    <SectionMiddle/>
    <Slider slides={slides} isPageBackground/>
   <SectionTwo/>
   <Touch/>
   <Footer/>
    </div>
   
    </div>
  );
}

export default App;
