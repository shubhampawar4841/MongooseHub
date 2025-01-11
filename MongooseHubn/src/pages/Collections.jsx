const Collections = () => {
  return (
    <div className="max-w-4xl mx-auto ">
      <h1 className="text-4xl font-bold mb-8 text-indigo-600">MongoDB Collections</h1>

      {/* What are Collections? */}
      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <h2 className="text-2xl font-semibold mb-4">What are Collections?</h2>
        <p className="text-gray-700 mb-4">
          Collections in MongoDB are analogous to tables in relational databases. They can hold multiple JSON-like documents, allowing for flexible and dynamic schema design.
        </p>
        <ul className="list-disc list-inside text-gray-700">
          <li>Collections do not enforce a strict schema, enabling flexibility in document structure.</li>
          <li>Documents within a collection can have different fields and data types.</li>
          <li>Typically, all documents in a collection have a similar or related purpose, such as storing user data or product details.</li>
        </ul>
        <p className="text-gray-700">
          For example, a "users" collection might store user profiles, while a "products" collection could store details about items in an inventory.
        </p>
      </div>

      {/* Creating a Collection */}
      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <h2 className="text-2xl font-semibold mb-4">Creating a Collection</h2>
        <p className="text-gray-700 mb-4">
          MongoDB collections are typically created automatically when you insert the first document into a non-existent collection. However, you can also create a collection explicitly using the <code className="bg-gray-100 p-1 rounded">db.createCollection()</code> method:
        </p>
        <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto">
          {`db.createCollection("users")
// Creates a new collection named "users"`}
        </pre>
        <p className="text-gray-700 mb-4">
          The <code>db.createCollection()</code> method allows you to specify options, such as validation rules or storage engine settings:
        </p>
        <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto">
          {`db.createCollection("users", {
validator: {
  $jsonSchema: {
    bsonType: "object",
    required: ["name", "email"],
    properties: {
      name: {
        bsonType: "string",
        description: "must be a string and is required"
      },
      email: {
        bsonType: "string",
        pattern: "^.+@.+\\..+$",
        description: "must be a valid email address and is required"
      }
    }
  }
}
})`}
        </pre>
      </div>

      {/* Dropping a Collection */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-semibold mb-4">Dropping a Collection</h2>
        <p className="text-gray-700 mb-4">
          If you no longer need a collection, you can drop it using the <code className="bg-gray-100 p-1 rounded">drop()</code> method:
        </p>
        <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto">
          {`db.users.drop()
// Drops the "users" collection`}
        </pre>
        <p className="text-gray-700">
          Use this method carefully, as it will permanently delete all documents in the collection.
        </p>
      </div>
    </div>
  );
};

export default Collections;
