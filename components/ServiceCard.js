export default function ServiceCard({ icon, title, description }) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
      <div className="p-6">
        <div className="flex justify-center mb-4">
          {icon}
        </div>
        <h3 className="text-xl font-bold text-center mb-2 dark:text-white">
          {title}
        </h3>
        <p className="text-gray-600 dark:text-gray-300 text-center">
          {description}
        </p>
      </div>
      <div className="px-6 pb-4 text-center">
        <button className="text-primary dark:text-primary-light font-medium hover:underline">
          Learn more →
        </button>
      </div>
    </div>
  )
}