const CRUDOperations = () => {
    return (
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-indigo-600">MongoDB CRUD Operations</h1>
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">What are CRUD Operations?</h2>
          <p className="text-gray-700 mb-4">
            CRUD stands for Create, Read, Update, and Delete, which are the basic operations you can perform on a database.
          </p>
        </div>
  
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Examples of CRUD Operations</h2>
          <ul className="list-disc list-inside text-gray-700 mb-4">
            <li>
              <strong>Create:</strong> Insert a new document into a collection.
              <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto mt-2">
                {`db.users.insertOne({ name: "Alice", age: 25 })`}
              </pre>
            </li>
            <li>
              <strong>Read:</strong> Retrieve documents from a collection.
              <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto mt-2">
                {`db.users.find({ age: { $gte: 20 } })`}
              </pre>
            </li>
            <li>
              <strong>Update:</strong> Modify existing documents.
              <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto mt-2">
                {`db.users.updateOne({ name: "Alice" }, { $set: { age: 26 } })`}
              </pre>
            </li>
            <li>
              <strong>Delete:</strong> Remove documents from a collection.
              <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto mt-2">
                {`db.users.deleteOne({ name: "Alice" })`}
              </pre>
            </li>
          </ul>
        </div>
      </div>
    );
  };
  
  export default CRUDOperations;
  