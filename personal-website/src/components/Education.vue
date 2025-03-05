<template>
    <section id="education" class="section fade-in">
      <div class="container">
        <h2>Education & Achievements</h2>
        <div class="education-grid">
          <div class="education-card">
            <h3>🎓 College</h3>
            <p><strong>2023-2027</strong></p>
            <p>Asia Pacific College</p>
            <p>BS Computer Science (Cybersecurity & Forensics)</p>
            <p>🏆 Honor Student</p>
          </div>
          <div class="education-card">
            <h3>📚 Senior High School</h3>
            <p><strong>2021-2023</strong></p>
            <p>Pasay City South High School</p>
            <p>🥇 With High Honors</p>
          </div>
          <div class="education-card">
            <h3>🏫 Junior High School</h3>
            <p><strong>2017-2021</strong></p>
            <p>Pasay City South High School</p>
            <p>TVL-ICT</p>
            <p>🥇 With High Honors</p>
          </div>
          <div class="education-card">
            <h3>🏅 Elementary</h3>
            <p><strong>2011-2017</strong></p>
            <p>Villamor Air Base Elementary School</p>
            <p>🥇 Honor Student</p>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <style scoped>
  @import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;700&family=Montserrat:wght@700&display=swap');
  
  #education {
    background-image: url('https://www.apc.edu.ph/wp-content/uploads/2021/05/apc-building.jpg'); /* APC Campus */
    background-size: cover;
    background-position: center;
    color: #fff;
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
    text-align: center;
  }
  
  .education-grid {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 20px;
  }
  
  .education-card {
    background-color: rgba(255, 255, 255, 0.85);
    color: #333;
    padding: 20px;
    border-radius: 8px;
    flex: 1 1 280px;
    text-align: center;
  }
  
  .education-card h3 {
    font-family: 'Montserrat', sans-serif;
    font-size: 1.5em;
    margin-bottom: 10px;
  }
  
  .education-card p {
    font-family: 'Open Sans', sans-serif;
    font-size: 1em;
    margin: 5px 0;
  }
  </style>
  