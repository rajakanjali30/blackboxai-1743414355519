import Link from 'next/link'
import Image from 'next/image'

export default function HeroSection({ title, subtitle, ctaText, ctaLink }) {
  return (
    <div className="relative h-screen flex items-center justify-center bg-gray-900 overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.pexels.com/photos/3761509/pexels-photo-3761509.jpeg"
          alt="Modern workspace"
          layout="fill"
          objectFit="cover"
          quality={100}
          priority
        />
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
          {title}
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-8">
          {subtitle}
        </p>
        <Link href={ctaLink}>
          <a className="inline-block bg-primary hover:bg-primary-dark text-white font-semibold px-8 py-3 rounded-lg transition duration-300 transform hover:scale-105">
            {ctaText}
          </a>
        </Link>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
        <svg
          className="w-8 h-8 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>
    </div>
  )
}