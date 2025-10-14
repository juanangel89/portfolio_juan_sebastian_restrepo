// src/components/AnimatedPage.jsx

import { motion } from 'framer-motion';

// Define las animaciones de entrada y salida
const pageTransition = {
  initial: { opacity: 0, y: -100}, // Empieza invisible
  animate: { opacity: 1, y: 0 },    // Termina visible en su posición
  exit: { opacity: 0, y: 100},     // Se va invisible
};

export const AnimatedPage = ({ children }) => {
  return (
    <motion.div 
      variants={pageTransition}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: 0.5 }} // Duración de 0.5 segundos
      style={{ width: "100%" }} // Opcional: asegura que la animación cubra todo el ancho
    >
      {children}
    </motion.div>
  );
};