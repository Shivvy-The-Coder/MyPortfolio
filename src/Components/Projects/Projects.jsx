import React from 'react';
import Cards from '../Cards';
import Shopsy from '/Images/Shopsy.png';
import Dice from '/Images/DiceGame.png';
import BIT from '/Images/BIT.png';

const ProjectList = [
  {
    id: 1,
    name: 'Dice Game',
    image: Dice,
    link: '#',
    desc: 'A simple but quite engaging and fun game of Dices where you can score all you want unlimitedly',
  },
  {
    id: 2,
    name: 'Git',
    image: Shopsy,
    link: '#',
    desc: 'Online Shopping Website build properly on tailwind CSs and ',
  },
  {
    id: 3,
    name: 'Git-Hub',
    image: BIT,
    link: '#',
    desc: 'GitHub is a cloud-based platform for hosting Git repositories, offering collaboration, issue tracking, CI/CD integration, and open-source project hosting, simplifying teamwork and code sharing for developers.',
  },
];

const Projects = () => {
  return (
    <div>
      <div>
        {/* Intro Section */}
        <div className="text-white font-Poppin text-center max-w-[90%] mx-auto mt-20">
          <div>
            <p data-aos="fade-up" className="text-yellow-500">
              Making an Impact with Every Project
            </p>
          </div>
          <div>
            <h1
              data-aos="fade-up"
              className="text-3xl font-bold"
              style={{ textShadow: '1px 1px 8px  rgba(60, 61, 61, 0.863)' }}
            >
              PROJECT'S SECTION
            </h1>
          </div>
          <div>
            <p data-aos="fade-up" className="text-yellow-500">
              Dedicated to creating projects that leave a lasting positive impression.
            </p>
          </div>
        </div>

        {/* Main Projects Section */}
        <div>
          {ProjectList.map((data) => (
            <div key={data.id} className="max-w-[70%] mx-auto max-h-[90vh]">
              <Cards
                customClass="!transition-transform !hover:translate-x-2 !hover:translate-y-2 !hover:scale-100"
                customeimg="sm:w-[70%] w-[100%] sm:p-[10] p-[1]"
                name={data.name}
                img={data.image}
                desc={data.desc}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
