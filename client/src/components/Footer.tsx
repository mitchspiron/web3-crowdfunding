import React from "react";

const Footer = () => {
  return (
    <footer className="glass-effect text-white py-6">
      <div className="container mx-auto px-4 text-center">
        <p className="text-sm text-gray-400">
          © {new Date().getFullYear()} Votre Entreprise. Tous droits réservés.
        </p>
        <div className="mt-2 flex justify-center space-x-4">
          <a
            href="#"
            className="text-gray-400 hover:text-white transition-colors duration-200"
          >
            Politique de confidentialité
          </a>
          <a
            href="#"
            className="text-gray-400 hover:text-white transition-colors duration-200"
          >
            Conditions d'utilisation
          </a>
          <a
            href="#"
            className="text-gray-400 hover:text-white transition-colors duration-200"
          >
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
