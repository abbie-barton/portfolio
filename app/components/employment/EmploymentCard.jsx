export default function EmploymentCard({ title, company, dateRange, description }) {
  return (
    <div className="rounded-lg border-2 border-gray-300 p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col">
      <h2 className="text-gray-800 rounded-sm text-2xl font-semibold mb-2">{title}</h2>
      <h3 className="text-xl text-gray-700 mb-1">{company}</h3>
      <p className="text-gray-500 italic mb-4">{dateRange}</p>

      <ul className="list-disc pl-5 space-y-2 text-gray-800 grow pb-4">
        {description.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  )
}
