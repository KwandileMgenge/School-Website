import React from 'react';
import { motion } from 'framer-motion';

const UnderConstruction: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-bay-of-many/40 to-bay-of-many/80 p-4">
      <motion.div
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="max-w-lg w-full bg-white rounded-xl shadow-lg overflow-hidden border-l-4 border-bay-of-many"
      >
        <div className="bg-bay-of-many p-5">
          <motion.h2 
            className="text-2xl md:text-3xl font-bold text-center text-white flex items-center justify-center gap-3"
            animate={{ 
              scale: [1, 1.05, 1],
            }}
            transition={{ 
              repeat: Infinity, 
              duration: 2 
            }}
          >
            <span>📚</span> 
            Page Under Construction 
            <span>✏️</span>
          </motion.h2>
        </div>
        
        <div className="p-6 text-center">
          <motion.div
            className="flex justify-center mb-6"
            animate={{
              rotate: [0, 10, -10, 0],
            }}
            transition={{
              repeat: Infinity,
              repeatType: "mirror",
              duration: 3,
            }}
          >
            <div className="text-6xl">🏗️</div>
            <div className="text-6xl ml-4">🧑‍🏫</div>
          </motion.div>
          
          <p className="text-gray-700 mb-6 text-lg">
            Our <span className="font-semibold text-bay-of-many">education team</span> is working diligently to prepare this learning resource. 
            Please check back soon for exciting new content!
          </p>
          
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block"
          >
            <a 
              href="/" 
              className="px-6 py-2 bg-bay-of-many text-white rounded-lg font-medium hover:bg-bay-of-many transition-colors"
            >
              Return to Homepage
            </a>
          </motion.div>
        </div>
        
        <div className="bg-blue-50 p-3 text-center text-sm text-blue-800">
          <motion.div
            animate={{ opacity: [0.6, 1, 0.6] }}
            transition={{ repeat: Infinity, duration: 2 }}
          >
            🎓 Learning is a journey - we appreciate your patience! 🎓
          </motion.div>
        </div>
      </motion.div>
      
      {/* Floating school elements */}
      <motion.div 
        className="absolute bottom-10 left-10 text-4xl opacity-70"
        animate={{
          y: [0, -20, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 4,
          delay: 0.5
        }}
      >
        📝
      </motion.div>
      <motion.div 
        className="absolute top-20 right-10 text-4xl opacity-70"
        animate={{
          y: [0, -15, 0],
          rotate: [0, 5, -5, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 5,
        }}
      >
        🔬
      </motion.div>
    </div>
  );
};

export default UnderConstruction;