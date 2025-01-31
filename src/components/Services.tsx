import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Globe, Layout, Smartphone, Gauge, Code, Headphones } from 'lucide-react';

export default function Services() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const services = [
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Desarrollo Web",
      description: "Páginas web interactivas y responsivas con las últimas tecnologías",
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Aplicaciones Web",
      description: "Aplicaciones dinámicas y optimizadas para cualquier dispositivo",
    },
    {
      icon: <Layout className="w-8 h-8" />,
      title: "Diseño UI/UX",
      description: "Interfaces modernas y experiencias de usuario excepcionales",
    },
    {
      icon: <Gauge className="w-8 h-8" />,
      title: "Optimización",
      description: "Mejora del rendimiento y velocidad de carga",
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: "Desarrollo Frontend",
      description: "Implementación de interfaces con React, Vue y más",
    },
    {
      icon: <Headphones className="w-8 h-8" />,
      title: "Soporte Técnico",
      description: "Mantenimiento continuo y soporte especializado",
    },
  ];

  return (
    <section className="py-20 gradient-bg" id="services">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
            Nuestros Servicios
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Ofrecemos soluciones completas para tu presencia digital
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="card-gradient rounded-xl p-8 glow-hover"
            >
              <div className="text-blue-500 mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
              <p className="text-gray-400">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}