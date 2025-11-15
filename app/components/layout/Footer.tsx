'use client'

export default function Footer() {
  const mainColor = '#7CCC91'

  return (
    <footer
      className="w-full bg-white shadow-md"
      style={{ borderTop: `8px solid ${mainColor}` }}
    >
      <div className="w-full px-16 flex items-center justify-center py-6">
        {/* Contact info centered */}
        <div className="flex space-x-8 text-sm text-gray-600">
          <a
            target="_blank"
            href="mailto:abbie.s.barton@gmail.com"
            className="transition-colors duration-300"
            onMouseEnter={(e) => {
              const target = e.currentTarget as HTMLAnchorElement
              target.style.color = mainColor
            }}
            onMouseLeave={(e) => {
              const target = e.currentTarget as HTMLAnchorElement
              target.style.color = ''
            }}
          >
            abbie.s.barton@gmail.com
          </a>
          <a
            href="https://linkedin.com/in/abigail-barton-802489321/"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors duration-300"
            onMouseEnter={(e) => {
              const target = e.currentTarget as HTMLAnchorElement
              target.style.color = mainColor
            }}
            onMouseLeave={(e) => {
              const target = e.currentTarget as HTMLAnchorElement
              target.style.color = ''
            }}
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/abbie-barton"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors duration-300"
            onMouseEnter={(e) => {
              const target = e.currentTarget as HTMLAnchorElement
              target.style.color = mainColor
            }}
            onMouseLeave={(e) => {
              const target = e.currentTarget as HTMLAnchorElement
              target.style.color = ''
            }}
          >
            GitHub
          </a>
        </div>
      </div>
    </footer>
  )
}