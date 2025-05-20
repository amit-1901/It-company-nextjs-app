const departments = [
  {
    title: "HR & Administration Department",
    description:
      "HR operations at “Frontech” is very strong, which reflects the Managements' concern towards employee welfare, career growth and retention. “Frontech” has a strong and well-defined HR Policy, which investigates every aspect of its employees, as “Frontech” believes that Human Resources are its greatest asset.",
  },
  {
    title: "Finance & Accounts Department",
    description:
      "The F&A is a key department managing the finance of the company and accounting. This business function typically includes planning, organizing, auditing, accounting for and controlling the company's finances including publication of the company's financial statements and statutory compliances. It is assisted by a legal team, as when required.",
  },
  {
    title: "Sales & Marketing Department",
    description:
      "The marketing department promotes the business and drives sales of products or services. It provides the necessary research to identify the target customers and other audiences. “Frontech” has strong presence in the government and has been operating in the Banking, verticals along with several PSU's.",
  },
  {
    title: "Project Department",
    description:
      "All business at “Frontech” is done through projects. The projects are of varied nature and are broadly classified as short-term and long-term projects. The project department therefore assumes immense importance in the company as all the projects are driven through the skilled resources of the project department. Respective projects are handled by specified project managers who are further assisted by a coordinated team.",
  },
  {
    title: "Operations / Technical Department",
    description:
      "“Frontech” possess several technical skills sets from software experts, engineering professionals to management wizards. Over the years, we have built a strong technical team who extends their support to the projects. The technical and the operations team takes care of project assessment, bid management, technical training, and project review. Procurement and logistic functions are handled by the operations team.",
  },
];

export default function DepartmentCards() {
  return (
    <div className="container bg-white mx-auto px-4 py-6">
      <h6 className="text-3xl md:text-4xl font-bold text-center mb-10">
        Our Departments
      </h6>
      <hr className="border-gray-700 w-full mx-auto my-4" />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {departments.map((dept, index) => (
          <div
            key={index}
            className="relative flex flex-col bg-white shadow-sm border border-slate-200 hover:border-slate-300 hover:shadow-md rounded-lg transition-all cursor-pointer p-4"
          >
            <h5 className="mb-2 text-xl font-semibold text-[#27699D]">
              {dept.title}
            </h5>
            <p className="text-slate-600 leading-normal font-light">
              {dept.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
