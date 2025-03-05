<template>
    <section id="education" class="section fade-in">
      <div class="container">
        <h2>Education & Achievements</h2>
        
        <!-- Timeline Layout -->
        <div class="timeline">
          <!-- College -->
          <div class="timeline-item">
            <div class="timeline-content">
              <div class="timeline-images">
                <img src="/public/images/APC1.jpeg" alt="Asia Pacific College" class="school-image" />
                <img src="/public/images/APC2.jpg" alt="Asia Pacific College" class="school-image" />
              </div>
              <div class="timeline-details">
                <h3>🎓 College</h3>
                <p><strong>2023-2027</strong></p>
                <p>Asia Pacific College</p>
                <p>BS Computer Science (Cybersecurity & Forensics)</p>
                <p class="achievement">🏆 Honor Student</p>
              </div>
            </div>
          </div>
  
          <!-- Senior High School -->
          <div class="timeline-item">
            <div class="timeline-content">
              <div class="timeline-images">
                <img src="/public/images/pcshs1.jpg" alt="Pasay City South High School" class="school-image" />
                <img src="/public/images/pcshs2.jpg" alt="Pasay City South High School" class="school-image" />
              </div>
              <div class="timeline-details">
                <h3>📚 Senior High School</h3>
                <p><strong>2021-2023</strong></p>
                <p>Pasay City South High School</p>
                <p class="achievement">🥇 With High Honors</p>
              </div>
            </div>
          </div>
  
          <!-- Junior High School -->
          <div class="timeline-item">
            <div class="timeline-content">
              <div class="timeline-images">
                <img src="/public/images/pcshs3.jpg" alt="Pasay City South High School" class="school-image" />
                <img src="/public/images/pcshs4.jpg" alt="Pasay City South High School" class="school-image" />
              </div>
              <div class="timeline-details">
                <h3>🏫 Junior High School</h3>
                <p><strong>2017-2021</strong></p>
                <p>Pasay City South High School</p>
                <p>TVL-ICT</p>
                <p class="achievement">🥇 With High Honors</p>
              </div>
            </div>
          </div>
  
          <!-- Elementary -->
          <div class="timeline-item">
            <div class="timeline-content">
              <div class="timeline-images">
                <img src="/public/images/VABES1.jpg" alt="Villamor Air Base Elementary School" class="school-image" />
                <img src="/public/images/VABES2.jpg" alt="Villamor Air Base Elementary School" class="school-image" />
              </div>
              <div class="timeline-details">
                <h3>🏅 Elementary</h3>
                <p><strong>2011-2017</strong></p>
                <p>Villamor Air Base Elementary School</p>
                <p class="achievement">🥇 Honor Student</p>
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
    margin-bottom: 60px;
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
  
  /* Timeline Layout */
  .timeline {
    position: relative;
    max-width: 900px;
    margin: 0 auto;
  }
  
  .timeline::before {
    content: '';
    position: absolute;
    top: 0;
    left: 50%;
    width: 4px;
    height: 100%;
    background: rgba(100, 255, 218, 0.2);
    transform: translateX(-50%);
  }
  
  .timeline-item {
    padding: 20px 40px;
    position: relative;
    width: 50%;
  }
  
  .timeline-item:nth-child(odd) {
    left: 0;
  }
  
  .timeline-item:nth-child(even) {
    left: 50%;
  }
  
  .timeline-content {
    background: rgba(255, 255, 255, 0.05);
    border-radius: 20px;
    padding: 20px;
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.1);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }
  
  .timeline-item:hover .timeline-content {
    transform: translateY(-10px);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
  }
  
  .timeline-images {
    display: flex;
    gap: 10px;
    margin-bottom: 15px;
  }
  
  .school-image {
    width: 48%;
    height: 150px;
    object-fit: cover;
    border-radius: 10px;
    transition: transform 0.3s ease;
  }
  
  .timeline-item:hover .school-image {
    transform: scale(1.05);
  }
  
  .timeline-details h3 {
    font-size: 1.8em;
    margin-bottom: 10px;
    color: #64ffda;
  }
  
  .timeline-details p {
    font-family: 'Open Sans', sans-serif;
    font-size: 1.1em;
    color: #ccd6f6;
    margin: 8px 0;
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
  
  /* Responsive Design */
  @media (max-width: 768px) {
    .timeline::before {
      left: 20px;
    }
  
    .timeline-item {
      width: 100%;
      padding-left: 70px;
      padding-right: 20px;
    }
  
    .timeline-item:nth-child(even) {
      left: 0;
    }
  
    .school-image {
      width: 100%;
      height: 120px;
    }
  
    .timeline-images {
      flex-direction: column;
    }
  }
  </style>