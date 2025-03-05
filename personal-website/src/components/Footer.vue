<template>
    <footer class="footer">
      <div class="container">
        <div class="contact-info">
          <a href="https://www.linkedin.com/in/ric-brian-boado/" target="_blank" class="footer-link">
            <i class="fab fa-linkedin"></i> LinkedIn
          </a> 
          <span class="divider">|</span>
          <a href="https://github.com/birccy" target="_blank" class="footer-link">
            <i class="fab fa-github"></i> GitHub
          </a>
          <span class="divider">|</span>
          <a href="mailto:ricbrian1234@gmail.com" class="footer-link">
            <i class="fas fa-envelope"></i> Email
          </a>
          <span class="divider">|</span>
          <a href="tel:+639953008727" class="footer-link">
            <i class="fas fa-phone"></i> +63 995 300 8727
          </a>
        </div>
        <p class="footer-text">© 2024 Ric Brian P. Boado. All rights reserved.</p>
      </div>
    </footer>
  </template>
  
  <script>
  export default {
    name: "Footer",
  };
  </script>
  
  <style scoped>
  .footer {
    background: linear-gradient(135deg, #0a192f, #1c3b57);
    color: #ffffff;
    padding: 50px 0;
    text-align: center;
    font-family: 'Poppins', sans-serif;
    width: 100%;
    position: relative;
    overflow: hidden;
  }
  
  .container {
    max-width: 1100px;
    margin: 0 auto;
    padding: 0 20px;
  }
  
  .contact-info {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 20px;
    align-items: center;
    margin-bottom: 20px;
  }
  
  .footer-link {
    color: #64ffda;
    text-decoration: none;
    font-size: 1.2em;
    transition: all 0.3s ease-in-out;
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 10px 15px;
    border-radius: 8px;
    background: rgba(100, 255, 218, 0.1);
  }
  
  .footer-link i {
    font-size: 1.5em;
  }
  
  .footer-link:hover {
    color: #ffffff;
    background: rgba(100, 255, 218, 0.3);
    transform: translateY(-3px);
    box-shadow: 0 4px 10px rgba(100, 255, 218, 0.5);
  }
  
  .divider {
    color: rgba(255, 255, 255, 0.4);
    font-size: 1.2em;
  }
  
  .footer-text {
    font-size: 1em;
    color: rgba(255, 255, 255, 0.7);
    margin-top: 15px;
  }
  
  @media (max-width: 768px) {
    .contact-info {
      flex-direction: column;
      gap: 10px;
    }
    
    .divider {
      display: none;
    }
  }
  </style>
