import Navbar from '../Components/Navbar/Navbar';
import HeroBanner from '../Components/HeroBanner/HeroBanner';
import PlantCard from '../Components/Plantcard/PlantCard';
// import PlantCard2 from '../Components/Plantca/PlantCard2';
import Description from './PlantDecoration/Product';
import Product2 from './PlantDecoration/Product2';
import plantData from "../Components/Plantcard/Plant.js";
import Plants from '../pages/Plants.jsx';
import TestimonialCard from '../Components/TestimonialCard/TestimonialCard.jsx';
import Customers from '../pages/Customer.jsx';
import PlantFeatureCard from '../pages/PlantFeature.jsx';
import Footer from '../Components/Footer/Footer.jsx';
export default function Home({ style }) {
  return (
    <>
      <div style={style}>
        <Navbar />
        <HeroBanner />
        <Description />
        <Product2 />
        <div className='bg-[#1b2b22]'> 

        <Plants />
        <Customers />
        <PlantFeatureCard />
        <Footer />
        </div>
        {/* <TestimonialCard/> */}
      </div>
    </>
  )
}