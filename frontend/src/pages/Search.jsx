import { useState } from "react";
import axios from "axios";
import bgImage from "../assets/bg.jpg";
import { useLocation } from "react-router-dom";

const Search = () => {

  const location = useLocation(); 
  const params = new URLSearchParams(location.search);
  const typeFromURL = params.get("type");

  const [source, setSource] = useState("");
  const [destination, setDestination] = useState("");
  const [type, setType] = useState(typeFromURL || "bus");
  const [results, setResults] = useState([]);

  const handleSearch = async () => {
    try {
      const res = await axios.get(
        `http://localhost:5000/api/transports?source=${source}&destination=${destination}&type=${type}`
      );

      setResults(res.data.transports);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center flex flex-col items-center justify-start pt-20"
      style={{ backgroundImage: `url(${bgImage})` }}
    >

      {/* 🔍 Glass Search Box */}
      <div className="backdrop-blur-md bg-white/20 border border-white/30 p-6 rounded-2xl shadow-xl flex gap-4 items-center">
        
        <input
          type="text"
          placeholder="From"
          className="p-3 rounded-lg bg-transparent border border-white text-white placeholder-white outline-none"
          value={source}
          onChange={(e) => setSource(e.target.value)}
        />

        <input
          type="text"
          placeholder="To"
          className="p-3 rounded-lg bg-transparent border border-white text-white placeholder-white outline-none"
          value={destination}
          onChange={(e) => setDestination(e.target.value)}
        />

        <select
          className="p-3 rounded-lg bg-transparent border border-white text-white"
          value={type}
          onChange={(e) => setType(e.target.value)}
        >
          <option value="bus">Bus</option>
          <option value="train">Train</option>
          <option value="flight">Flight</option>
        </select>

        <button
          onClick={handleSearch}
          className="bg-white text-black px-6 py-3 rounded-full font-semibold hover:bg-gray-200"
        >
          Search
        </button>
      </div>

      {/* 🚀 RESULTS */}
      <div className="mt-10 w-full max-w-4xl px-4">
        {results.length > 0 && (
          <div className="space-y-6">
            {results.map((item) => (
              <div
                key={item._id}
                className="backdrop-blur-md bg-white/20 border border-white/30 rounded-xl p-6 flex justify-between items-center text-white"
              >
                <div>
                  <h2 className="text-xl font-bold capitalize">
                    {item.type}
                  </h2>
                  <p>
                    {item.source} → {item.destination}
                  </p>
                  <p className="mt-2 font-semibold">
                    ₹{item.price}
                  </p>
                </div>

                <button className="bg-white text-black px-4 py-2 rounded-full hover:bg-gray-200">
                  Book Now
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Search;