import ProjectCard from './ProjectCard'

export default function Projects() {
  return (
    <div id="projects" className="flex flex-col items-center justify-center gap-8 pt-12 w-full px-24 scroll-mt-20">
      <p className="text-gray-800 text-2xl font-semibold text-left self-start">Projects</p>
      <div className="flex flex-wrap flex-row gap-6">
        <div className="w-[30%]">
          <ProjectCard
            title={'Tweeter Web Project'}
            date={'September 2025 - December 2025'}
            description={
              'A web application similar to Twitter that allows users to post and interact with short messages.'
            }
            link={'https://github.com/abbie-barton/cs-340-tweeter'}
          />
        </div>
        <div className="w-[30%]">
          <ProjectCard
            title={'Recipe Website'}
            date={'September 2023 - December 2023'}
            description={'A website that allows users to browse, search, and save recipes.'}
            link={'https://github.com/abbie-barton/startup-cs260'}
          />
        </div>
        <div className="w-[30%]">
          <ProjectCard
            title={'Chess'}
            date={'January 2025 - April 2025'}
            description={'A terminal-based chess game with multiplayer functionality.'}
            link={'https://github.com/abbie-barton/chess'}
          />
        </div>
      </div>
    </div>
  )
}
