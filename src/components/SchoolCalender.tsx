// components/SchoolCalendar.tsx
const SchoolCalendar = () => {
  const importantDates = [
    { date: "15 Jan", event: "School Opens", type: "academic" },
    { date: "21 Mar", event: "Human Rights Day", type: "holiday" },
    { date: "Apr", event: "First Term Exams", type: "academic" },
    { date: "27 Apr", event: "Freedom Day", type: "holiday" },
    { date: "1 May", event: "Workers' Day", type: "holiday" },
    { date: "16 Jun", event: "Youth Day", type: "holiday" },
    { date: "Aug", event: "Third Term Exams", type: "academic" },
    { date: "Sep", event: "Spring Break", type: "holiday" },
    { date: "Oct", event: "Final Exams Start", type: "academic" },
    { date: "Dec", event: "Matric Results", type: "academic" }
  ];

  return (
    <section className="py-8 bg-white">
      <div className="container mx-auto px-4 max-w-4xl">
        <h3 className="text-xl font-bold mb-6 text-center text-bay-of-many">
          2024 School Calendar
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
          {importantDates.map((item, index) => (
            <div
              key={index}
              className={`p-3 rounded-lg text-center ${
                item.type === 'holiday' 
                  ? 'bg-red-50 border border-red-200' 
                  : 'bg-blue-50 border border-blue-200'
              }`}
            >
              <div className="font-bold text-bay-of-many">{item.date}</div>
              <div className="text-sm text-gray-700">{item.event}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};