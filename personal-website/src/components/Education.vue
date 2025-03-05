<template>
    <section id="education" class="section fade-in">
      <div class="container">
        <h2>Education & Achievements</h2>
        
        <!-- College Section -->
        <div class="education-category">
          <h3>🎓 College</h3>
          <a href="https://apc.edu.ph" target="_blank" class="education-card">
            <div class="card-image large-image">
              <img src="/public/images/APC1.jpeg" alt="Asia Pacific College" class="school-image" />
              <img src="/public/images/APC2.jpg" alt="Asia Pacific College" class="school-image" />
            </div>
            <div class="card-content">
              <p><strong>2023-2027</strong></p>
              <p>Asia Pacific College</p>
              <p>BS Computer Science (Cybersecurity & Forensics)</p>
              <p class="achievement">🏆 Honor Student</p>
            </div>
          </a>
        </div>
        
        <!-- Senior High & Junior High School Section -->
        <div class="education-category">
          <h3>📚 Senior & Junior High School</h3>
          <a href="https://www.facebook.com/PCSHS305370/" target="_blank" class="education-card">
            <div class="card-image large-image">
              <img src="/public/images/pcshs1.jpg" alt="Pasay City South High School" class="school-image" />
              <img src="/public/images/pcshs2.jpg" alt="Pasay City South High School" class="school-image" />
            </div>
            <div class="card-content">
              <p><strong>2021-2023</strong></p>
              <p>Pasay City South High School</p>
              <p class="achievement">🥇 With High Honors</p>
            </div>
          </a>
          <a href="https://www.facebook.com/PCSHS305370/" target="_blank" class="education-card">
            <div class="card-image large-image">
              <img src="/public/images/pcshs3.jpg" alt="Pasay City South High School" class="school-image" />
              <img src="/public/images/pcshs4.jpg" alt="Pasay City South High School" class="school-image" />
            </div>
            <div class="card-content">
              <p><strong>2017-2021</strong></p>
              <p>Pasay City South High School</p>
              <p>TVL-ICT</p>
              <p class="achievement">🥇 With High Honors</p>
            </div>
          </a>
        </div>
        
        <!-- Elementary Section -->
        <div class="education-category">
          <h3>🏅 Elementary</h3>
          <a href="https://www.facebook.com/vabes136596/" target="_blank" class="education-card">
            <div class="card-image large-image">
              <img src="/public/images/VABES1.jpg" alt="Villamor Air Base Elementary School" class="school-image" />
              <img src="/public/images/VABES2.jpg" alt="Villamor Air Base Elementary School" class="school-image" />
            </div>
            <div class="card-content">
              <p><strong>2011-2017</strong></p>
              <p>Villamor Air Base Elementary School</p>
              <p class="achievement">🥇 Honor Student</p>
            </div>
          </a>
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
  #education {
    background: #0a192f;
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
    color: #64ffda;
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
  
  /* Education Categories */
  .education-category {
    margin-bottom: 50px;
    text-align: center;
  }

  .education-category h3 {
    font-size: 2.5em;
    margin-bottom: 20px;
    color: #64ffda;
  }
  
  /* Education Cards */
  .education-card {
    background: rgba(255, 255, 255, 0.05);
    border-radius: 20px;
    overflow: hidden;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    text-decoration: none;
    color: inherit;
    display: inline-block;
    width: 80%;
    max-width: 600px;
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.1);
    margin-bottom: 20px;
  }
  
  .education-card:hover {
    transform: scale(1.05);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
  }
  
  .card-image {
    display: flex;
    justify-content: center;
    gap: 10px;
    padding: 10px;
  }
  
  .school-image {
    width: 200px;
    height: auto;
    border-radius: 10px;
  }
  
  .card-content {
    padding: 20px;
    text-align: center;
  }
  
  p {
    font-family: 'Open Sans', sans-serif;
    font-size: 1.1em;
    color: #ccd6f6;
  }
  
  .achievement {
    color: #64ffda;
    font-weight: 600;
    margin-top: 10px;
    display: inline-block;
    padding: 5px 10px;
    background: rgba(100, 255, 218, 0.1);
    border-radius: 20px;
  }
  </style>
