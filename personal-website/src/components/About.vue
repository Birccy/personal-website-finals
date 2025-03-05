<template>
    <section id="about" class="section fade-in">
      <div class="container">
        <h2>About Me</h2>
        <div class="about-grid">
          <!-- Profile Section (Profile Image on Left) -->
          <div class="about-card">
            <div class="profile-img-wrapper">
              <img :src="profileImg" :alt="name" class="profile-img" />
            </div>
          </div>
  
          <!-- Info Section (Personal Info and Interests) -->
          <div class="about-card">
            <h3>👨‍💻 Personal Info</h3>
            <p><strong>Name:</strong> {{ name }}</p>
            <p>Currently studying <strong>{{ degree }}</strong> at {{ college }}, {{ year }}.</p>
            <p>{{ academicAchievements }}</p>
  
            <h3>🎯 Interests</h3>
            <ul class="interests-list">
              <li><a href="https://www.miniclip.com/games/en/" target="_blank" class="interest-link">🎮 Video Games</a></li>
              <li><a href="https://github.com" target="_blank" class="interest-link">💻 Coding Projects</a></li>
              <li><a href="https://www.funimation.com" target="_blank" class="interest-link">📺 Anime & Animation</a></li>
              <li><a href="https://www.pma.edu.ph/" target="_blank" class="interest-link">⚔️ Military Strategy</a></li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script>
    export default {
      data() {
        return {
          name: "Ric Brian P. Boado",
          profileImg: "https://i.postimg.cc/BjhDX0kQ/FB-IMG-1733983675126.jpg",
          degree: "BS Computer Science (Cybersecurity & Forensics)",
          college: "Asia Pacific College (APC)",
          year: "2nd year",
          academicAchievements: "Consistent honor/high honor student from elementary to college.",
          interests: ["Video Games", "Coding Projects", "Anime & Animation", "Military Strategy"]
        };
      }
    };
  </script>
  
  <style scoped>
  /* About section styles */
  #about {
    background-color: #f4f4f4;
    padding: 60px 0;
  }
  
  .container {
    background-color: rgba(0, 0, 0, 0.6);
    padding: 20px;
    border-radius: 8px;
  }
  
  h2 {
    font-family: 'Montserrat', sans-serif;
    font-size: 2.5em;
    margin-bottom: 20px;
    color: #fff;
    text-align: center;
  }
  
  .about-grid {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    justify-content: space-between;
  }
  
  .about-card {
    background-color: rgba(255, 255, 255, 0.8);
    color: #333;
    padding: 20px;
    border-radius: 8px;
    flex: 1 1 45%;  /* Adjusted for side-by-side layout */
    margin-bottom: 20px;
  }
  
  .about-card h3 {
    font-family: 'Montserrat', sans-serif;
    font-size: 1.5em;
    margin-bottom: 15px;
    color: #333;
  }
  
  .about-card p {
    font-family: 'Open Sans', sans-serif;
    font-size: 1.1em;
    margin: 10px 0;
  }
  
  .about-card strong {
    color: #4CAF50;
  }
  
  .interests-list {
    list-style: none;
    padding: 0;
  }
  
  .interests-list li {
    font-family: 'Open Sans', sans-serif;
    font-size: 1.1em;
    margin: 8px 0;
    color: #333;
  }
  
  .interest-link {
    color: #4CAF50;
    text-decoration: none;
    transition: color 0.3s ease;
  }
  
  .interest-link:hover {
    color: #ff6b6b; /* Add hover effect to interest links */
  }
  
  .profile-img-wrapper {
    text-align: center;
    margin-bottom: 20px;
  }
  
  .profile-img {
    width: 100%;  /* Full width box */
    height: 500px;  /* Fixed height */
    object-fit: cover; /* Ensures the image covers the area */
    border-radius: 8px; /* Optional: round the corners of the image */
  }
  </style>
  