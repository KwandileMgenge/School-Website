// components/QuickStats.tsx
const QuickStats = () => {
  const stats = [
    { label: "School Type", value: "Public Secondary", icon: "🏫" },
    { label: "Grades", value: "8-12", icon: "📊" },
    { label: "Quintile", value: "Q3", icon: "💰" },
    { label: "No-Fee School", value: "Yes", icon: "🎓" }
  ];

  return (
    <section className="bg-bay-of-many text-white py-6">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          {stats.map((stat, index) => (
            <div key={index}>
              <div className="text-2xl mb-2">{stat.icon}</div>
              <div className="font-bold">{stat.value}</div>
              <div className="text-sm text-green-white">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};