import Subtitles from "../Components/Subtitles/Subtitiles";
import TestimonialCard from "../Components/TestimonialCard/TestimonialCard";
import reviewData from "../Components/TestimonialCard/reviews.js"
export default function Customer() {
  return (
    <>
      <div className="min-h-screen bg-[#1b2b22] px-10 py-20">
      <Subtitles text="Customers Review" />
       
        {/* 3 Cards Per Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 place-items-center">

          {reviewData.map((plant) => (
            <TestimonialCard
              key={plant.id}
              name={plant.name}
              text={plant.text}
              image={plant.image}
              length={plant.length}
            />
          ))}

        </div>
      </div>
    </>
  );
}
