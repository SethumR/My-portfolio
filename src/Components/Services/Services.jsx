const ServiceCard = ({ image, title, type }) => (
  <div className="bg-slate-800 rounded-3xl overflow-hidden shadow-md	transform transition-transform hover:scale-105 duration-700 ease-out-in shadow-slate-600	">
    <div className="h-72 flex items-center justify-center p-4"> 
      <img src={image} alt={title} className="w-full h-full object-cover rounded-3xl" />
    </div>
    <div className="p-6 text-center">
      <h3 className="text-2xl font-semibold text-white mb-4">{title}</h3>
      <h4 className="text-slate-300 text-lg font-medium  mb-2">{type}</h4>
    </div>
  </div>
);

const Services = () => {
  const services = [
    {
      image: 'Web.png', 
      title: 'Web Development',
      type : 'Building responsive, user-friendly websites that deliver exceptional experiences across all devices and platforms.'
    },
    {
      image: 'Mobile.png',
      title: 'Mobile Development',
      type : 'Creating intuitive mobile apps that offer seamless experiences, optimized for performance across all devices.'

    },
    {
      image: 'Ui.png', 
      title: 'UI UX Design',
      type: 'Designing intuitive and engaging UI/UX that enhances user experience and ensures seamless interaction across platforms.',
    },
  ];

  return (
    <section className="text-white py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-[42px] sm:text-5xl font-semibold mb-12 lg:mb-16 text-center">
          Our Services
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
