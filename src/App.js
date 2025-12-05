import React from "react";
import { Formik, Form, Field } from "formik";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Post() {
  const initialValues = {
    title: "",
    body: "",
    userId: "",
  };

  const handleSubmit = async (values, { resetForm }) => {
    const { title, body, userId } = values;
    const payload = { title, body, userId };

    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await response.json();
      console.log("API Response:", data);

      toast.success("Data created successfully!", {
        position: "top-right",
        autoClose: 2500,
      });

      resetForm();
    } catch (error) {
      console.error("Error:", error);

      toast.error("Error posting data!", {
        position: "top-right",
        autoClose: 2500,
      });
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-4">
      <ToastContainer />
      <h2 className="text-lg font-bold mb-4">POST API Form</h2>

      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form className="space-y-3">
          <Field
            name="title"
            placeholder="Title"
            className="border p-2 rounded w-full"
          />
          <Field
            name="body"
            placeholder="Body"
            className="border p-2 rounded w-full"
          />
          <Field
            name="userId"
            placeholder="User ID"
            className="border p-2 rounded w-full"
          />

          <button
            type="submit"
            className="bg-blue-600 text-white p-2 rounded w-full"
          >
            Submit
          </button>

        </Form>
      </Formik>
    </div>
  );
}

export default Post;
