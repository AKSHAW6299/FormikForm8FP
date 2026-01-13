import React, { useState } from "react";

const SimpleForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [submittedData, setSubmittedData] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (name.trim() === "" && email.trim() === "" && address.trim() === "") return;

    const newEntry = { name, email, address };
    setSubmittedData((prev) => [...prev, newEntry]);

    setName("");
    setEmail("");
    setAddress("");
  };

  return (
    <>
      <div className="max-w-full mx-auto mt-10 p-4 border rounded shadow">
        <h2 className="text-xl font-bold mb-4">Simple Form</h2>

        <form
          className="flex flex-col sm:flex-row sm:items-end sm:gap-4 gap-4"
          onSubmit={handleSubmit}
        >
          <div className="flex flex-col flex-1">
            <label htmlFor="name" className="mb-1">Name:</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="border px-2 py-1 rounded w-full"
            />
          </div>

          <div className="flex flex-col flex-1">
            <label htmlFor="email" className="mb-1">Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="border px-2 py-1 rounded w-full"
            />
          </div>

          <div className="flex flex-col flex-1">
            <label htmlFor="address" className="mb-1">Address:</label>
            <input
              type="text"
              id="address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className="border px-2 py-1 rounded w-full"
            />
          </div>

          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 mt-2 sm:mt-0"
          >
            Submit
          </button>
        </form>
      </div>

      {/* Responsive grid for multiple cards */}
      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-7xl mx-auto">
        {submittedData.map((data, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-lg p-5 border border-gray-200"
          >
            <h3 className="text-lg font-semibold mb-3">Submission {index + 1}</h3>
            <div className="space-y-2">
              <div>
                <span className="font-medium">Name: </span>
                <span>{data.name}</span>
              </div>
              <div>
                <span className="font-medium">Email: </span>
                <span>{data.email}</span>
              </div>
              <div>
                <span className="font-medium">Address: </span>
                <span>{data.address}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default SimpleForm;
