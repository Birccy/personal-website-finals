<template>
    <section class="hero">
      <div class="container">
        <h1>Ric Brian P. Boado</h1>
        <p class="tagline">Cybersecurity Student & Aspiring PMA Cadet</p>
        <div class="social-links">
          <a href="https://www.linkedin.com/in/ric-brian-boado/" target="_blank">
            <img src="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png" alt="LinkedIn" class="social-icon">
          </a>
          <a href="https://github.com/birccy" target="_blank">
            <img src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg" alt="GitHub" class="social-icon">
          </a>
          <a href="mailto:ricbrian1234@gmail.com">
            <img src="https://upload.wikimedia.org/wikipedia/commons/7/7e/Gmail_icon_%282020%29.svg" alt="Email" class="social-icon">
          </a>
          <a href="tel:+639953008727">
            <img src="https://upload.wikimedia.org/wikipedia/commons/6/6c/Phone_icon.png" alt="Phone" class="social-icon">
          </a>
        </div>
      </div>
    </section>
  </template>
  
  <style scoped>
  /* Hero section styles */
  .hero {
    background: linear-gradient(to right, #000000, #2a2a2a, #121212); /* Dark space-like gradient */
    padding: 100px 0;
    text-align: center;
    color: #fff;
    border-bottom: 5px solid #fff;
    background-size: cover;
    background-position: center;
  }
  
  .container {
    padding: 20px;
    max-width: 800px;
    margin: 0 auto;
  }
  
  h1 {
    font-family: 'Montserrat', sans-serif;
    font-size: 3.5em;
    margin-bottom: 10px;
    font-weight: 700;
  }
  
  .tagline {
    font-family: 'Open Sans', sans-serif;
    font-size: 1.5em;
    margin-bottom: 20px;
    font-weight: 300;
    color: #ddd;
  }
  
  .social-links {
    display: flex;
    justify-content: center;
    gap: 20px;
    margin-top: 30px;
  }
  
  .social-icon {
    width: 40px;
    height: 40px;
    object-fit: contain;
    transition: transform 0.3s ease, opacity 0.3s ease;
  }
  
  .social-icon:hover {
    transform: scale(1.1);
    opacity: 0.8;
  }
  </style>
  