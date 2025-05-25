// src/components/About.js
import React from 'react';

const About = () => {
  return (
    <section id="about" className="bg-white py-16 px-8">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">About Me</h2>
        <div className="flex flex-col md:flex-row items-center md:space-x-8">
          {/* <div className="md:w-1/3 mb-8 md:mb-0">
            <img
              src="https://placehold.co/300x300/E0E7FF/4F46E5?text=About+Saya" // Placeholder for an illustrative image
              alt="About Saya Ilustrasi"
              className="rounded-lg shadow-xl w-full"
            />
          </div> */}
          <div className="md:w-3/3 text-lg text-gray-700 leading-relaxed text-justify">
            <h3 className="text-2xl font-bold text-center text-gray-800 mb-12">From Quality Assurance to Software Engineering</h3>
            <p className="mb-4">
              I am a dynamic and results-oriented professional with a total of 10 years of experience in the technology
              industry. My career journey began and flourished during nine years in Quality Assurance (QA),
              where I honed my expertise in ensuring product reliability and quality.
              I didn't just focus on testing, I became a key driver of efficiency through automation, from developing
              internal software for automated test case generation to significantly enhancing test automation execution
              speed across various platforms (iOS, Android, web).
              I'm proud to have led onboarding initiatives and knowledge-sharing sessions on automation frameworks for software engineers,
              empowering them for self-testing and accelerating the development process. . My proficiency spans API testing (GRPC, Postman),
              CI/CD implementation (Jenkins, GitLab), and managing regression tests in complex environments like payments and live streaming.
              My core drive has always been to create products that are not only innovative but also robust and bug-free. I've always been fascinated by how software works behind the scenes and how we can build it better. This curiosity fueled a significant shift in my career path.
            </p>
            <p className="mb-4">
              After building a very strong foundation in quality, I felt a calling to understand the core development process more deeply. Therefore, I decided to take on a role as a Software Engineer for the past year. This transition wasn't just a change in title; it was a leap I believed would perfect my perspective on the entire product development lifecycle. As a Software Engineer, I've successfully developed critical features that have directly contributed to company revenue, such as dynamic service fee systems, and implemented significant system optimizations (reducing product retrieval time from 40 seconds to 5 seconds).
            </p>
            <p>
              My current position is the result of a combination of unwavering dedication to quality, a drive for continuous learning and innovation, and the courage to step out of my comfort zone to expand my technical expertise. I believe this dual background—a QA professional who understands the intricacies of code and a Software Engineer who deeply values quality—makes me a unique and valuable asset to any team striving to build world-class technology products.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
