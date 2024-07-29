const MainBody = () => {
  return (
    <div>
      <main className="container mx-auto mt-16">
        <section id="home" className="py-16">
          <h1 className="text-4xl font-bold">Home</h1>
          <p className="mt-4">This is the home section.</p>
        </section>
        <section id="about" className="py-16">
          <h1 className="text-4xl font-bold">About</h1>
          <p className="mt-4">This is the about section.</p>
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
