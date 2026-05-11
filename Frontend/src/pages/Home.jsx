import Navbar from '../Components/Navbar/Navbar';
import HeroBanner from '../Components/HeroBanner/HeroBanner';
import PlantCard from '../Components/Plantcard/PlantCard';
export default function Home({ style }) {
  return (
    <>
      <div style={style}>
        <Navbar />

        <HeroBanner />
        <PlantCard />
      </div>
    </>
  )
}