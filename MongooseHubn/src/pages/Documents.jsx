const Documents = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-8 text-indigo-600">MongoDB Documents</h1>
      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <h2 className="text-2xl font-semibold mb-4">What are Documents?</h2>
        <p className="text-gray-700 mb-4">
          Documents in MongoDB are the basic unit of data. They are JSON-like structures that contain field-value pairs.
        </p>
        <ul className="list-disc list-inside text-gray-700">
          <li>Each document is stored in a collection.</li>
          <li>Documents are dynamic and schema-less, meaning fields can vary.</li>
          <li>They support nested objects and arrays.</li>
        </ul>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-semibold mb-4">Example of a Document</h2>
        <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto">
          {`{
  "_id": "605c72ef0c9d0f0017dfb841",
  "name": "John Doe",
  "age": 29,
  "email": "john.doe@example.com",
  "hobbies": ["reading", "gaming", "traveling"]
}`}
        </pre>
        <p className="text-gray-700 mt-4">
          In this example, the document represents a user's data, including their name, age, email, and hobbies.
        </p>
      </div>
    </div>
  );
};

export default Documents;
