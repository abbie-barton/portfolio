'use client'

export default function Header() {
  const mainColor = '#7CCC91'

  return (
    <header
      className="fixed top-0 left-0 w-full bg-white shadow-md z-50"
      style={{ borderBottom: `8px solid ${mainColor}` }}
    >
      <nav className="w-full px-16 flex items-center justify-between py-6">
        {/* Name on the left */}
        <p className="text-gray-800 font-bold text-3xl">ABIGAIL BARTON</p>

        {/* Links on the right */}
        <div className="flex space-x-8">
          {['About Me', 'Projects', 'Employment'].map((text) => (
            <a
              key={text}
              href={`#${text.toLowerCase().replace(/\s+/g, '')}`}
              className="text-gray-600 text-2xl transition-colors duration-300"
              style={
                {
                  '--hover-color': mainColor,
                } as any
              }
              onMouseEnter={(e) => {
                const target = e.currentTarget as HTMLAnchorElement
                target.style.color = mainColor
              }}
              onMouseLeave={(e) => {
                const target = e.currentTarget as HTMLAnchorElement
                target.style.color = ''
              }}
            >
              {text}
            </a>
          ))}
        </div>
      </nav>
    </header>
  )
}