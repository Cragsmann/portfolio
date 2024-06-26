import { useState } from 'react';
import { LogoGrid } from './components/LogoGrid';
import './SkillsPage.scss';

function Skills() {
  const logos = [
    {
      logoSrc: '/assets/skills/html5.webp',
      tooltip: 'HTML5',
    },
    {
      logoSrc: '/assets/skills/css3.webp',
      tooltip: 'CSS3',
    },
    {
      logoSrc: '/assets/skills/sass.webp',
      tooltip: 'Sass',
    },
    {
      logoSrc: '/assets/skills/tailwind.webp',
      classname: 'small',
      tooltip: 'Tailwind CSS',
    },
    {
      logoSrc: '/assets/skills/js.webp',
      classname: 'small',
      tooltip: 'JavaScript',
    },
    {
      logoSrc: '/assets/skills/ts.webp',
      classname: 'small',
      tooltip: 'TypeScript',
    },
    {
      logoSrc: '/assets/skills/stripe.png',
      classname: 'stripe-logo',
      tooltip: 'Stripe',
    },
    {
      logoSrc: '/assets/skills/jest.webp',
      classname: 'small',
      tooltip: 'Jest',
    },
    {
      logoSrc: '/assets/skills/react.webp',
      tooltip: 'React',
    },
    {
      logoSrc: '/assets/skills/reactQuery.webp',
      tooltip: 'TanStack Query',
    },
    {
      logoSrc: '/assets/skills/redux.webp',
      tooltip: 'Redux',
    },
    {
      logoSrc: '/assets/skills/mapbox.png',
      classname: 'small',
      tooltip: 'Mapbox',
    },
    {
      logoSrc: '/assets/skills/git.webp',
      tooltip: 'Git',
    },
    {
      logoSrc: '/assets/skills/docker.webp',
      tooltip: 'Docker',
    },
    {
      logoSrc: '/assets/skills/gpt.webp',
      classname: 'small',
      tooltip: 'GPT',
    },
    {
      logoSrc: '/assets/images/RL_Fill.svg',
      classname: 'small',
      tooltip: 'RobertLuby.stack',
    },
  ];

  const hardSkills = [
    'User-Centric Web Development',
    'React Framework Expertise',
    'Fine-Tuned CSS Styling',
    'Clean Code Advocate',
    'Modern Tech Stack',
    'Test Coding Skills',
    'Microfrontends',
  ];
  const softSkills = [
    'Excellent Team Collaboration',
    'Problem Solving Passion',
    'Emotional Intelligence',
    'Attention to Detail',
    'Adaptive Learning',
    'Positive Attitude',
    'Creative Mindset',
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
