<template>
    <section id="portfolio" class="section fade-in">
      <div class="container">
        <h2>Portfolio & Projects</h2>
        <div class="portfolio-grid">
          <!-- Animation Projects -->
          <div class="portfolio-card animation-card">
            <div class="card-content">
              <h3>🎬 Animation & Motion Design</h3>
              <div class="project-gallery">
                <div class="project-item">
                  <img src="/public/animations/1ST ACTIVITY BOUNCING BALL.gif" alt="Bouncing Ball Animation" class="project-image" />
                  <p class="project-caption">Bouncing Ball Animation</p>
                </div>
                <div class="project-item">
                  <img src="/public/animations/2ND BOUNCING BALL.gif" alt="Bouncing Ball Animation 2" class="project-image" />
                  <p class="project-caption">Bouncing Ball Animation 2</p>
                </div>
                <div class="project-item">
                  <video controls class="project-image">
                    <source src="/public/animations/3RD ANIMATION ANTICIPATION.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                  <p class="project-caption">Anticipation Animation</p>
                </div>
                <div class="project-item">
                  <img src="/public/animations/BOADO-FLIPBOOK ANIMATION ACTIVITY.gif" alt="Flipbook Animation" class="project-image" />
                  <p class="project-caption">Flipbook Animation</p>
                </div>
                <div class="project-item">
                  <img src="/public/animations/CHARACTER ARC BOADO.gif" alt="Character Arc Animation" class="project-image" />
                  <p class="project-caption">Character Arc Animation</p>
                </div>
                <div class="project-item">
                  <img src="/public/animations/flight of bird boado.gif" alt="Flight of Bird Animation" class="project-image" />
                  <p class="project-caption">Flight of Bird Animation</p>
                </div>
                <div class="project-item">
                  <img src="/public/animations/SKIP ANIMATION.gif" alt="Skip Animation" class="project-image" />
                  <p class="project-caption">Skip Animation</p>
                </div>
                <div class="project-item">
                  <video controls class="project-image">
                    <source src="/public/animations/StopMotion.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                  <p class="project-caption">Stop Motion Animation</p>
                </div>
              </div>
            </div>
          </div>
  
          <!-- Hardware Projects -->
          <div class="portfolio-card hardware-card">
            <div class="card-content">
              <h3>🖥️ Hardware Engineering</h3>
              <div class="project-gallery">
                <div class="project-item">
                  <img src="/public/images/BIOSCONFIG.jpg" alt="BIOS Configuration" class="project-image" />
                  <p class="project-caption">BIOS Configuration</p>
                </div>
                <div class="project-item">
                  <img src="/public/images/CABLEMANAGEMENT.jpg" alt="Cable Management" class="project-image" />
                  <p class="project-caption">Cable Management</p>
                </div>
                <div class="project-item">
                  <img src="/public/images/CPURYZEN.jpg" alt="CPU Ryzen Build" class="project-image" />
                  <p class="project-caption">Custom PC Build</p>
                </div>
              </div>
              <ul class="skills-list">
                <li>Built custom PC rig</li>
                <li>Hardware troubleshooting</li>
                <li>Component selection and assembly</li>
                <li>System optimization</li>
              </ul>
            </div>
          </div>
  
          <!-- Coding Projects -->
          <div class="portfolio-card coding-card">
            <div class="card-content">
              <h3>💻 Software Development</h3>
              <div class="skills-container">
                <ul class="skills-list">
                  <li><strong>Java:</strong> Developed simple programs using java (I still suck)</li>
                  <li><strong>Python:</strong> Built automation scripts and data analysis tools</li>
                  <li><strong>Web Development:</strong> HTML, CSS, JavaScript, Vue.js</li>
                  <li><strong>Database Management:</strong> Designed and managed SQL databases using MariaDB and MySQL</li>
                  <li><strong>Networking:</strong> Basic Wireshark usage and network troubleshooting</li>
                  <li><strong>Cybersecurity:</strong> Explored ethical hacking and security best practices</li>
                </ul>
                <div class="coming-soon">
                  <p>🚧 More coding projects coming soon!</p>
                  <p>I'm currently expanding my skills in:</p>
                  <ul>
                    <li>React.js</li>
                    <li>Node.js</li>
                    <li>TypeScript</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </template>
  
<style scoped>
/* Base Reset */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

/* Background and Container */
#portfolio {
  background: #0a192f; /* Dark navy background */
  padding: 100px 0;
  color: #ccd6f6;
  overflow: hidden;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

h2 {
  font-family: 'Poppins', sans-serif;
  font-size: 3.5em;
  margin-bottom: 40px;
  text-align: center;
  color: #64ffda; /* Teal accent color */
  text-transform: uppercase;
  letter-spacing: 4px;
  position: relative;
}

h2::after {
  content: '';
  display: block;
  width: 60px;
  height: 4px;
  background: #64ffda;
  margin: 10px auto 0;
}

/* Portfolio Grid Layout */
.portfolio-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
}

.portfolio-card {
  background: rgba(255, 255, 255, 0.05);
  border-radius: 20px;
  padding: 25px;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.portfolio-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
}

h3 {
  font-family: 'Poppins', sans-serif;
  font-size: 2em;
  margin-bottom: 20px;
  color: #64ffda;
}

/* Project Gallery */
.project-gallery {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
  margin-bottom: 20px;
}

.project-item {
  position: relative;
  overflow: hidden;
  border-radius: 10px;
  aspect-ratio: 16/9;
  transition: transform 0.3s ease;
}

.project-item:hover {
  transform: scale(1.05);
}

.project-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

video {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.project-caption {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 10px;
  background: rgba(0, 0, 0, 0.7);
  color: white;
  text-align: center;
  font-size: 0.9rem;
}

/* Skills List */
.skills-list {
  list-style: none;
  padding: 0;
}

.skills-list li {
  padding: 10px 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  font-family: 'Open Sans', sans-serif;
  font-size: 1.1em;
  color: #ccd6f6;
}

.skills-list li::before {
  content: '▹';
  margin-right: 10px;
  color: #64ffda;
}

/* Coming Soon Section */
.coming-soon {
  margin-top: 20px;
  padding: 15px;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 10px;
  border-left: 4px solid #ffe66d;
}

.coming-soon p {
  font-family: 'Open Sans', sans-serif;
  font-size: 1.1em;
  color: #ccd6f6;
}

.coming-soon p:first-child {
  font-size: 1.2em;
  margin-bottom: 10px;
  color: #ffe66d;
}

/* Fix for the "Expanding Skills" list */
.coming-soon ul {
  padding-left: 20px; /* Add padding to the left of the list */
  margin-left: 10px; /* Optional: Add margin to the left of the list */
}

.coming-soon li {
  list-style-position: inside; /* Ensure bullets are inside the padding */
}

/* Responsive Design */
@media (max-width: 768px) {
  h2 {
    font-size: 2.5rem;
  }

  .portfolio-grid {
    grid-template-columns: 1fr;
  }

  .project-gallery {
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  }
}
</style>