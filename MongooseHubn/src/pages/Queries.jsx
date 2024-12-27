const Queries = () => {
    return (
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-indigo-600">MongoDB Queries</h1>
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Basic Queries</h2>
          <p className="text-gray-700 mb-4">
            MongoDB provides a powerful query language for retrieving documents from collections.
          </p>
          <h3 className="text-xl font-semibold mb-2">Find All Documents</h3>
          <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto mb-4">
            {`db.users.find()`}
          </pre>
          <h3 className="text-xl font-semibold mb-2">Find Documents with a Specific Condition</h3>
          <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto">
            {`db.users.find({ age: { $gt: 25 } })`}
          </pre>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-semibold mb-4">Query Operators</h2>
          <p className="text-gray-700 mb-4">
            MongoDB supports various query operators for complex queries:
          </p>
          <ul className="list-disc list-inside text-gray-700">
            <li>Comparison: $eq, $ne, $gt, $lt, $gte, $lte</li>
            <li>Logical: $and, $or, $not, $nor</li>
            <li>Element: $exists, $type</li>
            <li>Array: $in, $nin, $all, $elemMatch</li>
          </ul>
        </div>
      </div>
    )
  }
  
  export default Queries
  
  