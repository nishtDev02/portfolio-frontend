import React, { useState } from "react";
import { toast } from "react-toastify";
import emailjs from "@emailjs/browser";
import axios from "axios";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  // const [success, setSuccess] = useState("")

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

 const handleSubmit = async (e) => {
  e.preventDefault();

  if (!formData.name || !formData.email || !formData.message) {
    toast.error("Please fill all fields ❌");
    return;
  }

  setLoading(true);

  try {
    //  MongoDB
    await axios.post(
      "https://portfolio-backend-y3b3.onrender.com/api/contacts",
      formData,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    // EmailJS
    try {
      await emailjs.send(
        import.meta.env.VITE_EMAIL_SERVICE_ID,
        import.meta.env.VITE_EMAIL_TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        import.meta.env.VITE_EMAIL_PUBLIC_KEY
      );
    } catch (emailError) {
      console.warn("Email failed but DB saved ✅", emailError);
    }

    toast.success("Message sent successfully 😊");

    setFormData({ name: "", email: "", message: "" });

  } catch (error) {
    console.error(error);
    toast.error("Failed to send message ❌");
  } finally {
    setLoading(false);
  }
};

  return (
    <section className="min-h-screen bg-black text-white px-4 py-20">
      <div className="max-w-4xl mx-auto">
        {/* heading */}
        <h2 className="text-4xl font-heading font-bold mb-6">Contact Me</h2>

        <p className="text-gray-400 mb-6 max-w-xl">
          Have a project idea, collaboration, or just want to say Hi? Fill out
          the form below and I'll get back to you.
        </p>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="bg-gray-900 border border-gray-800 rounded-xl p-8"
        >
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="bg-black border border-gray-700 rounded-lg px-4 py-3
              focus:outline-none focus:border-purple-500"
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="bg-black border border-gray-700 rounded-lg px-4 py-3
              focus:outline-none focus:border-purple-500"
              pattern="[^@\s]+@[^@\s]+\.[^@\s]+"
              title="Please enter a valid email address"
            />
          </div>

          <textarea
            name="message"
            placeholder="Your Message"
            rows={5}
            value={formData.message}
            onChange={handleChange}
            required
            className="w-full bg-black border border-gray-700 rounded-lg px-4 py-3
            focus:outline-none focus:border-purple-500 mb-6"
          ></textarea>

          <button
            type="submit"
            disabled={loading}
            className={`px-6 py-3 rounded-full font-medium
            bg-gradient-to-r from-purple-500 to-indigo-500
            transition 
            ${loading ? "opacity-50 cursor-not-allowed" : "hover:scale-105"}`}
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>

        {/* {success && (
          <p className="mt-4 text-lg text-gray-400 font-medium">
            {success}
          </p>
        )} */}
      </div>
    </section>
  );
};

export default Contact;
