const Collections = () => {
    return (
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-indigo-600">MongoDB Collections</h1>
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">What are Collections?</h2>
          <p className="text-gray-700 mb-4">
            Collections in MongoDB are analogous to tables in relational databases. They can hold multiple JSON-like documents.
          </p>
          <ul className="list-disc list-inside text-gray-700">
            <li>Collections do not enforce a schema</li>
            <li>Documents within a collection can have different fields</li>
            <li>Typically, all documents in a collection have a similar or related purpose</li>
          </ul>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-semibold mb-4">Creating a Collection</h2>
          <p className="text-gray-700 mb-4">
            You can create a collection explicitly using the <code className="bg-gray-100 p-1 rounded">db.createCollection()</code> method:
          </p>
          <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto">
            {`db.createCollection("users")
  // Creates a new collection named "users"`}
          </pre>
        </div>
      </div>
    )
  }
  
  export default Collections
  
  