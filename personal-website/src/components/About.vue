<template>
    <section id="about" class="section fade-in">
      <div class="container">
        <h2>About Me</h2>
        <div class="about-grid">
          <!-- Profile Section (Profile Image on Left) -->
          <div class="profile-section">
            <div class="profile-img-wrapper">
              <img :src="profileImg" :alt="name" class="profile-img" />
            </div>
          </div>
  
          <!-- Info Section (Personal Info and Interests) -->
          <div class="info-section">
            <h3>👨‍💻 Personal Info</h3>
            <p><strong>Name:</strong> {{ name }}</p>
            <p>Currently studying <strong>{{ degree }}</strong> at {{ college }}, {{ year }}.</p>
            <p>{{ academicAchievements }}</p>
  
            <h3>🎯 Interests</h3>
            <ul class="interests-list">
              <li v-for="(interest, index) in interests" :key="index">
                <a :href="interestLinks[index]" target="_blank" class="interest-link">
                  {{ interestIcons[index] }} {{ interest }}
                </a>
              </li>
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
        profileImg: '/images/my1andonlyphoto.jpg',
        degree: "BS Computer Science (Cybersecurity & Forensics)",
        college: "Asia Pacific College (APC)",
        year: "2nd year",
        academicAchievements: "Consistent honor/high honor student from elementary to college.",
        interests: ["Video Games", "Coding Projects", "Anime & Animation", "Military Strategy"],
        interestIcons: ["🎮", "💻", "📺", "⚔️"],
        interestLinks: [
          "https://www.miniclip.com/games/en/",
          "https://github.com",
          "https://www.funimation.com",
          "https://www.pma.edu.ph/"
        ]
      };
    }
  };
  </script>
  
  <style scoped>
  /* About section styles */
  #about {
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
  
  .about-grid {
    display: flex;
    flex-wrap: wrap;
    gap: 40px;
    align-items: center;
  }
  
  .profile-section {
    flex: 1 1 40%;
    position: relative;
  }
  
  .profile-img-wrapper {
    border-radius: 50%;
    overflow: hidden;
    width: 300px;
    height: 300px;
    margin: 0 auto;
    border: 5px solid #64ffda;
    box-shadow: 0 0 20px rgba(100, 255, 218, 0.5);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }
  
  .profile-img-wrapper:hover {
    transform: scale(1.05);
    box-shadow: 0 0 30px rgba(100, 255, 218, 0.8);
  }
  
  .profile-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  
  .info-section {
    flex: 1 1 50%;
    padding: 20px;
    background: rgba(255, 255, 255, 0.05);
    border-radius: 20px;
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.1);
  }
  
  h3 {
    font-family: 'Poppins', sans-serif;
    font-size: 2em;
    margin-bottom: 20px;
    color: #64ffda;
  }
  
  p {
    font-family: 'Open Sans', sans-serif;
    font-size: 1.1em;
    margin: 10px 0;
    color: #ccd6f6;
  }
  
  strong {
    color: #64ffda;
  }
  
  .interests-list {
    list-style: none;
    padding: 0;
    display: flex;
    flex-wrap: wrap;
    gap: 15px;
  }
  
  .interests-list li {
    font-family: 'Open Sans', sans-serif;
    font-size: 1.1em;
    background: rgba(100, 255, 218, 0.1);
    padding: 10px 15px;
    border-radius: 25px;
    border: 1px solid rgba(100, 255, 218, 0.2);
    transition: background 0.3s ease, transform 0.3s ease;
  }
  
  .interests-list li:hover {
    background: rgba(100, 255, 218, 0.2);
    transform: translateY(-5px);
  }
  
  .interest-link {
    color: #64ffda;
    text-decoration: none;
    display: flex;
    align-items: center;
    gap: 8px;
  }
  
  .interest-link:hover {
    color: #ccd6f6;
  }
  </style>