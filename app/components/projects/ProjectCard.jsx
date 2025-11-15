import Link from "next/link";

export default function ProjectCard({ title, date, description, link }) {
  return (
    <div className="rounded-lg border-2 border-gray-300 p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col">
      <h2 className="text-gray-800 rounded-sm text-2xl font-semibold mb-2">{title}</h2>
      <p className="text-gray-500 italic mb-4">{date}</p>
      <p className="text-xl text-gray-700 mb-1">{description}</p>
      <p className="text-gray-400"><Link href={link} target="_blank">Github Repository</Link></p>
    </div>
  )
}
