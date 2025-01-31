import { motion } from 'framer-motion';
import { RocketIcon } from 'lucide-react';

export default function Hero() {
  return (
    <section className="min-h-screen relative overflow-hidden gradient-bg">
      <div className="absolute inset-0 hero-gradient" />
      <div className="container mx-auto px-4 pt-32 pb-20 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto"
        >
          <motion.div
            initial={{ scale: 0.5 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
            className="mb-8 inline-block"
          >
            <RocketIcon className="w-16 h-16 text-blue-500" />
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500"
          >
            Impulsamos tu Negocio con Tecnología de Alto Nivel
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-xl text-gray-300 mb-12"
          >
            Somos NWA Solutions, un equipo de programadores expertos en desarrollo de páginas y aplicaciones web.
          </motion.p>
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-8 py-4 rounded-full text-lg font-semibold glow-hover transition-all duration-300"
          >
            ¡Trabajemos Juntos!
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}