const Aggregation = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-8 text-indigo-600">MongoDB Aggregation</h1>
      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <h2 className="text-2xl font-semibold mb-4">What is Aggregation?</h2>
        <p className="text-gray-700 mb-4">
          Aggregation operations process data records and return computed results. They allow you to transform and analyze data effectively.
        </p>
        <ul className="list-disc list-inside text-gray-700">
          <li>Group values from multiple documents</li>
          <li>Perform transformations on data</li>
          <li>Analyze data trends and patterns</li>
          <li>Support operations like filtering, grouping, sorting, projecting, and more</li>
        </ul>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <h2 className="text-2xl font-semibold mb-4">Key Stages in the Aggregation Pipeline</h2>
        <ul className="list-disc list-inside text-gray-700">
          <li>
            <strong>$match:</strong> Filters documents based on a condition (similar to SQL's WHERE clause).
          </li>
          <li>
            <strong>$group:</strong> Groups documents by a specified field and applies aggregate functions (e.g., sum, avg).
          </li>
          <li>
            <strong>$sort:</strong> Orders documents based on a specified field.
          </li>
          <li>
            <strong>$project:</strong> Reshapes each document by including, excluding, or computing new fields.
          </li>
          <li>
            <strong>$limit:</strong> Limits the number of documents in the output.
          </li>
          <li>
            <strong>$skip:</strong> Skips a specified number of documents.
          </li>
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
          This pipeline groups users by age, calculates the average number of interests for each age group, and sorts the results by age in ascending order.
        </p>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6 mt-8">
        <h2 className="text-2xl font-semibold mb-4">Benefits of Aggregation</h2>
        <ul className="list-disc list-inside text-gray-700">
          <li>Improves data analysis and reporting capabilities</li>
          <li>Supports real-time processing for large datasets</li>
          <li>Offers flexibility with various operators and stages</li>
          <li>Reduces the need for complex application-side processing</li>
        </ul>
      </div>
    </div>
  );
};

export default Aggregation;
