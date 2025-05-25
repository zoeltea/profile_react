import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header>
        <h1>Zul Yatman</h1>
        <nav>
          <a href="#about">About Me</a>
          <a href="#skills">skills</a>
          <a href="#contact">contact</a>
        </nav>
      </header>

      <section id="about">
        <h2>About Me</h2>
        <p>Dedicated as Quality Engineer with 9 years of experience, now moving into Software Engineering to grow my technical skills. I’ve built tools to automate test cases and generate reports, making my team more efficient. I’ve also improved test automation speed, fixed unreliable tests (for Android, iOS, and web), and trained engineers on automation frameworks. My skills include API testing, CI/CD (Jenkins, GitLab), and managing testing for complex payment and live streaming systems.</p>
      </section>

      <section id="skills">
        <h2>Keterampilan</h2>
        <ul>
          <li>Quality Engineer</li>
          <li>Software Engineer</li>
          <li>Golan, Appium</li>
        </ul>
      </section>

      <section id="contact">
        <h2>Kontak</h2>
        <p>Email: zoeltea@gmail.com</p>
      </section>

      <footer>
        <p>© 2025 Zul Yatman</p>
      </footer>
    </div>
  );
}

export default App;