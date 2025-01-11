const Transactions = () => {
    return (
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-indigo-600">MongoDB Transactions</h1>
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">What are Transactions?</h2>
          <p className="text-gray-700 mb-4">
            Transactions in MongoDB allow you to execute multiple operations on multiple documents and collections as a single unit. They ensure ACID compliance.
          </p>
          <ul className="list-disc list-inside text-gray-700">
            <li>Useful for complex, multi-document operations.</li>
            <li>Available for replica sets and sharded clusters.</li>
            <li>Ensure data consistency in critical operations.</li>
          </ul>
        </div>
  
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-semibold mb-4">Example of a Transaction</h2>
          <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto">
            {`const session = db.getMongo().startSession();
  
  session.startTransaction();
  
  try {
    db.accounts.updateOne({ _id: 1 }, { $inc: { balance: -100 } }, { session });
    db.accounts.updateOne({ _id: 2 }, { $inc: { balance: 100 } }, { session });
    session.commitTransaction();
  } catch (error) {
    session.abortTransaction();
    throw error;
  } finally {
    session.endSession();
  }`}
          </pre>
          <p className="text-gray-700 mt-4">
            This example transfers $100 from one account to another as a single atomic operation.
          </p>
        </div>
      </div>
    );
  };
  
  export default Transactions;
  