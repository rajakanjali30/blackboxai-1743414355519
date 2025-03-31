import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setLoading } from '../store/slices/uiSlice'
import Layout from '../components/Layout'
import HeroSection from '../components/HeroSection'
import ServiceCard from '../components/ServiceCard'
import { FaCode, FaPalette, FaMobile, FaRocket } from 'react-icons/fa'

export default function Home() {
  const dispatch = useDispatch()

  useEffect(() => {
    // Simulate loading data
    dispatch(setLoading(true))
    const timer = setTimeout(() => {
      dispatch(setLoading(false))
    }, 1000)
    return () => clearTimeout(timer)
  }, [dispatch])

  const services = [
    {
      icon: <FaCode className="text-4xl text-primary" />,
      title: 'Web Development',
      description: 'Modern, responsive websites built with React and Next.js'
    },
    {
      icon: <FaPalette className="text-4xl text-primary" />,
      title: 'UI/UX Design',
      description: 'Beautiful interfaces with intuitive user experiences'
    },
    {
      icon: <FaMobile className="text-4xl text-primary" />,
      title: 'Mobile Optimization',
      description: 'Flawless performance on all devices'
    },
    {
      icon: <FaRocket className="text-4xl text-primary" />,
      title: 'Performance',
      description: 'Lightning fast loading times and SEO optimization'
    }
  ]

  return (
    <Layout>
      <HeroSection 
        title="Build Modern Web Experiences"
        subtitle="High-performance applications with React, Next.js and Tailwind CSS"
        ctaText="Get Started"
        ctaLink="/contact"
      />

      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 dark:text-white">
            Our Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                icon={service.icon}
                title={service.title}
                description={service.description}
              />
            ))}
          </div>
        </div>
      </section>
    </Layout>
  )
}