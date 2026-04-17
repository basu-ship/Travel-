import { useNavigate } from "react-router-dom";

const travelOptions = [
  {
    type: "train",
    label: "Train",
    video: "/train.mp4"
  },
  {
    type: "bus",
    label: "Bus",
    video: "/bus.mp4"
  },
  {
    type: "flight",
    label: "Flight",
    video: "/flight.mp4"
  }
];

const TravelGrid = () => {
  const navigate = useNavigate();

  const handleClick = (type) => {
    navigate(`/search?type=${type}`);
  };

  return (
    <div className="h-screen w-full grid grid-cols-1 md:grid-cols-3">
      {travelOptions.map((item) => (
        <div
          key={item.type}
          className="relative group cursor-pointer overflow-hidden"
          onClick={() => handleClick(item.type)}
        >
          {/* 🎬 VIDEO */}
          <video
            src={item.video}
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />

          {/* 🌑 Overlay */}
          <div className="absolute inset-0 bg-black/50 group-hover:bg-black/60 transition duration-300"></div>

          {/* ✨ Border Glow */}
          <div className="absolute inset-0 border-2 border-transparent group-hover:border-white/40 transition duration-300"></div>

          {/* 🎯 Content */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
            <h2 className="text-4xl font-bold mb-4 tracking-wide">
              {item.label}
            </h2>

            <button className="bg-white/90 backdrop-blur-md text-black px-6 py-2 rounded-full font-semibold hover:bg-white transition">
              Search {item.label}
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TravelGrid;