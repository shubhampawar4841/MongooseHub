import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-8 text-center text-indigo-600">Welcome to MongoDB Learning</h1>
      <p className="text-xl mb-8 text-center text-gray-700">
        Explore the core concepts of MongoDB and master the art of working with document databases.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {['Collections', 'Documents', 'Queries', 'Indexes', 'Aggregation'].map((topic) => (
          <Link
            key={topic}
            to={`/${topic.toLowerCase()}`}
            className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300"
          >
            <h2 className="text-2xl font-semibold mb-4 text-indigo-600">{topic}</h2>
            <p className="text-gray-600">Learn about MongoDB {topic.toLowerCase()} and how to work with them effectively.</p>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Home

