import Button from "../Button";

function Hero() {
  return (
    <div>
      <section 
        className="relative w-full h-screen bg-cover bg-center bg-no-repeat" 
        style={{ 
          backgroundImage: "url('/images/school-hero.jpg')"  // ← Replace with real school assembly/netball photo from Facebook
        }}
      >
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-emerald-900/80 via-emerald-900/60 to-slate-900/70"></div>
        
        <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-4 text-white">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 font-merriweather leading-none tracking-tight">
              Nhlanhlayethu Secondary School
            </h1>
            
            <p className="text-2xl md:text-3xl mb-8 max-w-2xl mx-auto">
              Inanda Newtown B, Durban • <span className="font-semibold">Education is the key to success</span>
            </p>

            <div className="flex flex-wrap justify-center gap-6 text-lg mb-10">
              <div className="bg-white/10 backdrop-blur-md px-6 py-3 rounded-2xl border border-white/30">
                1,404 learners
              </div>
              <div className="bg-white/10 backdrop-blur-md px-6 py-3 rounded-2xl border border-white/30">
                49 dedicated educators
              </div>
              <div className="bg-white/10 backdrop-blur-md px-6 py-3 rounded-2xl border border-white/30">
                Quintile 3 • No-fee school
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button to="/support#learner" className="text-xl px-10 py-5">
                Sponsor a Learner
              </Button>
              <Button to="/support" variant="outline" className="text-xl px-10 py-5 border-white text-white hover:bg-white hover:text-emerald-900">
                Support Our School
              </Button>
            </div>

            <p className="mt-12 text-sm uppercase tracking-widest opacity-75">
              Proudly serving Inanda Newtown B • Follow us on Facebook
            </p>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center text-white/70 text-xs">
          <div className="animate-bounce">↓</div>
          <span>Scroll to explore</span>
        </div>
      </section>
    </div>
  );
}

export default Hero;