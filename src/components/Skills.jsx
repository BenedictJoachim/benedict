// Skills.js
import React from 'react';
import { motion } from 'framer-motion';

const skills = [
  { name: 'HTML', level: 90 },
  { name: 'CSS', level: 80 },
  { name: 'JavaScript', level: 85 },
  { name: 'React', level: 75 },
  { name: 'Tailwind CSS', level: 70 },
  { name: 'Chakra', level: 65 },
  { name: 'Material UI', level: 60 },
  { name: 'Framer Motion', level: 50 },
  { name: 'Next.js', level: 60 }
];

const skillVariants = {
  initial: { opacity: 0, width: 0 },
  animate: { opacity: 1, width: '100%' }
};

const Skills = () => {
  return (
    <div className="w-[400px] mx-auto my-4 p-8 bg-[#F4F1F8] shadow-md">
      <h2 className="text-3xl font-semibold text-center mb-8">My Skills</h2>
      <div className="space-y-4">
        {skills.map(skill => (
          <div key={skill.name} className="flex flex-col">
            <div className="flex justify-between items-center mb-1">
              <h3 className="text-xl font-medium">{skill.name}</h3>
              <span className="text-sm text-gray-500">{skill.level}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-4">
              <motion.div
                className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full"
                initial="initial"
                whileInView="animate"
                viewport={{ amount: 0.5 }}
                transition={{ duration: 1 }}
                style={{ width: `${skill.level}%` }}
                variants={skillVariants}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
