import React from 'react';

interface HeroSubProps {
  title: string;
  subtitle: string;
  imageUrl: string;
  height?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
  overlayOpacity?: number;
  textAlign?: 'left' | 'center' | 'right';
  className?: string;
  children?: React.ReactNode;
}

const HeroSub: React.FC<HeroSubProps> = ({
  title,
  subtitle,
  imageUrl,
  height = 'lg',
  overlayOpacity = 0.7,
  textAlign = 'center',
  className = '',
  children
}) => {
  const heightClasses = {
    sm: 'h-64',
    md: 'h-80',
    lg: 'h-96',
    xl: 'h-[500px]',
    full: 'min-h-screen'
  };

  const textAlignClasses = {
    left: 'text-left items-start',
    center: 'text-center items-center',
    right: 'text-right items-end'
  };

  return (
    <section 
      className={`relative ${heightClasses[height]} bg-cover bg-center flex items-center justify-center bg-fixed ${className}`}
      style={{ 
        backgroundImage: `linear-gradient(rgba(33, 76, 132, ${overlayOpacity}), rgba(33, 76, 132, ${overlayOpacity * 0.85})), url('${imageUrl}')`
      }}
    >
      <div className={`text-white px-4 max-w-6xl mx-auto flex flex-col ${textAlignClasses[textAlign]}`}>
        <h1 className="text-4xl md:text-5xl font-bold mb-4 font-merriweather">
          {title}
        </h1>
        <p className="text-xl md:text-2xl max-w-2xl">
          {subtitle}
        </p>
        {children && (
          <div className="mt-6">
            {children}
          </div>
        )}
      </div>
    </section>
  );
};

export default HeroSub;