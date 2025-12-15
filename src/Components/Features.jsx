
const Features = () => {
  const features = [
    {
      title: "Web Development",
      desc: "Modern, fast and responsive websites using React & Tailwind.",
      link: "https://your-project-link-1.com",
    },
    {
      title: "Mobile Apps",
      desc: "High-performance mobile apps with clean UI & UX.",
      link: "https://your-project-link-2.com",
    },
    {
      title: "UI / UX Design",
      desc: "Beautiful and user-friendly interface designs.",
      link: "https://your-project-link-3.com",
    },
    {
      title: "Backend Development",
      desc: "Scalable APIs & secure backend solutions.",
      link: "https://your-project-link-4.com",
    },
  ];

  return (
    <section
      id="Features"
      className="px-6 md:px-24 py-24 bg-black text-white"
    >
      {/* Heading */}
      <div className="text-center mb-16">
        <h2 className="text-5xl md:text-6xl font-extrabold bg-clip-text text-transparent 
bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600">
          Features
        </h2>
        <p className="mt-4 text-gray-400 text-lg">
          What I offer to build powerful digital experiences
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 ">
        {features.map((item, index) => (
          <a
            key={index}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group block p-10 rounded-2xl border border-white/10 
            hover:border-purple-500 transition-all duration-300
            bg-gradient-to-br from-white/5 to-white/0
            hover:scale-[1.02]"
          >
            <h3 className="text-2xl font-extrabold bg-clip-text text-transparent 
bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600">
              {item.title}
            </h3>
            <p className="text-gray-400 text-lg">
              {item.desc}
            </p>

            <span className="inline-block mt-6 text-sm font-semibold text-pink-400 group-hover:translate-x-2 transition-transform">
              View Project →
            </span>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Features;
