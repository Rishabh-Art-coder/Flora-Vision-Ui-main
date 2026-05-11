import Navbar from '../Components/Navbar/Navbar';
import HeroBanner from '../Components/HeroBanner/HeroBanner';
export default function Home({style}) {
  return (
    <>
    <div style={style}>
      <Navbar />
    </div>

    <HeroBanner />
    </>
  )
}