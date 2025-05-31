const Service_card = ({ index, service_name, service_desc }) => {
  return (
    <div className="relative text-left p-4 md:p-8 bg-[#040404f6] rounded-sm shadow-xl text-white space-y-10">
      {/* Index in top-left corner */}
      <p className="absolute text-gray-600 opacity-30 -top-30 -left-5 text-[200px] font-bold  pointer-events-none select-none z-5">
        {index+1}
      </p>

      {/* Foreground content */}
      <div className="relative z-10 space-y-4">
        <h6 className="text-sm font-light">Our Service</h6>
        <h2 className="text-2xl md:text-4xl font-bold">{service_name}</h2>
        <p className="text-sm md:text-md">{service_desc}</p>
      </div>
    </div>
  );
};

export default Service_card;
