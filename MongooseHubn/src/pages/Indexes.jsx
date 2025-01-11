const Indexes = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-8 text-indigo-600">MongoDB Indexes</h1>

      {/* What are Indexes? */}
      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <h2 className="text-2xl font-semibold mb-4">What are Indexes?</h2>
        <p className="text-gray-700 mb-4">
          Indexes in MongoDB are special data structures that store a small portion of the collection's data set in an easy-to-traverse form. They play a crucial role in optimizing query performance by reducing the amount of data MongoDB needs to scan.
        </p>
        <ul className="list-disc list-inside text-gray-700">
          <li>Indexes improve the speed of search operations by allowing MongoDB to quickly locate data without scanning the entire collection.</li>
          <li>Indexes are essential for optimizing complex queries and aggregations.</li>
          <li>Indexes come with a performance cost for write operations (inserts, updates, deletes) as they need to maintain the index structure.</li>
        </ul>
        <p className="text-gray-700">
          Without indexes, MongoDB performs a collection scan, meaning it scans every document in the collection to select the documents that match the query.
        </p>
      </div>

      {/* Creating an Index */}
      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <h2 className="text-2xl font-semibold mb-4">Creating an Index</h2>
        <p className="text-gray-700 mb-4">
          You can create an index on a field using the <code className="bg-gray-100 p-1 rounded">createIndex()</code> method. Here's an example:
        </p>
        <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto">
          {`db.users.createIndex({ email: 1 })
// Creates an ascending index on the email field`}
        </pre>
        <p className="text-gray-700 mb-4">
          The value <code>1</code> specifies an ascending index. You can use <code>-1</code> for a descending index.
        </p>
      </div>

      {/* Types of Indexes */}
      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <h2 className="text-2xl font-semibold mb-4">Types of Indexes</h2>
        <ul className="list-disc list-inside text-gray-700 mb-4">
          <li>
            <strong>Single Field Index:</strong> Indexes a single field in ascending (<code>1</code>) or descending (<code>-1</code>) order.
            <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto">
              {`db.collection.createIndex({ field: 1 })`}
            </pre>
          </li>
          <li>
            <strong>Compound Index:</strong> Indexes multiple fields to support queries on multiple fields.
            <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto">
              {`db.collection.createIndex({ field1: 1, field2: -1 })`}
            </pre>
          </li>
          <li>
            <strong>Text Index:</strong> Used for text search.
            <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto">
              {`db.collection.createIndex({ field: "text" })`}
            </pre>
          </li>
          <li>
            <strong>Geospatial Index:</strong> Supports geospatial queries.
            <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto">
              {`db.collection.createIndex({ location: "2dsphere" })`}
            </pre>
          </li>
          <li>
            <strong>Unique Index:</strong> Ensures all indexed values are unique.
            <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto">
              {`db.collection.createIndex({ field: 1 }, { unique: true })`}
            </pre>
          </li>
        </ul>
      </div>

      {/* Viewing and Dropping Indexes */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-semibold mb-4">Viewing and Dropping Indexes</h2>
        <p className="text-gray-700 mb-4">
          To view the indexes on a collection, use the <code className="bg-gray-100 p-1 rounded">getIndexes()</code> method:
        </p>
        <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto">
          {`db.collection.getIndexes()`}
        </pre>
        <p className="text-gray-700 mb-4">
          To drop a specific index, use the <code className="bg-gray-100 p-1 rounded">dropIndex()</code> method:
        </p>
        <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto">
          {`db.collection.dropIndex("index_name")`}
        </pre>
        <p className="text-gray-700">
          To drop all indexes on a collection, use:
        </p>
        <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto">
          {`db.collection.dropIndexes()`}
        </pre>
      </div>
    </div>
  );
};

export default Indexes;
