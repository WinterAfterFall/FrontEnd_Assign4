import Image from "next/image";

const Banner = () => {
  return (
    <div className="relative w-full h-[400px] flex items-center justify-center text-center text-white">
      <div className="bg-black bg-opacity-50 p-5 rounded-lg">
        <h1 className="text-4xl font-bold">Where every event finds its venue</h1>
        <p className="text-xl mt-4">
          Finding the perfect venue has never been easier. Whether it’s a
          wedding, corporate event, or private party, we connect people to the
          perfect place.
        </p>
      </div>
      <Image 
        src="/Banner.png" 
        alt="Event Venue" 
        layout="fill" 
        objectFit="cover" 
        className="absolute top-0 left-0 -z-10" 
      />
    </div>
  );
};

export default Banner;