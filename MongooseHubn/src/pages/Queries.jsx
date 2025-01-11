const Queries = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-8 text-indigo-600">MongoDB Queries</h1>
      
      {/* Basic Queries Section */}
      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <h2 className="text-2xl font-semibold mb-4">Basic Queries</h2>
        <p className="text-gray-700 mb-4">
          MongoDB provides a powerful query language for retrieving documents from collections.
        </p>

        {/* Find All Documents */}
        <h3 className="text-xl font-semibold mb-2">Find All Documents</h3>
        <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto mb-4">
          {`db.users.find()`}
        </pre>

        {/* Find Documents with a Specific Condition */}
        <h3 className="text-xl font-semibold mb-2">Find Documents with a Specific Condition</h3>
        <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto mb-4">
          {`db.users.find({ age: { $gt: 25 } })`}
        </pre>

        {/* Find Specific Fields */}
        <h3 className="text-xl font-semibold mb-2">Find Specific Fields</h3>
        <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto mb-4">
          {`db.users.find({}, { name: 1, age: 1, _id: 0 })`}
        </pre>

        {/* Sort Documents */}
        <h3 className="text-xl font-semibold mb-2">Sort Documents</h3>
        <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto mb-4">
          {`db.users.find().sort({ age: -1 })`}
        </pre>

        {/* Limit Documents */}
        <h3 className="text-xl font-semibold mb-2">Limit Documents</h3>
        <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto">
          {`db.users.find().limit(5)`}
        </pre>
      </div>

      {/* Query Operators Section */}
      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <h2 className="text-2xl font-semibold mb-4">Query Operators</h2>
        <p className="text-gray-700 mb-4">
          MongoDB supports various query operators for complex queries:
        </p>

        {/* Comparison Operators */}
        <h3 className="text-xl font-semibold mb-2">Comparison Operators</h3>
        <ul className="list-disc list-inside text-gray-700 mb-4">
          <li><strong>$eq:</strong> Matches values that are equal to a specified value.</li>
          <li><strong>$ne:</strong> Matches values that are not equal to a specified value.</li>
          <li><strong>$gt:</strong> Matches values greater than a specified value.</li>
          <li><strong>$gte:</strong> Matches values greater than or equal to a specified value.</li>
          <li><strong>$lt:</strong> Matches values less than a specified value.</li>
          <li><strong>$lte:</strong> Matches values less than or equal to a specified value.</li>
        </ul>
        <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto mb-4">
          {`db.products.find({ price: { $gte: 100, $lte: 500 } })`}
        </pre>

        {/* Logical Operators */}
        <h3 className="text-xl font-semibold mb-2">Logical Operators</h3>
        <ul className="list-disc list-inside text-gray-700 mb-4">
          <li><strong>$and:</strong> Joins query clauses with a logical AND.</li>
          <li><strong>$or:</strong> Joins query clauses with a logical OR.</li>
          <li><strong>$not:</strong> Inverts the effect of a query expression.</li>
          <li><strong>$nor:</strong> Joins query clauses with a logical NOR.</li>
        </ul>
        <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto mb-4">
          {`db.users.find({ $and: [{ age: { $gt: 25 } }, { isActive: true }] })`}
        </pre>

        {/* Array Operators */}
        <h3 className="text-xl font-semibold mb-2">Array Operators</h3>
        <ul className="list-disc list-inside text-gray-700 mb-4">
          <li><strong>$in:</strong> Matches any value in the specified array.</li>
          <li><strong>$nin:</strong> Matches none of the values in the specified array.</li>
          <li><strong>$all:</strong> Matches arrays containing all the specified elements.</li>
          <li><strong>$elemMatch:</strong> Matches documents containing an array that satisfies the specified conditions.</li>
        </ul>
        <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto mb-4">
          {`db.orders.find({ items: { $all: ["pen", "notebook"] } })`}
        </pre>

        {/* Element Operators */}
        <h3 className="text-xl font-semibold mb-2">Element Operators</h3>
        <ul className="list-disc list-inside text-gray-700 mb-4">
          <li><strong>$exists:</strong> Matches documents with the specified field.</li>
          <li><strong>$type:</strong> Matches documents where the field is of a specified type.</li>
        </ul>
        <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto">
          {`db.users.find({ email: { $exists: true } })`}
        </pre>
      </div>

      {/* Advanced Queries Section */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-semibold mb-4">Advanced Queries</h2>

        {/* Regex Queries */}
        <h3 className="text-xl font-semibold mb-2">Regex Queries</h3>
        <p className="text-gray-700 mb-4">
          Use regular expressions to match patterns in strings.
        </p>
        <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto mb-4">
          {`db.users.find({ name: { $regex: /^A/, $options: "i" } })`}
        </pre>

        {/* Aggregation with Queries */}
        <h3 className="text-xl font-semibold mb-2">Aggregation with Queries</h3>
        <p className="text-gray-700 mb-4">
          Combine queries with aggregation pipelines for advanced data analysis.
        </p>
        <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto">
          {`db.sales.aggregate([
  { $match: { region: "North" } },
  { $group: { _id: "$category", total: { $sum: "$amount" } } }
])`}
        </pre>
      </div>
    </div>
  );
};

export default Queries;
