const Indexes = () => {
    return (
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-indigo-600">MongoDB Indexes</h1>
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">What are Indexes?</h2>
          <p className="text-gray-700 mb-4">
            Indexes in MongoDB are special data structures that store a small portion of the collection's data set in an easy-to-traverse form.
          </p>
          <ul className="list-disc list-inside text-gray-700">
            <li>Indexes improve the speed of search operations</li>
            <li>They allow MongoDB to efficiently resolve queries</li>
            <li>Indexes come with a performance cost for inserts, updates, and deletes</li>
          </ul>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-semibold mb-4">Creating an Index</h2>
          <p className="text-gray-700 mb-4">
            You can create an index on a field using the <code className="bg-gray-100 p-1 rounded">createIndex()</code> method:
          </p>
          <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto">
            {`db.users.createIndex({ email: 1 })
  // Creates an ascending index on the email field`}
          </pre>
        </div>
      </div>
    )
  }
  
  export default Indexes
  
  