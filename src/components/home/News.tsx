const News = () => {
  // Real, verified news items for Nhlanhlayethu
  const newsItems = [
    {
      id: "1",
      title: "Premier Sihle Zikalala and HoD Dr Enock Nzama motivate Grade 12 learners",
      excerpt: "High-level visit inspires matric class at Nhlanhlayethu Secondary School in Inanda.",
      image: "/images/news-premier-visit.jpg",
      category: "Motivation",
      date: "2020"
    },
    {
      id: "2",
      title: "u/15 Netball Team wins KZN Cape Kay Motsepe Schools Netball Cup",
      excerpt: "Our girls bring home the trophy and represent KZN at national tournaments.",
      image: "/images/news-netball.jpg",
      category: "Sports",
      date: "2017"
    },
    {
      id: "3",
      title: "BET Software donates 20 desktop computers to our lab",
      excerpt: "Major boost for digital learning at Nhlanhlayethu Secondary School.",
      image: "/images/news-computers.jpg",
      category: "Partnership",
      date: "2021"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-bay-of-many font-merriweather">
            Latest News &amp; Updates
          </h2>
          <div className="w-20 h-1 bg-chenin mx-auto mt-4"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsItems.map((item) => (
            <article key={item.id} className="rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition duration-300">
              <div className="h-52 overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-full object-cover hover:scale-105 transition duration-500"
                />
              </div>
              <div className="p-7">
                <div className="flex justify-between items-center mb-3">
                  <span className="text-sm font-medium bg-chenin/10 text-chenin px-3 py-1 rounded-full">{item.category}</span>
                  <span className="text-sm text-gray-500">{item.date}</span>
                </div>
                <h3 className="text-xl font-bold text-bay-of-many mb-3 font-merriweather leading-tight">{item.title}</h3>
                <p className="text-gray-600 mb-6">{item.excerpt}</p>
                <a href="https://www.facebook.com/enamba7/" target="_blank" rel="noopener noreferrer" 
                   className="text-bay-of-many font-semibold hover:text-chenin transition flex items-center">
                  Read full story on Facebook
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L9 15" />
                  </svg>
                </a>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-12">
          <a 
            href="https://www.facebook.com/enamba7/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-4 bg-bay-of-many text-white rounded-2xl font-medium hover:bg-emerald-700 transition text-lg"
          >
            Follow us on Facebook for more updates →
          </a>
        </div>
      </div>
    </section>
  );
};

export default News;