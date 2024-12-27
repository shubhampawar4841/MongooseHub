const Indexes = () => {
  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-4xl font-bold mb-8 text-indigo-600">MongoDB Indexes</h1>
      
      {/* What are Indexes? */}
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
      
      {/* Types of Indexes */}
      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <h2 className="text-2xl font-semibold mb-4">Types of Indexes</h2>
        <ul className="list-disc list-inside text-gray-700 mb-4">
          <li><strong>Single Field Index:</strong> Indexes a single field for faster queries.</li>
          <li><strong>Compound Index:</strong> Combines multiple fields into one index for complex queries.</li>
          <li><strong>Text Index:</strong> Supports text search in string content.</li>
          <li><strong>Geospatial Index:</strong> Used for querying geospatial data.</li>
        </ul>
      </div>
      
      {/* Creating an Index */}
      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <h2 className="text-2xl font-semibold mb-4">Creating an Index</h2>
        <p className="text-gray-700 mb-4">
          You can create an index on a field using the <code className="bg-gray-100 p-1 rounded">createIndex()</code> method:
        </p>
        <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto">
          {`db.users.createIndex({ email: 1 })
// Creates an ascending index on the email field`}
        </pre>
      </div>
      
      {/* Compound Indexes */}
      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <h2 className="text-2xl font-semibold mb-4">Compound Indexes</h2>
        <p className="text-gray-700 mb-4">
          Compound indexes allow you to index multiple fields together. For example:
        </p>
        <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto">
          {`db.orders.createIndex({ userId: 1, orderDate: -1 })
// Creates a compound index on userId (ascending) and orderDate (descending)`}
        </pre>
        <p className="text-gray-700">
          Use compound indexes for queries that filter or sort by multiple fields.
        </p>
      </div>
      
      {/* Querying with Indexes */}
      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <h2 className="text-2xl font-semibold mb-4">Querying with Indexes</h2>
        <p className="text-gray-700 mb-4">
          MongoDB automatically uses indexes to optimize queries. You can use <code className="bg-gray-100 p-1 rounded">explain()</code> to see the query plan:
        </p>
        <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto">
          {`db.users.find({ email: "test@example.com" }).explain("executionStats")
// Shows whether the query used an index`}
        </pre>
      </div>
      
      {/* Best Practices */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-semibold mb-4">Best Practices for Indexes</h2>
        <ul className="list-disc list-inside text-gray-700">
          <li>Use indexes for fields that are frequently queried or sorted.</li>
          <li>Avoid creating too many indexes to reduce write operation overhead.</li>
          <li>Monitor index usage with <code>db.collection.stats()</code>.</li>
          <li>Regularly review and optimize indexes for changing query patterns.</li>
        </ul>
      </div>
    </div>
  );
};

export default Indexes;
