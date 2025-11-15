import FaceCard from './FaceCard'

export default function About() {
  const bgColor = '#DFEDE2'
  return (
    <div
      style={{ backgroundColor: bgColor }}
      className="text-gray-700 text-lg rounded-sm p-8 flex flex-row items-center justify-center gap-8 hover:shadow-md transition-shadow duration-300 scroll-mt-28"
      id="aboutme"
    >
      <div className="flex flex-col gap-4 w-[60%]">
        <p className="text-2xl font-semibold text-gray-800">About Me</p>
        <p>
          Hello! I am a Web Developer and a Computer Science student at Brigham Young University,
          set to graduate in December 2026. My studies have an emphasis in Human-Computer
          Interaction and a minor in Family Life.
        </p>
        <p>
          I am experienced in full-stack development and skilled at bridging theoretical knowledge
          with practical application. I'm passionate about creative problem-solving , clear
          communication , and collaborating with teams to build efficient, scalable web
          applications.
        </p>
      </div>
      <FaceCard />
    </div>
  )
}
