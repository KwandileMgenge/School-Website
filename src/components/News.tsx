
const News = () => {
  const newsItems = [
    {
      id: 1,
      title: "School Wins Regional Science Fair",
      date: "May 15, 2023",
      excerpt: "Our team took first place in the regional STEM competition with their innovative water purification project.",
      category: "Achievements",
      image: "/science-fair.jpg" // Replace with your image path
    },
    {
      id: 2,
      title: "New Computer Lab Grant Received",
      date: "April 28, 2023",
      excerpt: "Thanks to generous donors, we've secured funding for a 20-station computer lab to launch next term.",
      category: "Development",
      image: "/computer-lab.jpg"
    },
    {
      id: 3,
      title: "Annual Sports Day Results",
      date: "March 10, 2023",
      excerpt: "Over 200 students participated in our biggest sports day yet. See the winning teams and photos.",
      category: "Events",
      image: "/sports-day.jpg"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-bay-of-many font-merriweather">
            Latest News & Updates
          </h2>
          <div className="w-20 h-1 bg-chenin mx-auto mt-4"></div>
        </div>

        {/* News Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsItems.map((item) => (
            <article key={item.id} className="rounded-lg overflow-hidden shadow-md hover:shadow-lg transition duration-300">
              {/* News Image */}
              <div className="h-48 overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-full object-cover hover:scale-105 transition duration-500"
                />
              </div>
              
              {/* News Content */}
              <div className="p-6">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium text-chenin">{item.category}</span>
                  <span className="text-sm text-gray-500">{item.date}</span>
                </div>
                <h3 className="text-xl font-bold text-bay-of-many mb-3 font-merriweather">{item.title}</h3>
                <p className="text-gray-600 mb-4">{item.excerpt}</p>
                <button className="text-bay-of-many font-semibold hover:text-chenin transition flex items-center">
                  Read more
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </article>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <button className="px-6 py-3 bg-bay-of-many text-white rounded-lg hover:bg-blue-800 transition font-medium">
            View All News Updates
          </button>
        </div>
      </div>
    </section>
  );
};

export default News;