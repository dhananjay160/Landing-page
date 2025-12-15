import React from "react";

const Home = () => {
  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-black text-white">

      {/* NAVBAR */}
      <nav className="flex justify-between items-center px-6 md:px-16 py-6 fixed w-full z-50 bg-black">
        <h1 className="   md:text-3xl font-extrabold bg-clip-text text-transparent 
bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600   font-bold tracking-widest">GRAX</h1>

        <ul className="hidden md:flex gap-8 text-sm text-gray-300">
          <li
            className="hover:text-yellow-700 cursor-pointer transition-colors"
            onClick={() => handleScroll("home")}
          >
            Home
          </li>
          <li
            className="hover:text-yellow-700 cursor-pointer transition-colors"
            onClick={() => handleScroll("about")}
          >
            About
          </li>
          <li
            className="hover:text-yellow-700 cursor-pointer transition-colors"
            onClick={() => handleScroll("Features")}
          >
            Features
          </li>
          
          <li
            className="hover:text-yellow-700 cursor-pointer transition-colors"
            onClick={() => handleScroll("contact")}
          >
            Contact
          </li>
        </ul>
      </nav>

      {/* HERO */}
      <section
        id="home"
        className="grid grid-cols-1 md:grid-cols-2 min-h-[calc(100vh-80px)] pt-20"
      >
        {/* LEFT CONTENT */}
        <div className="flex items-center px-6 md:px-16">
          <div className="max-w-xl">
            <h2 className="  font-extrabold bg-clip-text text-transparent 
bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600      text-5xl md:text-7xl font-bold mb-4">
              Alan Walker
            </h2>
            <p className="text-gray-300 text-lg mb-8">Web & Mobile App Developer</p>

            <button className="px-8 py-3 rounded-full bg-black text-white font-semibold hover:border-purpel-500 transition"
            onClick={() => handleScroll("Features")}
            >
              View Portfolio
            </button>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="relative hidden md:block">
          <img
            src="https://images.unsplash.com/photo-1607746882042-944635dfe10e"
            alt="Hero"
            className="h-full w-full object-cover grayscale"
          />
          <div className="absolute inset-0 bg-gradient-to-l from-black/60 to-transparent"></div>
        </div>
      </section>

    </div>
  );
};

export default Home;
