import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <section className="about bg-gray-900 text-gray-100 py-12 px-6 sm:px-16 lg:px-16 space-y-16">
      {/* Introduction Section */}
      <motion.div
        className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg shadow-2xl p-0 sm:p-12 "
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <div className="flex flex-col lg:flex-row items-center space-y-8 lg:space-y-0 lg:space-x-8">
          {/* Profile Image */}
          <motion.img
            src="/anime char.JPG"
            alt="Rohan Garad"
            className="w-40 h-40 sm:w-48 sm:h-48 lg:w-56 lg:h-56 rounded-full shadow-lg border-4 border-gradient-to-r from-blue-500 to-purple-600"
            whileHover={{ scale: 1.05 }}
          />
          {/* Introduction Text */}
          <div className="text-center lg:text-left space-y-6">
            <h2 className="text-4xl sm:text-5xl font-extrabold text-blue-300 tracking-wide uppercase">
              About Me
            </h2>
            <p className="text-lg sm:text-xl leading-relaxed text-gray-300">
              I am a <span className="text-blue-400 font-semibold">Computer Science Engineering student</span> at MITCORER, passionate about using technology to build impactful solutions. With a relentless curiosity and a drive for innovation, I specialize in <span className="text-blue-400 font-semibold">web development</span>, exploring the possibilities of <span className="text-blue-400 font-semibold">Machine Learning</span> and <span className="text-blue-400 font-semibold">Data Analytics</span>.
            </p>
            
            <motion.div
              className="inline-block"
              whileHover={{ scale: 1.1 }}
            >
              <Link
                to="/portfolio"  // Use `to` prop for navigation in React Router
                className="bg-gradient-to-r from-blue-500 to-purple-600 px-6 py-3 text-white font-semibold rounded-lg shadow-lg hover:from-blue-400 hover:to-purple-500 transform hover:scale-105 transition duration-300"
              >
                Explore My Work
              </Link>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Animated What I'm Doing Section */}
      <motion.div
        className="space-y-12"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 1 }}
        viewport={{ once: true }}
      >
        <h3 className="text-4xl sm:text-5xl font-extrabold text-center text-blue-300 uppercase tracking-wide">
          What I&apos;m Doing
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {activities.map((activity, index) => (
            <motion.div
              key={index}
              className={`relative bg-gradient-to-r ${activity.gradient} rounded-lg p-4 flex flex-col items-center space-y-4 text-center shadow-lg`}
              whileHover={{ scale: 1.05, rotate: 0 }}
              transition={{ duration: 0.5 }}
            >
              <motion.img
                src={activity.icon}
                alt={activity.title}
                className="w-16 h-16"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 1 }}
              />
              <h4 className="text-xl sm:text-2xl font-semibold text-white">
                {activity.title}
              </h4>
              <p className="text-gray-200">{activity.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

const activities = [
  {
    title: "Computer Engineering",
    description:
      "Pursuing Computer Engineering with a focus on cutting-edge technologies and practical applications.",
    gradient: "from-blue-600 to-indigo-700",
    icon: "/computer.png",
  },
  {
    title: "Web Development",
    description:
      "Building high-quality web applications with modern technologies and frameworks.",
    gradient: "from-teal-500 to-cyan-600",
    icon: "/code.png",
  },
  {
    title: "Learning DSA",
    description:
      "Enhancing algorithmic thinking and problem-solving with Data Structures and Algorithms.",
    gradient: "from-orange-400 to-yellow-500",
    icon: "/dsa.png",
  },
  {
    title: "Communication Skills",
    description:
      "Developing excellent communication skills to collaborate effectively with clients and teams.",
    gradient: "from-purple-600 to-pink-600",
    icon: "/communication.png",
  },
];

export default About;
