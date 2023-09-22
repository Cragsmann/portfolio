import { useState } from 'react';
import { LogoGrid } from '../../components/LogoGrid';
import './index.scss';

function Skills() {
  const logos = [
    {
      logoSrc: 'src/assets/skills/html5.webp',
      tooltip: 'HTML5',
    },
    {
      logoSrc: 'src/assets/skills/css3.webp',
      tooltip: 'CSS3',
    },
    {
      logoSrc: 'src/assets/skills/sass.webp',
      tooltip: 'Sass',
    },
    {
      logoSrc: 'src/assets/skills/tailwind.webp',
      classname: 'small',
      tooltip: 'Tailwind CSS',
    },
    {
      logoSrc: 'src/assets/skills/js.webp',
      classname: 'small',
      tooltip: 'JavaScript',
    },
    {
      logoSrc: 'src/assets/skills/ts.webp',
      classname: 'small',
      tooltip: 'TypeScript',
    },
    {
      logoSrc: 'src/assets/skills/nodeJS.webp',
      classname: 'small',
      tooltip: 'Node.js',
    },
    {
      logoSrc: 'src/assets/skills/Jest.webp',
      classname: 'small',
      tooltip: 'Jest',
    },
    {
      logoSrc: 'src/assets/skills/react.webp',
      tooltip: 'React',
    },
    {
      logoSrc: 'src/assets/skills/reactQuery.webp',
      tooltip: 'TanStack Query',
    },
    {
      logoSrc: 'src/assets/skills/redux.webp',
      tooltip: 'Redux',
    },
    {
      logoSrc: 'src/assets/skills/redis.webp',
      classname: 'small',
      tooltip: 'Redis',
    },
    {
      logoSrc: 'src/assets/skills/git.webp',
      tooltip: 'Git',
    },
    {
      logoSrc: 'src/assets/skills/docker.webp',
      tooltip: 'Docker',
    },
    {
      logoSrc: 'src/assets/skills/gpt.webp',
      classname: 'small',
      tooltip: 'GPT',
    },
    {
      logoSrc: 'src/assets/images/RL_fill.svg',
      classname: 'small',
      tooltip: 'RobertLuby.stack',
    },
  ];

  const hardSkills = [
    'User-Centric Web Development',
    'JS Framework Expertise',
    'Dev Tools Proficiency',
    'Clean Code Advocate',
    'Modern Tech Stack',
    'Test Coding Skills',
    'Microservices',
  ];
  const softSkills = [
    'Excellent Team Collaboration',
    'Problem Solving Passion',
    'Remote Work Capability',
    'Attention to Details',
    'Adaptive Learning',
    'Great Enthusiasm',
    'Communication',
  ];

  const [skills, setSkills] = useState(hardSkills);
  const [skillsType, setSkillsType] = useState<Array<string>>(
    Array(hardSkills.length).fill('hard')
  );

  const handleClick = (index: number) => {
    const updatedSkills = [...skills];
    const updatedSkillsType = [...skillsType];

    if (updatedSkills[index] === hardSkills[index]) {
      updatedSkills[index] = softSkills[index];
      updatedSkillsType[index] = 'soft';
    } else {
      updatedSkills[index] = hardSkills[index];
      updatedSkillsType[index] = 'hard';
    }

    setSkills(updatedSkills);
    setSkillsType(updatedSkillsType);
  };

  return (
    <>
      <div className="skills-page">
        {<LogoGrid logos={logos} />}
        <div className="skills-container">
          <ul className="skills-list">
            {skills.map((skill, index) => (
              <li
                className={`skills-element ${
                  skillsType[index] === 'soft' ? 'soft-skills' : 'hard-skills'
                }`}
                onClick={() => handleClick(index)}
                key={index}
              >
                {skill}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default Skills;
