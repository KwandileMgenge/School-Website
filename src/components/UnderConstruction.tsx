import React from 'react';
import { motion } from 'framer-motion';

const UnderConstruction: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-bay-of-many/50 p-4">
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="max-w-md w-full bg-white rounded-lg shadow-lg overflow-hidden"
      >
        <div className="bg-yellow-500 p-4">
          <motion.h2 
            className="text-2xl font-bold text-center text-white"
            animate={{ 
              rotate: [0, -5, 5, -5, 0],
            }}
            transition={{ 
              repeat: Infinity, 
              repeatType: "reverse", 
              duration: 2 
            }}
          >
            🚧 Under Construction 🚧
          </motion.h2>
        </div>
        
        <div className="p-6 text-center">
          <motion.div
            animate={{
              y: [0, -10, 0],
            }}
            transition={{
              repeat: Infinity,
              duration: 2,
            }}
          >
            <div className="text-6xl mb-4">👷</div>
          </motion.div>
          
          <p className="text-gray-700 mb-4">
            We're working hard to bring you something amazing! Please check back soon.
          </p>
          
          <motion.div
            className="h-2 bg-gray-200 rounded-full overflow-hidden"
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <div className="h-full bg-yellow-500"></div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default UnderConstruction;