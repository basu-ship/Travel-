import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";
import { useEffect } from "react";

/* ================= NAVBAR ================= */
const Navbar = () => {
  const navigate = useNavigate();

  return (
    <div className="fixed top-5 left-1/2 -translate-x-1/2 z-50 
w-[92%] md:w-[75%] backdrop-blur-xl bg-white/20 
border border-white/30 rounded-full px-8 py-3 
flex justify-between items-center shadow-lg">

  {/* 🔵 LOGO */}
  <div className="flex items-center gap-3">
    <img src={logo} className="h-12 md:h-14 w-auto object-contain" />
    <span className="hidden md:block text-lg font-semibold text-black dark:text-white">
      OnePass
    </span>
  </div>

  {/* 🔵 NAV LINKS */}
  <div className="hidden md:flex items-center gap-10 text-sm font-medium text-black dark:text-white">
    <button className="hover:opacity-70 transition">Home</button>
    <button className="hover:opacity-70 transition">Search</button>
    <button className="hover:opacity-70 transition">Trips</button>
  </div>

  {/* 🔵 LOGIN BUTTON */}
  <button
    onClick={() => navigate("/login")}
    className="relative px-5 py-2 rounded-full text-sm font-semibold 
    text-white bg-gradient-to-r from-blue-500 to-indigo-600 
    hover:scale-105 hover:shadow-lg transition duration-300"
  >
    Login
  </button>
</div>
  );
};

/* ================= TRAVEL CARDS ================= */


const travelOptions = [
  {
    type: "train",
    label: "Train",
    image: "https://images.unsplash.com/photo-1506784983877-45594efa4cbe",
  },
  {
    type: "bus",
    label: "Bus",
    image: "https://images.unsplash.com/photo-1504215680853-026ed2a45def",
  },
  {
    type: "flight",
    label: "Flight",
    image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05",
  },
];

const TravelCards = () => {
  const navigate = useNavigate();

  /* 🔥 SCROLL ANIMATION LOGIC */
  useEffect(() => {
    const reveals = document.querySelectorAll(".reveal");

    const handleScroll = () => {
      reveals.forEach((el) => {
        const windowHeight = window.innerHeight;
        const elementTop = el.getBoundingClientRect().top;

        if (elementTop < windowHeight - 100) {
          el.classList.add("active");
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="mt-20 px-10">
      {/* TITLE */}
      <h2 className="text-3xl font-bold mb-6 text-black dark:text-white reveal">
        Choose Your Travel
      </h2>

      {/* CARDS */}
      <div className="flex gap-6 overflow-x-auto pb-4">
        {travelOptions.map((item, index) => (
          <div
            key={item.type}
            onClick={() => navigate(`/search?type=${item.type}`)}
            style={{ transitionDelay: `${index * 150}ms` }}
            className="min-w-[280px] h-72 relative rounded-3xl overflow-hidden cursor-pointer group reveal"
          >
            {/* IMAGE */}
            <img
              src={item.image}
              alt={item.label}
              className="w-full h-full object-cover transition duration-700 group-hover:scale-110"
            />

            {/* GRADIENT */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>

            {/* TEXT */}
            <div className="absolute bottom-6 left-6 text-white">
              <h2 className="text-2xl font-bold">{item.label}</h2>
              <p className="text-sm opacity-80">Explore journeys</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};



/* ================= REVIEWS ================= */
const reviews = [
  { name: "Rahul", text: "Smooth and fast booking experience!" },
  { name: "Ananya", text: "Best prices I found online 🔥" },
  { name: "Arjun", text: "Simple UI and very easy to use." },
];

const Reviews = () => {
  return (
    <div className="mt-24 px-10 text-center">
      <h2 className="text-3xl font-bold text-black dark:text-white">
        What Users Say
      </h2>

      <div className="grid md:grid-cols-3 gap-6 mt-10">
        {reviews.map((r, i) => (
          <div
            key={i}
            className="p-6 rounded-xl backdrop-blur-lg 
            bg-white/20 dark:bg-white/10 border border-white/30"
          >
            <p className="text-gray-700 dark:text-gray-300">
              "{r.text}"
            </p>
            <h4 className="mt-4 font-semibold text-black dark:text-white">
              - {r.name}
            </h4>
          </div>
        ))}
      </div>
    </div>
  );
};

/* ================= FOOTER ================= */
const Footer = () => {
  return (
    <div className="mt-24 p-10 text-center border-t border-white/20">
      <h3 className="text-xl font-semibold text-black dark:text-white">
        Contact Us
      </h3>

      <p className="text-gray-600 dark:text-gray-300 mt-2">
        support@onepass.com
      </p>

      <div className="flex justify-center gap-6 mt-4 text-2xl">
        <span>🌐</span>
        <span>📘</span>
        <span>🐦</span>
        <span>📸</span>
      </div>

      <p className="mt-6 text-gray-500 text-sm">
        © 2026 OnePass. All rights reserved.
      </p>
    </div>
  );
};

/* ================= HERO ================= */
const Hero = () => {
  const navigate = useNavigate();

  return (
    <div className="text-center pt-32 px-6">
      <h1 className="text-5xl font-bold text-black dark:text-white">
        Explore the World ✈️
      </h1>

      <p className="mt-4 text-gray-600 dark:text-gray-300">
        Book trains, buses & flights in one place
      </p>

      <button
        onClick={() => navigate("/login")}
        className="mt-6 px-6 py-3 bg-blue-500 text-white rounded-full hover:scale-105 transition"
      >
        Get Started
      </button>
    </div>
  );
};

/* ================= MAIN ================= */
const Landing = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-black transition duration-500">
      <Navbar />
      <Hero />
      <TravelCards />
      <Reviews />
      <Footer />
    </div>
  );
};

export default Landing;