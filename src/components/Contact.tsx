import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Mail, MessageSquare, Send } from 'lucide-react';
import { useState } from 'react';
import emailjs from '@emailjs/browser';
import toast, { Toaster } from 'react-hot-toast';

// EmailJS credentials
const EMAILJS_SERVICE_ID = "service_0yg07xp";
const EMAILJS_TEMPLATE_ID = "template_9ru9m9f";
const EMAILJS_PUBLIC_KEY = "-mlQEqZ7KLxcMPNo1";

interface FormData {
  name: string;
  email: string;
  message: string;
}

export default function Contact() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: '',
  });

  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const result = await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        EMAILJS_PUBLIC_KEY
      );

      if (result.status === 200) {
        toast.success('¡Mensaje enviado con éxito!');
        setFormData({ name: '', email: '', message: '' });
      }
    } catch (error) {
      toast.error('Error al enviar el mensaje. Por favor, intenta nuevamente.');
      console.error('EmailJS Error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="py-20 gradient-bg" id="contact">
      <Toaster position="top-right" />
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
              Contáctanos
            </h2>
            <p className="text-xl text-gray-300">
              ¿Listo para impulsar tu proyecto? Escríbenos y conversemos.
            </p>
          </div>

          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="card-gradient rounded-xl p-8 glow-hover"
          >
            <div className="mb-6">
              <label className="block text-gray-300 mb-2" htmlFor="name">
                Nombre
              </label>
              <div className="relative">
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors"
                  placeholder="Tu nombre"
                />
              </div>
            </div>

            <div className="mb-6">
              <label className="block text-gray-300 mb-2" htmlFor="email">
                Correo Electrónico
              </label>
              <div className="relative">
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors"
                  placeholder="tu@email.com"
                />
                <Mail className="absolute right-3 top-3 text-gray-500 w-5 h-5" />
              </div>
            </div>

            <div className="mb-6">
              <label className="block text-gray-300 mb-2" htmlFor="message">
                Mensaje
              </label>
              <div className="relative">
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors"
                  placeholder="Cuéntanos sobre tu proyecto..."
                />
                <MessageSquare className="absolute right-3 top-3 text-gray-500 w-5 h-5" />
              </div>
            </div>

            <motion.button
              type="submit"
              disabled={isLoading}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className={`w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white py-4 rounded-lg font-semibold flex items-center justify-center glow-hover ${
                isLoading ? 'opacity-70 cursor-not-allowed' : ''
              }`}
            >
              <Send className="w-5 h-5 mr-2" />
              {isLoading ? 'Enviando...' : 'Enviar Mensaje'}
            </motion.button>
          </motion.form>
        </motion.div>
      </div>
    </section>
  );
}