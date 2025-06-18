function Hero() {
  return (
    <div>
      <section className="relative w-full h-screen bg-cover bg-center bg-no-repeat" 
        style={{ backgroundImage: "url('/Zwelemfundo_public_school_Africom.jpg')" }}>
          
        {/* Gradient overlay for readability */}
        <div className="absolute inset-0 bg-bay-of-many/70"></div>
        
        <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-4 text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 font-merriweather leading-tight">
            Building Brighter Futures
          </h1>
          
          <div className="text-xl md:text-2xl max-w-3xl space-y-4 mb-8">
            <p>
              At Nhlanhlayethu Secondary, we empower young minds through education that <span className="font-semibold">transforms lives</span>. 
              Our 92% graduation rate proves what's possible when community supports potential.
            </p>
            <p className="bg-bay-of-many/90 inline-block px-4 py-2 rounded-lg">
              Be part of their success story →
            </p>
          </div>

          <div className="flex gap-4">
            <button className="bg-chenin border-chenin border-2 hover:bg-transparent hover:text-chenin hover:border-2 text-bay-of-many px-6 py-3 rounded-lg font-bold transition">
              Sponsor a Student
            </button>
            <button className="border-2 border-white hover:bg-white/20 px-6 py-3 rounded-lg font-bold transition">
              See Our Impact
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Hero