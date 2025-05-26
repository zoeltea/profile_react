// src/components/Portfolio.js
import React from 'react';
import imgBukalapak from './assets/bukalapak.png';
import imgvidio from './assets/vidio.png';
import imgBbm from './assets/bbm.png';
import imgWirecard from './assets/wirecard.png';
import imgAprisma from './assets/aprisma.png'

const Portfolio = () => {
  const companies = [
    {
      title: 'Bukalapak: Software Engineer',
      start_date: 'Oct, 2023',
      end_date: 'Dec, 2024',
      descriptions: [
        'Developed and maintained a dynamic service fee feature across web (desktop, mobile), Android, iOS, and Mitra platforms, directly contributing to Bukalapak revenue',
        'Developed cashback system for Lapakgaming payments, enabling users to utilize cashback as a mixed payment option',
        'Significantly improved Lapakgaming reseller system performance, reducing product retrieval time from 40 seconds to 5 seconds by optimizing data processing logic',
        'Successfully implemented changes to Kafka messages within the Buka 2.0 framework, ensuring seamless data flow'
      ],
      technologies: ['Golang', 'Ruby', 'php', 'Kafka', 'MySql', 'microservices', 'opensearch','Redis','React',],
      image: imgBukalapak, // Placeholder image
    },
    {
      title: 'Bukalapak: Test Engineer',
      start_date: 'Jun, 2020',
      end_date: 'Apr, 2024',
      descriptions: [
        'Developed and implemented internal software for automated test case generation and regression reporting, significantly improving efficiency for multiple teams by streamlining testing workflows.',
        'Improved test automation execution speed and maintained/refactored flaky automation tests across iOS, Android, and Mitra applications, ensuring test suite reliability.',
        'Successfully onboarded Software Engineers to automation frameworks, creating comprehensive guidelines and documentation, thereby empowering teams for self-testing and accelerating product delivery.',
        'Created a dashboard to visualize API automation test progress for various services, providing key stakeholders with real-time insights into quality efforts.',
        'Converted numerous manual test cases to API automation tests for Bukalapak services, enhancing test coverage and efficiency',
        'Executed complex collaboration tests for inter-product functionalities, ensuring seamless integration',
        'Configured and utilized CI/CD pipelines via Jenkins and GitLab to integrate automation tests into development workflows',
      ],
      technologies: ['Appium','espresso', 'selenium','jest', 'Java', 'Ruby', 'Typescript','Gherkin'],
      image: imgBukalapak, // Placeholder image
      liveLink: '#',
      githubLink: '#',
    },
    {
      title: 'vidio.com: Test Engineer',
      start_date: 'Mar, 2019',
      end_date: 'Jun, 2020',
      descriptions: [
        'Responsible for delivering high-quality products to users, with a primary focus on playback Livestreaming and Video On Demand (VOD)',
        'Developed automation tests using Robot Framework for iOS, Android, and web platforms, maintaining test suite integrity',
        'Ensured the stability and reliability of automation test suites ("make sure the automation test green")',
        'Served as Person In Charge (PIC) for specific testing groups, coordinating efforts and reporting build releases to other teams',
        'Developed custom library tests for Robot Framework with Python',
        'Reported and retested bugs within the tracking tool and maintained automation tests based on feature product changes',
      ],
      technologies: ['Robot Framework', 'Appium', 'Pyhton', 'Selenium','Jenkins'],
      image: imgvidio, // Placeholder image
      liveLink: '#',
      githubLink: '#',
    },
    ,
    {
      title: 'Blackberry Messanger(BBM): Senior Software Development Engineer Test',
      start_date: 'Jul, 2018',
      end_date: 'May, 2020',
      descriptions: [
        'Created and updated automation tests and test cases for the application',
        'Configured Jenkins for Continuous Integration (CI) to ensure automated tests ran consistently',
        'Collaborated through pair programming to enhance testing efficiency.',
        'Utilized Appium with Robot Frameworkfor mobile automation testing',

      ],
      technologies: ['Robot Framework','Appium', 'Pyhton', 'Jenkins'],
      image: imgBbm, // Placeholder image
      liveLink: '#',
      githubLink: '#',
    },
    ,
    {
      title: 'Wirecard Indonesia: Quality Assurance Engineer',
      start_date: 'Nov, 2015',
      end_date: 'Jun, 2018',
      descriptions: [
        'Mentoring and trainer QA Manual become QA Engineer',
        'Collaborated closely with software developers and project support teams to ensure product quality',
        'Identified business requirements and monitored application and software systems for issues.',
        'Created detailed specification Test Cases for functional testing based on documentation',
        'Developed automation testing scenarios with Selenium and performed database comparisons for validation',
        'Conducted performance testing with JMeter and tested software across different environments',
        'Created essential software documentation including Test Plan Documents, Test Report Documents, and Automation Test Reports.',
        'Authored comprehensive bug reports and engaged in problem-solving to resolve defects'
      ],
      technologies: ['Katalon', 'Java', 'Appium', 'Selenium'],
      image: imgWirecard, // Placeholder image
      liveLink: '#',
      githubLink: '#',
    },
    ,
    {
      title: 'Aprisma Indonesia: Java Developer',
      start_date: 'Jan, 2015',
      end_date: 'Nov, 2015',
      descriptions: [
        'Participate in coding, implantation requirement, bug fixing, testing and support banking solution'
      ],
      technologies: ['Java', 'Maven', 'Springboot'],
      image: imgAprisma, // Placeholder image
      liveLink: '#',
      githubLink: '#',
    },
  ];

  return (
    <section id="portfolio" className="bg-white py-16 px-8">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Experience</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {companies.map((project, index) => (
            <div key={index} className="bg-gray-50 rounded-lg shadow-xl overflow-hidden border border-gray-200">
              <img
                src={project.image}
                alt={project.title}
                className="w-full rounded-lg mb-4"
                onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/400x250/CCCCCC/333333?text=Gambar+Tidak+Tersedia'; }}
              />
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-gray-800 mb-3">{project.title}</h3>
                <h3 className="text-gray-600 mb-4">{project.start_date} - {project.end_date}</h3>
                <ul className="list-disc">
                {project.descriptions.map((description) => (
                    <li className="text-gray-600 mb-4">{description}</li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2 mb-4"> Technologies:
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="bg-indigo-100 text-indigo-700 text-sm font-medium px-3 py-1 rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>
                {/* <div className="flex justify-between items-center">
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-indigo-600 hover:text-indigo-800 font-semibold flex items-center"
                  >
                    Lihat Demo
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                    </svg>
                  </a>
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-gray-800 flex items-center"
                  >
                    GitHub
                    <svg className="w-4 h-4 ml-1" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.866 8.163 6.84 9.49C9.096 21.61 9.22 21.43 9.22 21.28v-1.89c-2.787.605-3.37-1.34-3.37-1.34-.454-1.157-1.11-1.465-1.11-1.465-.908-.618.069-.606.069-.606 1.007.07 1.532 1.03 1.532 1.03.893 1.53 2.34 1.087 2.91.83.09-.645.35-1.087.636-1.337-2.22-.253-4.555-1.11-4.555-4.943 0-1.09.39-1.984 1.03-2.68-.103-.253-.447-1.27.098-2.65 0 0 .84-.268 2.75 1.025A9.28 9.28 0 0112 6.84c.95.008 1.905.13 2.795.38 1.91-1.293 2.75-1.025 2.75-1.025.546 1.38.202 2.397.098 2.65.64.696 1.03 1.59 1.03 2.68 0 3.84-2.338 4.685-4.566 4.935.358.308.678.915.678 1.846v2.72c0 .153.12.33.357.25C19.134 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z" clipRule="evenodd"></path>
                    </svg>
                  </a>
                </div> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
