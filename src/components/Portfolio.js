// src/components/Portfolio.js
import React from 'react';

const Portfolio = () => {
  const companies = [
    {
      title: 'Bukalapak: Software Engineer',
      start_date: 'Oct, 2023',
      end_date: 'Dec, 2024',
      description: 'Membangun platform e-commerce lengkap dengan fitur keranjang belanja, pembayaran, dan manajemen produk.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      image: 'https://placehold.co/400x250/A78BFA/FFFFFF?text=Proyek+1', // Placeholder image
      liveLink: '#',
      githubLink: '#',
    },
    {
      title: 'Proyek 2: Dashboard Analitik',
      start_date: 'Oct, 2023',
      end_date: 'Dec, 2024',
      description: 'Mengembangkan dashboard interaktif untuk visualisasi data penjualan dan metrik bisnis penting.',
      technologies: ['React', 'D3.js', 'Express', 'PostgreSQL'],
      image: 'https://placehold.co/400x250/818CF8/FFFFFF?text=Proyek+2', // Placeholder image
      liveLink: '#',
      githubLink: '#',
    },
    {
      title: 'Proyek 3: Situs Blog Pribadi',
      start_date: 'Oct, 2023',
      end_date: 'Dec, 2024',
      description: 'Membuat situs blog yang responsif dengan sistem manajemen konten sederhana.',
      technologies: ['Next.js', 'Markdown', 'Tailwind CSS'],
      image: 'https://placehold.co/400x250/6366F1/FFFFFF?text=Proyek+3', // Placeholder image
      liveLink: '#',
      githubLink: '#',
    },
  ];

  return (
    <section id="portfolio" className="bg-white py-16 px-8">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">My Profile</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {companies.map((project, index) => (
            <div key={index} className="bg-gray-50 rounded-lg shadow-xl overflow-hidden border border-gray-200">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-56 object-cover"
                onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/400x250/CCCCCC/333333?text=Gambar+Tidak+Tersedia'; }}
              />
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-gray-800 mb-3">{project.title} | {project.start_date} - {project.end_date}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="bg-indigo-100 text-indigo-700 text-sm font-medium px-3 py-1 rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex justify-between items-center">
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
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
