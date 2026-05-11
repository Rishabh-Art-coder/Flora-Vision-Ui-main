import Navbar from '../Components/Navbar/Navbar';
import HeroBanner from '../Components/HeroBanner/HeroBanner';
// import PlantCard from '../Components/Plantca/PlantCard';
// import PlantCard2 from '../Components/Plantca/PlantCard2';
import Description from './PlantDecoration/Product';
import Product2 from './PlantDecoration/Product2';

export default function Home({ style }) {
  return (
    <>
      <div style={style}>
        <Navbar />

        <HeroBanner />
        <Description />
        <Product2 />

      </div>
    </>
  )
}