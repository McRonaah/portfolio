import React from 'react';

const skillsData = [
    { title: 'HTML', percentage: 90 },
    { title: 'CSS', percentage: 80 },
    { title: 'JS', percentage: 65 },
    { title: 'TypeScript', percentage: 75 },
    { title: 'Ruby', percentage: 70 },
    { title: 'Git and GitHub', percentage: 85 },
    { title: 'SQL', percentage: 60 },
    { title: 'React', percentage: 95 },
    { title: 'TypeScript', percentage: 75 },
    { title: 'Software Testing', percentage: 75 },
  ];

const Skills = () => {
  return (
    <div className="m-10">
      <h2 className="text-3xl font-semibold mb-2 text-center">What's in the Basket</h2>
      <div>
      <h4 className="text-lg mb-2">Tech Skills</h4>
        <div className="grid grid-cols-3 gap-4">
          {skillsData.map((skill, index) => (
            <div key={index} className="p-4">
              <div className="flex justify-between items-center mb-2">
                <span className="text-lg font-semibold">{skill.title}</span>
                <span className="text-right font-semibold">{skill.percentage}%</span>
              </div>
              <div className="bg-gray-300 h-2 rounded relative">
                <div
                  className="bg-green-700 h-full absolute"
                  style={{ width: `${skill.percentage}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div>
        <h3 className="text-lg mb-2">Soft Skills</h3>
        <ul className="grid grid-cols-2 gap-4 mx-auto w-3/4 list-disc list-inside">
          {['Leadership', 'Time Management','Problem Solving','Collaboration', 'Creativity', 'Adaptability', 'Work Ethic'].map((skill, index) => (
            <li key={index} className="">
              <span className="text-lg font-semibold">{skill}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Skills;
