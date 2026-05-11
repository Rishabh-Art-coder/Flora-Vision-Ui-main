import Subtitles from "../Components/Subtitles/Subtitiles";
import TestimonialCard from "../Components/TestimonialCard/TestimonialCard";

export default function Customer() {
  return (
    <>
      <Subtitles text="Customers Review" />
      <div className="min-h-screen bg-[#0f1a12] px-10 py-20">
        <Subtitles text="Our Top Selling Plants" />
        {/* 3 Cards Per Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 place-items-center">

          {plantData.map((plant) => (
            <PlantCard
              key={plant.id}
              title={plant.title}
              subtitle={plant.subtitle}
              price={plant.price}
              image={plant.image}
            />
          ))}

        </div>
      </div>
    </>
  );
}
