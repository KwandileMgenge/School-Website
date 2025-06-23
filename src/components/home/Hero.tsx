import Button from "./Button"

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
            <Button to="/support#learner">Sponsor a Learner</Button>
            <Button variant="outline">See Our Impact</Button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Hero