import Image1 from '../assets/image1.jpeg'

const MainBody = () => {
   
  return (
    
      
 <div>
   <img className="bg-cover bg-center h-screen w-full" src={Image1} alt="" />

      <main className="container mx-auto mt-16">
        <section id="home" className="py-16">
          <h1 className="text-4xl font-bold">Home</h1>
          <a href='/documents/file.pdf' download='/documents/file.pdf'>Download file</a>
          <p className="mt-4">This is the home section.</p>
        </section>
        <section id="about" className="py-16">
          <h1 className="text-4xl font-bold">About</h1>
          <h3 className="mt-4">HELLO THERE ! My name is Abdul Bari, and I am a skilled freelancer specializing <br/> in Python, JavaScript, React, React Native, and data administration. With a proven <br/> track record of delivering high-quality solutions, I bring technical expertise and <br/>creativity to every project. My focus is on exceeding client expectations and staying <br/> updated with industry trends. Lets connect and explore how I can help bring your vision to life.</h3>
        </section>
        <section id="services" className="py-16">
          <h1 className="text-4xl font-bold">Services</h1>
          <p className="mt-4">This is the services section.</p>
        </section>
        <section id="contact" className="py-16">
          <h1 className="text-4xl font-bold">Contact</h1>
          <p className="mt-4">This is the contact section.</p>
        </section>
      </main>
    </div>
   
  );
};

export default MainBody;
