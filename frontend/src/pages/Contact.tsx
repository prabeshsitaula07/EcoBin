import { useState } from "react";
import { motion } from "framer-motion";

const ContactSection = () => {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    alert("Message sent!");
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="min-h-screen flex items-center justify-center bg-[#f5faf6]"
    >
      <div className="bg-white rounded-2xl shadow max-w-xl w-full p-10">
        <h2 className="text-3xl font-bold text-center mb-2">Get in Touch</h2>
        <p className="text-center text-gray-700 mb-8">
          Have questions? We're here to help you get started with smart waste management.
        </p>
        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="flex gap-4">
            <div className="flex-1">
              <label className="block mb-1 font-medium">First Name</label>
              <input
                type="text"
                name="firstName"
                value={form.firstName}
                onChange={handleChange}
                placeholder="Example"
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#00A72C]"
                required
              />
            </div>
            <div className="flex-1">
              <label className="block mb-1 font-medium">Last Name</label>
              <input
                type="text"
                name="lastName"
                value={form.lastName}
                onChange={handleChange}
                placeholder="Sitaula"
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#00A72C]"
                required
              />
            </div>
          </div>
          <div>
            <label className="block mb-1 font-medium">Email Address</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="example@gmail.com"
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#00A72C]"
              required
            />
          </div>
          <div>
            <label className="block mb-1 font-medium">Subject</label>
            <input
              type="text"
              name="subject"
              value={form.subject}
              onChange={handleChange}
              placeholder="How can we help you?"
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#00A72C]"
              required
            />
          </div>
          <div>
            <label className="block mb-1 font-medium">Confirm password</label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Tell us about your waste management needs......"
              className="w-full border border-gray-300 rounded-md px-3 py-2 h-24 resize-none focus:outline-none focus:ring-2 focus:ring-[#00A72C]"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-[#00A72C] text-white py-3 rounded-lg text-lg font-semibold hover:bg-[#00A72C]/90 transition-colors"
          >
            Send Message
          </button>
        </form>
      </div>
    </motion.section>
  );
};

export default ContactSection;