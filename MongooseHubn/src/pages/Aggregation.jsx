const Aggregation = () => {
    return (
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-indigo-600">MongoDB Aggregation</h1>
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">What is Aggregation?</h2>
          <p className="text-gray-700 mb-4">
            Aggregation operations process data records and return computed results. They allow you to perform complex operations on collections.
          </p>
          <ul className="list-disc list-inside text-gray-700">
            <li>Group values from multiple documents</li>
            <li>Perform operations on grouped data to return a single result</li>
            <li>Analyze data changes over time</li>
          </ul>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-semibold mb-4">Aggregation Pipeline Example</h2>
          <p className="text-gray-700 mb-4">
            Here's an example of an aggregation pipeline that groups users by age and calculates the average number of interests:
  
          </p>
          <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto">
            {`db.users.aggregate([
    {
      $group: {
        _id: "$age",
        avgInterests: { $avg: { $size: "$interests" } }
      }
    },
    {
      $sort: { _id: 1 }
    }
  ])`}
          </pre>
          <p className="text-gray-700 mt-4">
            This pipeline groups users by age, calculates the average number of interests for each age group, and then sorts the results by age in ascending order.
          </p>
        </div>
      </div>
    )
  }
  
  export default Aggregation
  
  