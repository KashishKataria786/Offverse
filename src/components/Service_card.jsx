import { motion } from 'framer-motion';

const Service_card = ({ index, service_name, service_desc }) => {
  return (
    <motion.div
      className="relative text-left p-8 bg-[#040404f6] rounded-sm shadow-xl text-white space-y-6"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 1, ease: 'easeOut' }}
    >
      {/* Top-left index */}
      <p className="absolute top-2 left-2 text-[120px] font-bold opacity-10 pointer-events-none select-none z-0">
        {index+1}
      </p>

      {/* Content */}
      <div className="relative z-10 space-y-4">
        <h6 className="text-sm font-light">Our Service</h6>
        <h2 className="text-4xl font-bold">{service_name}</h2>
        <p className='text-justify font-light'>{service_desc}</p>
      </div>
    </motion.div>
  );
};

export default Service_card;
