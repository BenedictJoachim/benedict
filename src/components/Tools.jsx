// Skills.js
import { FaHtml5, FaCss3Alt, FaSass, FaBootstrap, FaGit, FaReact, FaJs } from 'react-icons/fa';
import { SiTailwindcss, SiChakraui, SiFramer, SiNextdotjs } from 'react-icons/si';
import { DiMaterializecss } from 'react-icons/di';

const skills = [
  { name: 'HTML5', icon: <FaHtml5 size={40} />, color: 'text-red-500' },
  { name: 'CSS3', icon: <FaCss3Alt size={40} />, color: 'text-blue-500' },
  { name: 'SCSS', icon: <FaSass size={40} />, color: 'text-pink-500' },
  { name: 'Bootstrap', icon: <FaBootstrap size={40} />, color: 'text-purple-600' },
  { name: 'Tailwind', icon: <SiTailwindcss size={40} />, color: 'text-teal-500' },
  { name: 'JavaScript', icon: <FaJs size={40} />, color: 'text-yellow-500' },
  { name: 'Git', icon: <FaGit size={40} />, color: 'text-orange-500' },
  { name: 'React', icon: <FaReact size={40} />, color: 'text-blue-400' },
  { name: 'Material UI', icon: <DiMaterializecss size={40} />, color: 'text-blue-500' },
  { name: 'Chakra UI', icon: <SiChakraui size={40} />, color: 'text-teal-500' },
  { name: 'Framer', icon: <SiFramer size={40} />, color: 'text-purple-500' },
  { name: 'Next.js', icon: <SiNextdotjs size={40} />, color: 'text-gray-800' }
];

const Skills = () => {
  return (
    <div className="max-w-7xl mx-auto my-16 p-8 bg-white">
      <h2 className="text-[#5800E3] text-4xl font-bold text-center mb-4">My Skills & Tools</h2>
      <p className="text-center text-gray-600 mb-8">Highly skilled at progressive enhancement, design systems & UI Engineering</p>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
        {skills.map(skill => (
          <div key={skill.name} className="flex flex-col items-center">
            <div className={`p-4 rounded-full ${skill.color}`}>
              {skill.icon}
            </div>
            <h3 className="mt-2 text-lg font-medium">{skill.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
