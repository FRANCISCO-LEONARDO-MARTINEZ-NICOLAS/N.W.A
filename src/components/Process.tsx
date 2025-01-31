import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Search, Palette, Code2, CheckCircle, Rocket } from 'lucide-react';

export default function Process() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const steps = [
    {
      icon: <Search className="w-8 h-8" />,
      title: "Análisis y Planificación",
      description: "Definimos los objetivos y creamos un plan estratégico",
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: "Diseño UI/UX",
      description: "Creamos una experiencia visual atractiva y funcional",
    },
    {
      icon: <Code2 className="w-8 h-8" />,
      title: "Desarrollo Web",
      description: "Programamos con las mejores tecnologías",
    },
    {
      icon: <CheckCircle className="w-8 h-8" />,
      title: "Pruebas y Optimización",
      description: "Nos aseguramos de que todo funcione perfectamente",
    },
    {
      icon: <Rocket className="w-8 h-8" />,
      title: "Entrega y Soporte",
      description: "Lanzamos tu proyecto y te ayudamos a escalarlo",
    },
  ];

  return (
    <section className="py-20 gradient-bg" id="process">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
            Nuestro Proceso
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Un enfoque estructurado para garantizar el éxito de tu proyecto
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="flex items-center mb-12 last:mb-0"
            >
              <div className="w-16 h-16 flex items-center justify-center bg-blue-500 rounded-full text-white glow">
                {step.icon}
              </div>
              <div className="ml-6">
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-400">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}