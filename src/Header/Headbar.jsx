const Navbar = () => {
  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId).scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="flex justify-between bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg mx-auto p-6">
      <div className="text-3xl text-black font-extrabold px-4 bg-green-300 p-2 rounded-lg">
        Abdul Bari Portfolio
      </div>
      <nav>
        <button
          className="text-white hover:text-black font-extrabold text-2xl cursor-pointer bg-lime-500 py-2 px-4 rounded-lg mx-2"
          onClick={() => scrollToSection("home")}
        >
          Home
        </button>
        <button
          className="text-white hover:text-black font-extrabold text-2xl cursor-pointer bg-lime-500 py-2 px-4 rounded-lg mx-2"
          onClick={() => scrollToSection("about")}
        >
          About
        </button>
        <button
          className="text-white hover:text-black font-extrabold text-2xl cursor-pointer bg-lime-500 py-2 px-4 rounded-lg mx-2"
          onClick={() => scrollToSection("services")}
        >
          Services
        </button>
        <button
          className="text-white hover:text-black font-extrabold text-2xl cursor-pointer bg-lime-500 py-2 px-4 rounded-lg mx-2"
          onClick={() => scrollToSection("contact")}
        >
          Contact
        </button>
      </nav>
    </div>
  );
};

export default Navbar;
