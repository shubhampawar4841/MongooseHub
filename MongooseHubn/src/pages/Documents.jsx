const Documents = () => {
    return (
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-indigo-600">MongoDB Documents</h1>
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">What are Documents?</h2>
          <p className="text-gray-700 mb-4">
            Documents are the basic unit of data in MongoDB. They are analogous to rows in relational databases but are more flexible.
          </p>
          <ul className="list-disc list-inside text-gray-700">
            <li>Documents are stored in BSON (Binary JSON) format</li>
            <li>Each document can have a different structure</li>
            <li>Documents contain field-value pairs</li>
          </ul>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-semibold mb-4">Document Example</h2>
          <p className="text-gray-700 mb-4">
            Here's an example of a document representing a user:
          </p>
          <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto">
            {`{
    "_id": ObjectId("5f8d0f2c9d3b2a1d9c1c1c1c"),
    "name": "John Doe",
    "email": "john@example.com",
    "age": 30,
    "address": {
      "street": "123 Main St",
      "city": "Anytown",
      "country": "USA"
    },
    "interests": ["reading", "cycling", "photography"]
  }`}
          </pre>
        </div>
      </div>
    )
  }
  
  export default Documents
  
  