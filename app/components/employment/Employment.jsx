import EmploymentCard from './EmploymentCard'
import employmentInfo from './employmentInfo.json'

export default function Employment() {
  return (
    <div className="flex flex-col items-center justify-center gap-8 mb-8 pt-12 w-full px-24 scroll-mt-20" id="employment">
      <p className="text-gray-800 text-2xl font-semibold text-left self-start">Employment</p>
      <div className="flex flex-wrap justify-between gap-6">
        <div className="w-[48%]">
          <EmploymentCard {...employmentInfo.job1} />
        </div>

        <div className="w-[48%]">
          <EmploymentCard {...employmentInfo.job2} />
        </div>
      </div>
    </div>
  )
}
