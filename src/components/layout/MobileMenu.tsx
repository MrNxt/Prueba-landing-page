import { motion } from "framer-motion";
import { useState } from "react";

// Importa las imágenes directamente
import menuIcon from "@/assets/icons/menubar1.png";
import closeIcon from "@/assets/icons/close1.png";

interface MobileMenuProps {
  sections: { clave: string; valor: string }[];
  activeSection: string;
  handleScroll: (id: string) => void;
}

export const MobileMenu = ({
  sections,
  activeSection,
  handleScroll,
}: MobileMenuProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="md:hidden">
      {/* Botón para abrir/cerrar el menú */}
      <button
        className="p-2 text-white bg-gray-800 border-none focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        {/* Cambiar entre iconos según el estado del menú */}
        <img
          src={isOpen ? closeIcon : menuIcon}
          alt={isOpen ? "Cerrar menú" : "Abrir menú"}
          className="object-contain w-6 h-6" // Asegura que la imagen mantenga su proporción
        />
      </button>

      {/* Menú móvil con animaciones */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 15, // Efecto de rebote
          }}
          className="absolute w-48 text-white bg-gray-800 rounded-lg shadow-lg right-4 top-16"
        >
          <ul className="flex flex-col p-4 space-y-4">
            {sections.map((section, index) => (
              <motion.li
                key={section.clave}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  delay: index * 0.1, // Efecto de aparición secuencial
                  duration: 0.4,
                }}
              >
                <motion.a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    handleScroll(section.clave);
                    setIsOpen(false); // Cerrar el menú al hacer clic
                  }}
                  className={`block text-lg hover:text-white ${
                    activeSection === section.clave
                      ? "text-[#3B505A]"
                      : "text-white"
                  }`} // Mantén el color blanco
                  whileTap={{
                    y: -5, // Elevar ligeramente el texto al hacer clic
                    scale: 0.95, // Efecto de escala al hacer clic
                    transition: { duration: 0.2 },
                  }}
                >
                  <span className="relative">{section.valor}</span>
                </motion.a>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      )}
    </div>
  );
};
