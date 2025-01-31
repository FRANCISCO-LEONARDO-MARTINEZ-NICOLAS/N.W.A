import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code2, Rocket, Zap } from 'lucide-react';

export default function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const features = [
    {
      icon: <Code2 className="w-8 h-8" />,
      title: "Innovación",
      description: "Utilizamos las últimas tecnologías para crear soluciones modernas",
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Rendimiento",
      description: "Optimizamos cada proyecto para máxima velocidad y eficiencia",
    },
    {
      icon: <Rocket className="w-8 h-8" />,
      title: "Calidad",
      description: "Código limpio y mantenible para proyectos escalables",
    },
  ];

  return (
    <section className="py-20 gradient-bg" id="about">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-4xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
            Sobre Nosotros
          </h2>
          <p className="text-xl text-gray-300 mb-16">
            Somos un equipo de programadores apasionados por la tecnología, expertos en transformar ideas en realidad digital.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="card-gradient rounded-xl p-6 glow-hover"
              >
                <div className="text-blue-500 mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}