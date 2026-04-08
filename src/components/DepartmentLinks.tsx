// components/DepartmentLinks.tsx
const DepartmentLinks = () => {
  const deptLinks = [
    {
      name: "DBE Website",
      url: "https://www.education.gov.za",
      icon: "🏛️",
      description: "National Department of Basic Education"
    },
    {
      name: "Curriculum Support",
      url: "https://www.education.gov.za/Curriculum/CurriculumAssessmentPolicyStatements(CAPS).aspx",
      icon: "📚",
      description: "CAPS Curriculum Materials"
    },
    {
      name: "Matric Results",
      url: "https://www.education.gov.za/Examinations/NationalSeniorCertificate(NSC)Examinations.aspx",
      icon: "🎓",
      description: "NSC Examination Portal"
    },
    {
      name: "SA-SAMS",
      url: "https://www.sasams.gov.za",
      icon: "💻",
      description: "School Administration System"
    }
  ];

  return (
    <section className="bg-green-white py-8">
      <div className="container mx-auto px-4 max-w-6xl">
        <h3 className="text-xl font-bold mb-6 text-center text-bay-of-many">
          Department of Basic Education Resources
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {deptLinks.map((link, index) => (
            <a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition text-center"
            >
              <div className="text-2xl mb-2">{link.icon}</div>
              <div className="font-semibold text-bay-of-many text-sm">{link.name}</div>
              <div className="text-xs text-gray-600 mt-1">{link.description}</div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};