import React, { useState } from "react";

const ContactCTA = () => {
  const [name, setName] = useState("");
  const [purpose, setPurpose] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
  e.preventDefault();

  const limit = 30;
  const now = Date.now();
  const stored = JSON.parse(localStorage.getItem("contactLimit")) || {
    count: 0,
    time: now,
  };

  if (now - stored.time > 24 * 60 * 60 * 1000) {
    stored.count = 0;
    stored.time = now;
  }

  if (stored.count >= limit) {
    alert("You have reached the daily message limit (30 messages). Try again after 24 hours.");
    return;
  }

  stored.count += 1;
  localStorage.setItem("contactLimit", JSON.stringify(stored));

  const subject = encodeURIComponent(purpose);
  const body = encodeURIComponent(
    `Name: ${name}\nPurpose: ${purpose}\n\nMessage:\n${message}`
  );

  // ✅ CLEAR FORM CONTENT
  setName("");
  setPurpose("");
  setMessage("");

  // ✅ OPEN MAIL CLIENT
  window.location.href = `mailto:dhananjaykashodhan60@gmail.com?subject=${subject}&body=${body}`;
};

  return (
    <section
      id="contact"
      className="px-6 md:px-16 py-24 bg-black text-white flex justify-center"
    >
      <div className="max-w-3xl w-full">
        {/* Heading */}
        <h2 className="text-5xl md:text-6xl font-extrabold text-center mb-12
        bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-blue-400">
          Contact Me
        </h2>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="space-y-6 p-10 rounded-2xl border border-white/10 
          bg-gradient-to-br from-white/5 to-white/0"
        >
          {/* Name */}
          <input
            type="text"
            placeholder="Your Name"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full bg-black text-white px-5 py-4 rounded-xl 
            border border-white/10 focus:outline-none focus:border-purple-500"
          />

          {/* Purpose */}
          <input
            type="text"
            placeholder="Purpose"
            required
            value={purpose}
            onChange={(e) => setPurpose(e.target.value)}
            className="w-full bg-black text-white px-5 py-4 rounded-xl 
            border border-white/10 focus:outline-none focus:border-purple-500"
          />

          {/* Message */}
          <textarea
            placeholder="Your Message"
            rows="5"
            required
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full bg-black text-white px-5 py-4 rounded-xl 
            border border-white/10 focus:outline-none focus:border-purple-500 resize-none"
          ></textarea>

          {/* Button */}
          <button
            type="submit"
            className="w-full py-4 rounded-full font-bold text-black
            bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500
            hover:opacity-90 transition-all duration-300"
          >
            Send Message
          </button>
        </form>
        
      </div>
    </section>
  );
};

export default ContactCTA;
