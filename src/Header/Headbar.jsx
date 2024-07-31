import { TypeAnimation } from "react-type-animation";


const Navbar = () => {
  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId).scrollIntoView({ behavior: "smooth" });
  };

  const onButtonClick = () => {
    const pdfUrl = "file.pdf";
    const link = document.createElement("a");
    link.href = pdfUrl;   
    // link.download = "/documents/file.pdf";
    link.download = "abc_file"
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

  


  };

  return (
    <div className="flex justify-between bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg mx-auto p-6">
      <TypeAnimation className="text-3xl text-black font-extrabold px-4 bg-green-300 p-2 rounded-lg"
      sequence={[
        'Abdul Bari khatri',
        900,
        'WellCome To My Portfolio',
        900,
        () => {
          console.log('Sequence completed');
        },
      ]}
      wrapper="span"
      cursor={true}
      repeat={Infinity}
      style={{ fontSize: '2em', display: 'inline-block' }}
    />

    
        
      
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
        <button  className="text-white hover:text-black font-extrabold text-2xl cursor-pointer bg-lime-500 py-2 px-4 rounded-lg mx-2"  onClick={onButtonClick}>My Ressume</button>
      </nav>
    </div>
  );
};

export default Navbar;
